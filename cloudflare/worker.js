export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "POST" && (url.pathname === "/api/consult" || url.pathname === "/api/consult/")) {
      const { text } = await request.json();
      return new Response(
        JSON.stringify({ ok: true, echo: text }),
        { headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response("syugo-sin-worker is running");
  }
}