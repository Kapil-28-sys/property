// FILE LOCATION: src/app/api/upload/route.js
// (If you use Pages Router instead, see the note at the bottom of this file)

import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    /* ─────────────────────────────────────
       1. ENSURE  public/uploads  EXISTS
    ───────────────────────────────────── */
    const uploadDir = path.join(
      process.cwd(),
      "public",
      "uploads"
    );

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    /* ─────────────────────────────────────
       2. PARSE MULTIPART FORM DATA
    ───────────────────────────────────── */
    const formData = await req.formData();

    // The SellerForm appends each image with the key "files"
    const files = formData.getAll("files");

    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, message: "No files received" },
        { status: 400 }
      );
    }

    /* ─────────────────────────────────────
       3. VALIDATE & SAVE EACH FILE
    ───────────────────────────────────── */
    const ALLOWED_TYPES = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/avif",
    ];

    const MAX_SIZE_MB = 10;
    const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

    const urls = await Promise.all(
      files.map(async (file) => {
        // Type check
        if (!ALLOWED_TYPES.includes(file.type)) {
          throw new Error(
            `File "${file.name}" is not a supported image type.`
          );
        }

        // Size check
        if (file.size > MAX_SIZE_BYTES) {
          throw new Error(
            `File "${file.name}" exceeds the ${MAX_SIZE_MB} MB limit.`
          );
        }

        // Read file bytes
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Build a safe, unique filename:  1718000000000-my-photo.jpg
        const safeName = `${Date.now()}-${file.name
          .replace(/\s+/g, "_")       // spaces → underscore
          .replace(/[^a-zA-Z0-9._-]/g, "") // strip unsafe chars
        }`;

        const filePath = path.join(uploadDir, safeName);

        fs.writeFileSync(filePath, buffer);

        // Return the public URL (relative, works on any host)
        return `/uploads/${safeName}`;
      })
    );

    /* ─────────────────────────────────────
       4. RETURN SUCCESS + URLS
    ───────────────────────────────────── */
    return NextResponse.json({ success: true, urls });

  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    return NextResponse.json(
      { success: false, message: error.message || "Server error during upload" },
      { status: 500 }
    );
  }
}

/* ─────────────────────────────────────────────────────────────────────────────
   PAGES ROUTER ALTERNATIVE
   If your project uses  src/pages/  instead of  src/app/ , delete everything
   above and use this file at:  src/pages/api/upload.js
   ─────────────────────────────────────────────────────────────────────────────

import fs from "fs";
import path from "path";
import formidable from "formidable";

export const config = {
  api: { bodyParser: false }, // Required — let formidable parse the stream
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const uploadDir = path.join(process.cwd(), "public", "uploads");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = formidable({
    multiples: true,
    uploadDir,
    keepExtensions: true,
    maxFileSize: 10 * 1024 * 1024, // 10 MB per file
    filename: (_name, ext, part) => {
      const original = part.originalFilename || `file${ext}`;
      const safe = original.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9._-]/g, "");
      return `${Date.now()}-${safe}`;
    },
  });

  form.parse(req, (err, _fields, files) => {
    if (err) {
      console.error("FORMIDABLE ERROR:", err);
      return res.status(500).json({ success: false, message: "Upload failed" });
    }

    let uploadedFiles = files.files ?? [];
    if (!Array.isArray(uploadedFiles)) uploadedFiles = [uploadedFiles];

    const urls = uploadedFiles.map(
      (file) => `/uploads/${path.basename(file.filepath)}`
    );

    return res.status(200).json({ success: true, urls });
  });
}
*/