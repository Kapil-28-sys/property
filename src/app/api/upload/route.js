// File location: app/api/upload/route.js

import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("images");

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files received" }, { status: 400 });
    }

    // Get the full origin (e.g. http://localhost:3000 or https://yourdomain.com)
    const origin = req.headers.get("origin") || req.headers.get("host");
    const baseUrl = origin?.startsWith("http") ? origin : `https://${origin}`;

    // Make sure public/uploads exists
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });

    const urls = await Promise.all(
      files.map(async (file) => {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Unique filename
        const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
        const filename = `${Date.now()}_${Math.random().toString(36).slice(2)}_${safeName}`;
        const filePath = path.join(uploadDir, filename);

        await writeFile(filePath, buffer);

        // Return FULL absolute URL so external APIs can access it
        return `${baseUrl}/uploads/${filename}`;
      })
    );

    return NextResponse.json({ urls });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}