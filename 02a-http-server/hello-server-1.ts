function handler(_req: Request) {
  return new Response("Hello, Deno!");
}

Deno.serve({ port: 8000, handler });
