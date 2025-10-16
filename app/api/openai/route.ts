import OpenAI from "openai";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Missing OPENAI_API_KEY" }), { status: 500 });
  }
  try {
    const { messages } = await req.json();
    const client = new OpenAI({ apiKey });
    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

    const completion = await client.chat.completions.create({
      model,
      messages: messages ?? [{ role: "user", content: "Hello!" }],
      temperature: 0.3
    });

    return new Response(JSON.stringify(completion), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: String(err?.message || err) }), { status: 500 });
  }
}

export async function GET() {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
