export async function POST(request, { params }) {
  const path = params.path.join("/");
  const body = await request.json();

  const response = await fetch(
    `http://property.concentics.com/api/${path}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();
  return Response.json(data, { status: response.status });
}

export async function GET(request, { params }) {
  const path = params.path.join("/");

  const response = await fetch(
    `http://property.concentics.com/api/${path}`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  const data = await response.json();
  return Response.json(data, { status: response.status });
}