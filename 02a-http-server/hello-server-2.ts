Deno.serve(async (req) => {
  console.log("---");
  console.log("Method:", req.method);

  const url = new URL(req.url);

  console.log("Path:", url.pathname);
  console.log("Query parameters:", url.searchParams);

  console.log("Headers:", req.headers);

  if (req.body) {
    const body = await req.text();
    console.log("Body:", body);
  }

  return new Response("Hello, World!", {
    status: 404,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });
});
