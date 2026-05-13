export interface ItineraryActivity {
  time: string;
  activity: string;
}

export interface ItineraryDay {
  day: number;
  theme: string;
  activities: ItineraryActivity[];
}

export interface Itinerary {
  title: string;
  days: ItineraryDay[];
  tip: string;
  budgetEstimate: string;
  highlights: string[];
}

const BASE_DAYS: ItineraryDay[] = [
  {
    day: 1,
    theme: "Arrival & The Golden Fort",
    activities: [
      { time: "09:00", activity: "Arrive in Jaisalmer — check into your hotel and freshen up" },
      { time: "10:30", activity: "Walk the narrow lanes of Jaisalmer Fort (Sonar Quila) at your own pace" },
      { time: "12:30", activity: "Lunch at a rooftop café inside the fort with views of the golden city" },
      { time: "14:30", activity: "Explore Patwon Ki Haveli — 5 interconnected merchant mansions with ornate carvings" },
      { time: "16:30", activity: "Stroll through Dussehra Chowk and browse local artisan shops" },
      { time: "18:30", activity: "Sunset from the fort ramparts — golden hour over the Thar Desert" },
      { time: "20:00", activity: "Dinner at a heritage restaurant with live Rajasthani folk music" },
    ],
  },
  {
    day: 2,
    theme: "Desert & Dunes",
    activities: [
      { time: "06:00", activity: "Early morning drive to Sam Sand Dunes for a sunrise camel ride" },
      { time: "08:00", activity: "Breakfast at a desert camp with chai and parathas under the open sky" },
      { time: "10:00", activity: "Visit Kuldhara — the abandoned ghost village with a haunting history" },
      { time: "12:30", activity: "Lunch back in town — try laal maas and ker sangri at a local dhaba" },
      { time: "14:30", activity: "Explore Gadisar Lake — ancient reservoir with ghats and temples" },
      { time: "16:30", activity: "Visit the Desert Culture Centre & Museum" },
      { time: "18:30", activity: "Return to Sam Dunes for a bonfire evening with folk performances" },
      { time: "20:30", activity: "Overnight stay under the stars at a luxury desert camp" },
    ],
  },
  {
    day: 3,
    theme: "Havelis & Hidden Corners",
    activities: [
      { time: "07:30", activity: "Morning desert walk — experience the silence of the Thar at dawn" },
      { time: "09:00", activity: "Visit Nathmal Ki Haveli — intricate carvings done by two brothers independently" },
      { time: "10:30", activity: "Explore Salim Singh Ki Haveli — peacock-shaped roof and unique architecture" },
      { time: "12:00", activity: "Lunch at Jaisalmer's best-kept secret rooftop café" },
      { time: "14:00", activity: "Head to Bada Bagh — royal cenotaphs of the Bhati rulers at golden hour" },
      { time: "16:00", activity: "Drive to Amar Sagar Lake and the ancient Jain Temple ruins" },
      { time: "18:00", activity: "Photography walk through the fort's yellow-stone alleys at dusk" },
      { time: "20:00", activity: "Candlelit dinner at a rooftop restaurant with fort views" },
    ],
  },
  {
    day: 4,
    theme: "Temples & Sacred Grounds",
    activities: [
      { time: "07:00", activity: "Visit Jain Temples inside the fort — masterpieces of marble craftsmanship" },
      { time: "09:00", activity: "Explore Lodhurva — ancient Jain temples outside the city walls" },
      { time: "11:00", activity: "Drive to Mool Sagar — a royal garden oasis in the desert" },
      { time: "12:30", activity: "Lunch at a local family-run restaurant — authentic Rajasthani thali" },
      { time: "14:30", activity: "Akal Fossil Park — 180 million year old fossilised trees" },
      { time: "16:30", activity: "Visit Vyas Chhatri — sand-carved cenotaphs with panoramic views" },
      { time: "18:00", activity: "Sunset meditation at the dunes near Khuri village" },
      { time: "20:00", activity: "Dinner with folk performances at a heritage haveli restaurant" },
    ],
  },
  {
    day: 5,
    theme: "Off-the-Beaten-Path",
    activities: [
      { time: "06:30", activity: "Sunrise at Khuri Sand Dunes — quieter, more authentic than Sam" },
      { time: "08:30", activity: "Breakfast with the local Khuri community — experience rural Rajasthan" },
      { time: "10:30", activity: "Drive to Tanot Mata Temple — sacred temple on the India-Pakistan border" },
      { time: "13:00", activity: "Visit Longewala War Memorial — historic 1971 war site" },
      { time: "14:30", activity: "Lunch on the way back — army-style meal near the border region" },
      { time: "16:30", activity: "Pokhran Fort — lesser-known fort with regal chambers" },
      { time: "19:00", activity: "Return to Jaisalmer for a relaxed evening at Manak Chowk market" },
      { time: "20:30", activity: "Dinner at a fort-view terrace restaurant" },
    ],
  },
  {
    day: 6,
    theme: "Desert Safari & Wilderness",
    activities: [
      { time: "07:00", activity: "Early morning jeep safari into the remote Thar Desert" },
      { time: "09:00", activity: "Spot desert wildlife — Chinkara, foxes, and desert birds" },
      { time: "11:00", activity: "Visit Desert National Park — home to the Great Indian Bustard" },
      { time: "13:00", activity: "Packed lunch in the wilderness — picnic among sand dunes" },
      { time: "15:00", activity: "Learn desert survival skills with a local guide" },
      { time: "17:00", activity: "Dune bashing and quad biking at Sam dunes" },
      { time: "19:00", activity: "Sunset camel caravan across the dunes" },
      { time: "20:30", activity: "Bonfire dinner under a canopy of stars" },
    ],
  },
  {
    day: 7,
    theme: "Leisure & Craft Markets",
    activities: [
      { time: "08:00", activity: "Slow morning — breakfast at a heritage café in the old city" },
      { time: "10:00", activity: "Visit the Government Museum — history of Jaisalmer and fossils" },
      { time: "11:30", activity: "Explore Thar Heritage Museum — private collection of rare artefacts" },
      { time: "13:00", activity: "Lunch at a popular local joint near Hanuman Chowk" },
      { time: "14:30", activity: "Shopping for block-print textiles, camel leather goods, and silver jewellery" },
      { time: "16:30", activity: "Visit Wind Park — thousands of wind turbines on the desert horizon" },
      { time: "18:30", activity: "Photography session at Gadisar Lake at golden hour" },
      { time: "20:00", activity: "Final rooftop dinner overlooking Jaisalmer Fort" },
    ],
  },
  {
    day: 8,
    theme: "Village Life & Rural Heritage",
    activities: [
      { time: "07:00", activity: "Village walk in a remote desert community near Jaisalmer" },
      { time: "09:00", activity: "Experience traditional pottery and weaving crafts" },
      { time: "11:00", activity: "Explore Ramdevra Temple — major pilgrimage site in the desert" },
      { time: "13:00", activity: "Lunch in a village homestay — traditional bajra roti and dal" },
      { time: "15:00", activity: "Visit Mandir Palace — former royal palace now open to visitors" },
      { time: "17:00", activity: "Explore the Tazia Tower and the historic monuments of old town" },
      { time: "19:00", activity: "Evening walk through the Manak Chowk bazaar" },
      { time: "20:30", activity: "Dinner at a rooftop restaurant with live ghazal music" },
    ],
  },
  {
    day: 9,
    theme: "Photography & Sunrise Exploration",
    activities: [
      { time: "05:30", activity: "Pre-dawn drive to the dunes for the most cinematic sunrise in Rajasthan" },
      { time: "07:30", activity: "Golden hour photography walk through the fort's stone alleys" },
      { time: "09:30", activity: "Breakfast at a hidden café overlooking the city" },
      { time: "11:00", activity: "Visit lesser-known cenotaphs and step wells outside the city" },
      { time: "13:00", activity: "Leisurely lunch at a heritage haveli restaurant" },
      { time: "15:00", activity: "Afternoon siesta — rest and recharge in true desert style" },
      { time: "17:00", activity: "Evening photography at Bada Bagh during magic hour" },
      { time: "20:00", activity: "Farewell dinner with folk dancers and bonfire" },
    ],
  },
  {
    day: 10,
    theme: "Culinary Journey",
    activities: [
      { time: "08:00", activity: "Street food breakfast tour — kachori, samosa, and chai at Dussehra Chowk" },
      { time: "10:00", activity: "Cooking class at a local home — learn to make dal baati churma" },
      { time: "12:30", activity: "Lunch featuring your own cooked Rajasthani meal" },
      { time: "14:30", activity: "Visit the spice market and local grocery bazaars" },
      { time: "16:00", activity: "Tea ceremony at a heritage rooftop café" },
      { time: "17:30", activity: "Camel cart ride through the old city lanes" },
      { time: "19:30", activity: "Fine dining experience at a premium hotel restaurant" },
      { time: "21:00", activity: "Late evening stroll through the illuminated fort" },
    ],
  },
  {
    day: 11,
    theme: "Day Trip to Barmer",
    activities: [
      { time: "07:00", activity: "Early morning drive to Barmer — 3 hours through desert landscape" },
      { time: "10:00", activity: "Explore Barmer's ancient temples and carved wooden havelis" },
      { time: "12:00", activity: "Lunch featuring Barmer's unique cuisine and camel milk chai" },
      { time: "14:00", activity: "Visit the famous Barmer artisans — block printing and embroidery" },
      { time: "16:00", activity: "Explore the sand dunes unique to Barmer — different from Jaisalmer" },
      { time: "18:00", activity: "Return drive to Jaisalmer as the sun sets over the desert" },
      { time: "20:30", activity: "Relaxed dinner and early rest after the long day" },
    ],
  },
  {
    day: 12,
    theme: "Spiritual & Wellness Day",
    activities: [
      { time: "06:00", activity: "Sunrise yoga on a desert sand dune with an experienced instructor" },
      { time: "08:00", activity: "Healthy breakfast with Ayurvedic chai and local fruits" },
      { time: "10:00", activity: "Visit ancient temples inside and outside the fort" },
      { time: "12:00", activity: "Vegetarian lunch at a sattvic café near the fort" },
      { time: "14:00", activity: "Meditation session at Gadisar Lake — serene and peaceful" },
      { time: "16:00", activity: "Herbal steam bath and traditional massage at a heritage spa" },
      { time: "18:30", activity: "Gentle evening walk through the old city" },
      { time: "20:00", activity: "Light vegetarian dinner and early night under the desert sky" },
    ],
  },
  {
    day: 13,
    theme: "Desert Astronomy Night",
    activities: [
      { time: "08:00", activity: "Leisurely morning — explore the weekly bazaar for local produce" },
      { time: "10:30", activity: "Visit the Jaisalmer War Museum — dedicated to fallen soldiers" },
      { time: "12:30", activity: "Lunch at a local dhaba with soldiers' staple food" },
      { time: "14:30", activity: "Explore the remaining havelis and monuments you may have missed" },
      { time: "17:00", activity: "Drive to a remote dune location away from city lights" },
      { time: "18:30", activity: "Sunset picnic with desert nibbles and cold beverages" },
      { time: "20:00", activity: "Stargazing session with a telescope guide — Milky Way clearly visible" },
      { time: "22:00", activity: "Return to hotel under a blanket of desert stars" },
    ],
  },
  {
    day: 14,
    theme: "Shopping & Farewell Rituals",
    activities: [
      { time: "08:30", activity: "Final morning walk through the fort — say goodbye to its golden walls" },
      { time: "10:00", activity: "Last shopping spree — textiles, handicrafts, antiques, camel leather" },
      { time: "12:00", activity: "Farewell lunch at your favourite restaurant of the trip" },
      { time: "14:00", activity: "Visit Gadisar Lake one last time — boat ride on the sacred reservoir" },
      { time: "16:00", activity: "Spa treatment and relaxation before departure preparations" },
      { time: "18:30", activity: "Sunset from the fort ramparts — final cinematic farewell" },
      { time: "20:00", activity: "Celebratory farewell dinner with your travel companions" },
    ],
  },
  {
    day: 15,
    theme: "Departure Day",
    activities: [
      { time: "07:00", activity: "Last sunrise in Jaisalmer — savour the golden morning light" },
      { time: "08:00", activity: "Breakfast at the hotel — reflect on an unforgettable journey" },
      { time: "09:30", activity: "Final camel ride or fort walk before checking out" },
      { time: "11:00", activity: "Check out and transfer to Jaisalmer Railway Station or Airport" },
      { time: "12:00", activity: "Depart Jaisalmer carrying golden memories of the Thar" },
    ],
  },
];

const LUXURY_OVERRIDES: Partial<Record<number, Partial<ItineraryDay>>> = {
  1: { theme: "Arrival & Golden Fort — Luxury Welcome" },
  2: { theme: "Private Desert Safari & Starlit Camp" },
  3: { theme: "Haveli Heritage with Private Butler" },
};

const ADVENTURE_OVERRIDES: Partial<Record<number, Partial<ItineraryDay>>> = {
  1: { theme: "Arrival & Fort Exploration — High Energy" },
  2: { theme: "Quad Bikes, Jeep Safaris & Dune Bashing" },
  3: { theme: "Rock Climbing & Desert Trekking" },
};

const BUDGET_OVERRIDES: Partial<Record<number, Partial<ItineraryDay>>> = {
  1: { theme: "Arrival & Fort Walk — Smart Budget" },
  2: { theme: "Dunes & Local Guesthouses" },
  3: { theme: "Cycle Tour & Street Food Trail" },
};

const ROMANTIC_OVERRIDES: Partial<Record<number, Partial<ItineraryDay>>> = {
  1: { theme: "Candlelit Arrival & Fort Twilight" },
  2: { theme: "Private Camel Ride & Stargazing for Two" },
  3: { theme: "Haveli Breakfast & Sunset Picnic" },
};

const FAMILY_OVERRIDES: Partial<Record<number, Partial<ItineraryDay>>> = {
  1: { theme: "Arrival & Fort Adventure for All Ages" },
  2: { theme: "Camel Rides, Sand Castles & Camp Fun" },
  3: { theme: "Museum Trail & Craft Workshops" },
};

const INTEREST_TIPS: Record<string, string> = {
  Photography: "The best light hits Jaisalmer Fort between 6–8 AM and 5–7 PM. Bring a wide-angle lens for the intricate haveli carvings.",
  Cafes: "Try Trio Restaurant for fort views, Kuku's Kitchen for cozy vibes, and 8July for the best desert sunset experience.",
  "Desert Safari": "Book a jeep safari for deeper dune exploration. The private dunes at Khuri offer a far more authentic experience than Sam on weekends.",
  Heritage: "Hire a licensed heritage guide inside the fort — they reveal stories that no guidebook captures.",
  "Hidden Places": "Ask locals about Kuldhara's ghost stories at night, the abandoned step wells east of the city, and the secret viewpoint behind Vyas Chhatri.",
};

const STYLE_TIPS: Record<string, string> = {
  Luxury: "Request a heritage suite at Suryagarh Palace or Shahi Palace. Pre-book a private desert camp with butler service and gourmet meals for the ultimate experience.",
  Budget: "The best budget stays are guesthouses inside the fort. Dhabas near Hanuman Chowk serve authentic Rajasthani meals for ₹100–200. Share jeep safaris to cut costs.",
  Adventure: "Pack light, wear sun protection, and carry at least 3L of water for any desert excursion. The 6 AM morning jeep safaris hit the wildest terrain.",
  Romantic: "Surprise your partner with a private camel ride at sunset followed by a candlelit dinner on the dunes. Book at least 48 hours in advance.",
  Family: "Kids under 12 get discounted or free entry at most monuments. The camel rides at Sam are gentle and child-friendly. Carry snacks and sunscreen.",
};

const BUDGET_ESTIMATES: Record<string, Record<string, string>> = {
  Luxury: {
    "1": "₹15,000–₹25,000 per person",
    "2": "₹28,000–₹45,000 per person",
    "3": "₹40,000–₹65,000 per person",
    "5": "₹65,000–₹1,00,000 per person",
    "7": "₹90,000–₹1,40,000 per person",
    "10": "₹1,20,000–₹1,80,000 per person",
    "14": "₹1,60,000–₹2,50,000 per person",
    default: "₹10,000–₹15,000 per person per day",
  },
  Budget: {
    "1": "₹1,500–₹3,000 per person",
    "2": "₹2,500–₹5,000 per person",
    "3": "₹4,000–₹7,500 per person",
    "5": "₹7,000–₹12,000 per person",
    "7": "₹10,000–₹17,000 per person",
    "10": "₹14,000–₹24,000 per person",
    "14": "₹20,000–₹35,000 per person",
    default: "₹1,500–₹2,500 per person per day",
  },
  Adventure: {
    "1": "₹3,000–₹6,000 per person",
    "2": "₹6,000–₹11,000 per person",
    "3": "₹9,000–₹16,000 per person",
    "5": "₹14,000–₹26,000 per person",
    "7": "₹20,000–₹36,000 per person",
    "10": "₹28,000–₹50,000 per person",
    "14": "₹38,000–₹70,000 per person",
    default: "₹3,000–₹5,000 per person per day",
  },
  Romantic: {
    "1": "₹8,000–₹18,000 per couple",
    "2": "₹15,000–₹32,000 per couple",
    "3": "₹22,000–₹48,000 per couple",
    "5": "₹36,000–₹75,000 per couple",
    "7": "₹50,000–₹1,00,000 per couple",
    "10": "₹70,000–₹1,40,000 per couple",
    "14": "₹95,000–₹1,90,000 per couple",
    default: "₹8,000–₹15,000 per couple per day",
  },
  Family: {
    "1": "₹5,000–₹10,000 for a family of 4",
    "2": "₹9,000–₹18,000 for a family of 4",
    "3": "₹13,000–₹26,000 for a family of 4",
    "5": "₹20,000–₹42,000 for a family of 4",
    "7": "₹28,000–₹58,000 for a family of 4",
    "10": "₹40,000–₹80,000 for a family of 4",
    "14": "₹55,000–₹1,10,000 for a family of 4",
    default: "₹5,000–₹10,000 per day for a family of 4",
  },
};

function getBudgetEstimate(style: string, days: number): string {
  const styleEstimates = BUDGET_ESTIMATES[style] ?? BUDGET_ESTIMATES["Budget"];
  return (
    styleEstimates[String(days)] ??
    styleEstimates[String(Math.round(days / 5) * 5)] ??
    styleEstimates["default"]
  );
}

const HIGHLIGHTS: Record<string, string[]> = {
  Luxury: ["Private desert camp with butler", "Heritage haveli suites", "Gourmet Rajasthani cuisine", "Exclusive guided fort tours"],
  Budget: ["Local guesthouses inside the fort", "Authentic dhaba meals", "Shared jeep safaris", "Self-guided heritage walks"],
  Adventure: ["Quad biking on Sam dunes", "Jeep safari into remote desert", "Desert night camping", "Rock formations trek"],
  Romantic: ["Private sunset camel ride", "Candlelit dune dinner", "Stargazing for two", "Heritage rooftop suite"],
  Family: ["Child-friendly camel rides", "Interactive museum visits", "Sand dune play", "Craft workshops for kids"],
};

export function generateLocalItinerary(
  days: number,
  style: string,
  interests: string[]
): Itinerary {
  const selectedDays = BASE_DAYS.slice(0, days);

  const overrideMap: Record<string, Partial<Record<number, Partial<ItineraryDay>>>> = {
    Luxury: LUXURY_OVERRIDES,
    Adventure: ADVENTURE_OVERRIDES,
    Budget: BUDGET_OVERRIDES,
    Romantic: ROMANTIC_OVERRIDES,
    Family: FAMILY_OVERRIDES,
  };

  const overrides = overrideMap[style] ?? {};

  const finalDays: ItineraryDay[] = selectedDays.map((d) => ({
    ...d,
    ...(overrides[d.day] ?? {}),
  }));

  const interestTips = interests
    .map((i) => INTEREST_TIPS[i])
    .filter(Boolean)
    .join(" ");

  const styleTip = STYLE_TIPS[style] ?? STYLE_TIPS["Budget"];
  const tip = interestTips ? `${styleTip} ${interestTips}` : styleTip;

  const titles: Record<string, string> = {
    Luxury: `${days}-Day Luxury Jaisalmer Retreat`,
    Budget: `${days}-Day Smart Budget Jaisalmer Journey`,
    Adventure: `${days}-Day Desert Adventure in Jaisalmer`,
    Romantic: `${days}-Day Romantic Escape to Jaisalmer`,
    Family: `${days}-Day Family Discovery of Jaisalmer`,
  };

  return {
    title: titles[style] ?? `${days}-Day Jaisalmer Journey`,
    days: finalDays,
    tip,
    budgetEstimate: getBudgetEstimate(style, days),
    highlights: HIGHLIGHTS[style] ?? HIGHLIGHTS["Budget"],
  };
}
