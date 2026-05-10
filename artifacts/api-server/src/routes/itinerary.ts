import { Router, type IRouter } from "express";
import { openai } from "@workspace/integrations-openai-ai-server";

const router: IRouter = Router();

router.post("/itinerary/generate", async (req, res) => {
  const { prompt } = req.body as { prompt?: string };

  if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
    res.status(400).json({ error: "prompt is required" });
    return;
  }

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const stream = await openai.chat.completions.create({
      model: "gpt-5.4",
      max_completion_tokens: 8192,
      messages: [
        {
          role: "system",
          content: `You are Jaiscape's expert travel planner for Jaisalmer, Rajasthan. Create beautiful, detailed day-by-day itineraries.

Format your response as a structured JSON object like this:
{
  "title": "Short evocative trip title",
  "days": [
    {
      "day": 1,
      "theme": "Day theme (e.g. 'The Golden Arrival')",
      "activities": [
        { "time": "14:00", "activity": "Activity description" }
      ]
    }
  ],
  "tip": "One insider tip for this trip"
}

Use real Jaisalmer locations: Jaisalmer Fort, Sam Sand Dunes, Kuldhara, Gadisar Lake, SUJÁN The Serai, Hotel Gorband Palace, Chokhi Dhani, Jaisalmer Havelis, Tanot Mata Temple, Bada Bagh, etc.
Make it feel premium, cinematic, and authentic. Respond ONLY with valid JSON.`,
        },
        {
          role: "user",
          content: prompt.trim(),
        },
      ],
      stream: true,
    });

    let fullResponse = "";
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        fullResponse += content;
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.write(`data: ${JSON.stringify({ error: message })}\n\n`);
    res.end();
  }
});

export default router;
