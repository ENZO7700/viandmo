import OpenAI from "openai";

export default async function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.status(204).end();

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "Missing OPENAI_API_KEY" });

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const messages = body.messages ?? [{ role: "user", content: "Hello!" }];
    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
    const client = new OpenAI({ apiKey });

    const completion = await client.chat.completions.create({
      model, messages, temperature: 0.3
    });

    return res.status(200).json(completion);
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: String(err?.message || err) });
  }
}
