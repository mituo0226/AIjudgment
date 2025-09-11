import { runConsult } from "../../consult/consult.js";

export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    const result = await runConsult(data);
    return new Response(
      JSON.stringify({ ok: true, paragraphs: result.split("\n\n") }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
