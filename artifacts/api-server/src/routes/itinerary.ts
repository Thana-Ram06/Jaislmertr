import { Router } from "express";

const router = Router();

router.post("/itinerary/generate", async (req, res) => {
  const { prompt } = req.body as { prompt?: string };

  if (!prompt) {
    res.status(400).json({ error: "prompt is required" });
    return;
  }

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const days = parseInt((prompt.match(/(\d+)-day/) || [])[1] || "2", 10);
  const numDays = Math.min(Math.max(days, 1), 7);

  const dayThemes: string[] = [
    "Arrival & The Golden Fort",
    "Desert Dunes & Sunset Safari",
    "Hidden Villages & Local Culture",
    "Lakes, Havelis & Rooftop Dining",
    "Desert Camps & Stargazing",
    "Jaisalmer Markets & Farewell",
    "Leisure & Departure",
  ];

  const dayActivities: { time: string; activity: string }[][] = [
    [
      { time: "09:00", activity: "Check in and freshen up at your hotel" },
      { time: "11:00", activity: "Explore Jaisalmer Fort (Sonar Quila)" },
      { time: "13:30", activity: "Lunch at a rooftop café inside the fort" },
      { time: "15:00", activity: "Visit Patwon Ki Haveli" },
      { time: "17:30", activity: "Sunset view from Vyas Chatri" },
      { time: "20:00", activity: "Dinner at Trio Restaurant" },
    ],
    [
      { time: "06:30", activity: "Early morning camel ride at Sam Sand Dunes" },
      { time: "09:00", activity: "Breakfast back at hotel" },
      { time: "11:00", activity: "Visit Gadisar Lake" },
      { time: "13:00", activity: "Lunch at Saffron Restaurant" },
      { time: "15:00", activity: "Relax at the hotel or explore the bazaar" },
      { time: "17:00", activity: "Jeep safari to the dunes for sunset" },
      { time: "20:00", activity: "Dinner under the stars at a desert camp" },
    ],
    [
      { time: "08:00", activity: "Visit Kuldhara Abandoned Village" },
      { time: "10:30", activity: "Explore local artisan workshops" },
      { time: "13:00", activity: "Traditional Rajasthani thali lunch" },
      { time: "15:00", activity: "Visit Bada Bagh cenotaphs" },
      { time: "17:00", activity: "Sunset at Amar Sagar" },
      { time: "20:00", activity: "Folk music performance and dinner" },
    ],
    [
      { time: "09:00", activity: "Boat ride on Gadisar Lake at sunrise" },
      { time: "11:00", activity: "Visit Salim Singh Ki Haveli" },
      { time: "13:00", activity: "Lunch at a local dhaba" },
      { time: "15:00", activity: "Shopping at Sadar Bazaar" },
      { time: "17:30", activity: "Sunset from the fort ramparts" },
      { time: "20:00", activity: "Rooftop dinner with fort views" },
    ],
    [
      { time: "10:00", activity: "Late checkout and leisure morning" },
      { time: "12:00", activity: "Final lunch at Jaisalmer" },
      { time: "14:00", activity: "Last-minute souvenir shopping" },
      { time: "16:00", activity: "Depart with golden memories" },
    ],
  ];

  const itinerary = {
    title: `${numDays}-Day Jaisalmer Experience`,
    days: Array.from({ length: numDays }, (_, i) => ({
      day: i + 1,
      theme: dayThemes[i % dayThemes.length],
      activities: dayActivities[i % dayActivities.length],
    })),
    tip: "Best visited between October and March. Book desert camp stays in advance during peak season.",
  };

  const json = JSON.stringify(itinerary);
  const chunkSize = 50;
  for (let i = 0; i < json.length; i += chunkSize) {
    const chunk = json.slice(i, i + chunkSize);
    res.write(`data: ${JSON.stringify({ content: chunk })}\n\n`);
  }

  res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
  res.end();
});

export default router;
