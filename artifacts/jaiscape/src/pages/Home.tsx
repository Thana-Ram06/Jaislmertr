import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Play, Loader2, Sparkles } from "lucide-react";
import heroDunes from "@/assets/images/hero-dunes.png";
import cardSafari from "@/assets/images/card-safari.png";
import cardFort from "@/assets/images/card-fort.png";
import cardCafe from "@/assets/images/card-cafe.png";
import cardTent from "@/assets/images/card-tent.png";
import cardSunset from "@/assets/images/card-sunset.png";

import gridDunes from "@/assets/images/grid-dunes.png";
import gridCamp from "@/assets/images/grid-camp.png";
import gridStreets from "@/assets/images/grid-streets.png";
import gridCamel from "@/assets/images/grid-camel.png";
import gridWalls from "@/assets/images/grid-walls.png";
import gridRestaurant from "@/assets/images/grid-restaurant.png";

import reelDunes from "@/assets/images/reel-dunes.png";
import reelTowers from "@/assets/images/reel-towers.png";
import reelRider from "@/assets/images/reel-rider.png";
import reelFire from "@/assets/images/reel-fire.png";

import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";

interface ItineraryActivity {
  time: string;
  activity: string;
}

interface ItineraryDay {
  day: number;
  theme: string;
  activities: ItineraryActivity[];
}

interface Itinerary {
  title: string;
  days: ItineraryDay[];
  tip?: string;
}

const EXAMPLE_PROMPTS = [
  "2 day luxury trip under ₹10,000",
  "3 days for a solo backpacker with photography",
  "Romantic weekend getaway with desert camp stay",
  "4 day family trip with kids",
];

export default function Home() {
  const experiences = [
    { title: "Desert Safari", desc: "Vast golden dunes", img: cardSafari },
    { title: "Golden Fort", desc: "Ancient sandstone", img: cardFort },
    { title: "Hidden Cafes", desc: "Rooftop views", img: cardCafe },
    { title: "Luxury Camps", desc: "Starlit nights", img: cardTent },
    { title: "Sunset Dunes", desc: "Cinematic evening", img: cardSunset },
  ];

  const gridItems = [
    { title: "Thar Desert", img: gridDunes, span: "col-span-1 row-span-2" },
    { title: "Luxury Camp", img: gridCamp, span: "col-span-2 row-span-1" },
    { title: "Ancient Streets", img: gridStreets, span: "col-span-1 row-span-1" },
    { title: "Camel Caravan", img: gridCamel, span: "col-span-1 row-span-1" },
    { title: "Fort Walls", img: gridWalls, span: "col-span-2 row-span-2" },
    { title: "Rooftop Dining", img: gridRestaurant, span: "col-span-1 row-span-1" },
  ];

  const reels = [
    { title: "Dunes", img: reelDunes },
    { title: "Towers", img: reelTowers },
    { title: "Local", img: reelRider },
    { title: "Night", img: reelFire },
    { title: "Market", img: gridStreets },
  ];

  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  async function generateItinerary() {
    if (!prompt.trim() || loading) return;

    setLoading(true);
    setItinerary(null);
    setError(null);

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    let buffer = "";

    try {
      const response = await fetch("/api/itinerary/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No response body");

      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = decoder.decode(value, { stream: true });
        const lines = text.split("\n");

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const data = JSON.parse(line.slice(6));
            if (data.error) throw new Error(data.error);
            if (data.content) buffer += data.content;
            if (data.done) {
              const parsed = JSON.parse(buffer) as Itinerary;
              setItinerary(parsed);
            }
          } catch {
            // continue
          }
        }
      }
    } catch (err) {
      if ((err as Error).name !== "AbortError") {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      {/* 1. Hero Section */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ backgroundImage: `url(${heroDunes})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0B0B0B]/30 via-transparent to-[#0B0B0B]" />
        
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.9] tracking-tight mb-6">
              Discover The Soul <br/>
              <span className="text-[#C8A96B] italic">Of Jaisalmer</span>
            </h1>
            <p className="font-sans font-light text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Hidden places, luxury desert stays, cinematic sunsets and authentic travel experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/explore">
                <Button className="bg-[#C8A96B] text-black hover:bg-[#C8A96B]/90 h-14 px-10 text-lg rounded-none w-full sm:w-auto transition-transform hover:scale-105" data-testid="hero-explore-btn">
                  Explore Places
                </Button>
              </Link>
              <Link href="/explore">
                <Button variant="outline" className="border-[#C8A96B] text-[#C8A96B] hover:bg-[#C8A96B] hover:text-black h-14 px-10 text-lg rounded-none w-full sm:w-auto bg-transparent transition-transform hover:scale-105" data-testid="hero-plan-btn">
                  Plan Your Trip
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-[#C8A96B]"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={32} strokeWidth={1} />
        </motion.div>
      </section>

      {/* 2. Curated Experiences */}
      <section className="py-32 bg-[#0B0B0B]">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-4">Curated Experiences</h2>
          <div className="w-24 h-px bg-[#C8A96B]" />
        </div>
        <div className="w-full overflow-x-auto pb-10 hide-scrollbar pl-6 md:pl-12 lg:pl-[max(1.5rem,calc((100vw-1536px)/2+1.5rem))]">
          <div className="flex gap-6 w-max pr-6">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group relative w-72 md:w-80 h-[450px] overflow-hidden cursor-pointer"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${exp.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity group-hover:opacity-80" />
                <div className="absolute inset-0 border border-transparent group-hover:border-[#C8A96B]/50 transition-colors duration-500 shadow-[inset_0_0_0_1px_rgba(200,169,107,0)] group-hover:shadow-[inset_0_0_20px_0_rgba(200,169,107,0.3)]" />
                
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="mb-3">
                    <span className="text-xs font-medium tracking-widest text-[#C8A96B] uppercase border border-[#C8A96B]/30 px-3 py-1 bg-black/40 backdrop-blur-sm">
                      Premium
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl text-white mb-1 group-hover:text-[#C8A96B] transition-colors">{exp.title}</h3>
                  <p className="text-white/70 font-light text-sm">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Trending Places Grid */}
      <section className="py-32 bg-[#151515]">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-4">Golden City Highlights</h2>
            <div className="w-24 h-px bg-[#C8A96B]" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4">
            {gridItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative group overflow-hidden ${item.span} cursor-pointer bg-[#0B0B0B]`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="font-serif text-3xl text-white tracking-wide">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AI Trip Planner */}
      <section className="py-32 bg-[#0B0B0B] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C8A96B]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-[#C8A96B] uppercase border border-[#C8A96B]/30 px-4 py-2 mb-6">
                <Sparkles size={12} />
                Powered by AI
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Plan With AI</h2>
              <p className="text-muted-foreground">Describe your dream journey, and let our intelligence craft the perfect itinerary.</p>
            </div>

            <div className="bg-[#151515] border border-[#C8A96B]/20 p-6 md:p-10 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8A96B]/50 to-transparent" />
              
              {/* Example prompts */}
              <div className="flex flex-wrap gap-2 mb-4">
                {EXAMPLE_PROMPTS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPrompt(p)}
                    className="text-xs text-[#C8A96B]/70 border border-[#C8A96B]/20 px-3 py-1.5 hover:border-[#C8A96B]/60 hover:text-[#C8A96B] transition-colors cursor-pointer bg-transparent"
                  >
                    {p}
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Input 
                  className="h-14 bg-[#0B0B0B] border-[#C8A96B]/20 text-lg placeholder:text-muted-foreground focus-visible:ring-[#C8A96B]/50 rounded-none flex-1"
                  placeholder="2 day luxury trip under ₹10,000..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && generateItinerary()}
                  disabled={loading}
                />
                <Button 
                  onClick={generateItinerary}
                  disabled={loading || !prompt.trim()}
                  className="h-14 px-8 bg-[#C8A96B] text-black hover:bg-[#C8A96B]/90 rounded-none text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? <Loader2 size={20} className="animate-spin" /> : "Generate"}
                </Button>
              </div>

              {/* Loading state */}
              <AnimatePresence>
                {loading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="border border-border p-6 bg-[#0B0B0B]/50 animate-pulse">
                        <div className="h-6 bg-[#C8A96B]/10 rounded w-48 mb-4" />
                        <div className="space-y-3">
                          <div className="h-4 bg-white/5 rounded w-full" />
                          <div className="h-4 bg-white/5 rounded w-3/4" />
                          <div className="h-4 bg-white/5 rounded w-5/6" />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error state */}
              {error && !loading && (
                <div className="border border-red-500/30 p-4 text-red-400 text-sm">
                  {error}
                </div>
              )}

              {/* Generated itinerary */}
              <AnimatePresence>
                {itinerary && !loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-serif text-2xl text-[#C8A96B]">{itinerary.title}</h3>
                      <span className="text-xs text-muted-foreground tracking-widest uppercase">{itinerary.days.length} days</span>
                    </div>

                    {itinerary.days.map((day, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="border border-border p-6 bg-[#0B0B0B]/50"
                      >
                        <div className="flex items-baseline gap-3 mb-4">
                          <span className="text-xs font-medium tracking-widest text-[#C8A96B]/60 uppercase">Day {day.day}</span>
                          <h4 className="font-serif text-xl text-[#C8A96B]">{day.theme}</h4>
                        </div>
                        <ul className="space-y-3">
                          {day.activities.map((act, j) => (
                            <li key={j} className="flex gap-4 text-sm text-foreground/80">
                              <span className="text-[#C8A96B] w-12 shrink-0 font-mono">{act.time}</span>
                              <span>{act.activity}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}

                    {itinerary.tip && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: itinerary.days.length * 0.1 + 0.2 }}
                        className="border border-[#C8A96B]/20 p-5 bg-[#C8A96B]/5"
                      >
                        <p className="text-xs font-medium tracking-widest text-[#C8A96B] uppercase mb-2">Insider Tip</p>
                        <p className="text-sm text-foreground/70">{itinerary.tip}</p>
                      </motion.div>
                    )}

                    <div className="pt-4 flex justify-center">
                      <button
                        onClick={() => { setItinerary(null); setPrompt(""); }}
                        className="text-xs text-muted-foreground hover:text-[#C8A96B] transition-colors tracking-widest uppercase"
                      >
                        Plan another trip
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Default placeholder when no itinerary */}
              {!itinerary && !loading && !error && (
                <div className="space-y-4 opacity-40 pointer-events-none select-none">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium tracking-widest text-[#C8A96B] uppercase">Your itinerary will appear here</span>
                  </div>
                  <div className="border border-border p-6 bg-[#0B0B0B]/50">
                    <h4 className="font-serif text-2xl text-[#C8A96B] mb-4">Day 1: The Golden Arrival</h4>
                    <ul className="space-y-4 text-sm text-foreground/80">
                      <li className="flex gap-4"><span className="text-[#C8A96B] w-12">14:00</span> Check-in to SUJÁN The Serai</li>
                      <li className="flex gap-4"><span className="text-[#C8A96B] w-12">17:00</span> Private Sunset Safari at Sam Sand Dunes</li>
                      <li className="flex gap-4"><span className="text-[#C8A96B] w-12">20:00</span> Dinner under the stars with Kalbelia music</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Reels-Style Visual Scroll */}
      <section className="py-32 bg-[#151515] overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Jaisalmer in Motion</h2>
          <div className="w-24 h-px bg-[#C8A96B]" />
        </div>
        
        <div className="w-full overflow-x-auto pb-12 hide-scrollbar pl-6 md:pl-12 lg:pl-[max(1.5rem,calc((100vw-1536px)/2+1.5rem))]">
          <div className="flex gap-6 w-max pr-6">
            {reels.map((reel, i) => (
              <div key={i} className="relative w-64 md:w-80 h-[500px] md:h-[600px] flex-shrink-0 group cursor-pointer bg-[#0B0B0B]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${reel.img})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/50 backdrop-blur-md flex items-center justify-center text-white bg-black/20 group-hover:scale-110 group-hover:border-[#C8A96B] group-hover:text-[#C8A96B] transition-all duration-500">
                    <Play className="ml-1" size={24} fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C8A96B] animate-pulse" />
                  <span className="text-white font-medium tracking-wide drop-shadow-md">{reel.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
