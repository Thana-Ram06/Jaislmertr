import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, X, MapPin, Calendar, Wallet, Heart, Handshake, TrendingUp } from "lucide-react";
import { generateLocalItinerary } from "@/data/itineraries";

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
import h1 from "@/assets/images/hidden-1.png";
import h4 from "@/assets/images/hidden-4.png";

import { useState } from "react";

const TRAVEL_STYLES = ["Luxury", "Budget", "Adventure", "Romantic", "Family"];
const INTERESTS = ["Desert Safari", "Cafes", "Hidden Places", "Photography", "Heritage"];
const DAY_OPTIONS = Array.from({ length: 15 }, (_, i) => String(i + 1));
const BUDGET_OPTIONS = ["No limit", "Under ₹5,000", "₹5,000–₹15,000", "₹15,000–₹30,000", "₹30,000–₹60,000", "₹60,000+"];

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
    { title: "The Dunes", img: reelDunes },
    { title: "Golden Towers", img: reelTowers },
    { title: "Desert Life", img: reelRider },
    { title: "Desert Fire", img: reelFire },
    { title: "Hidden Spots", img: h1 },
    { title: "The Landscape", img: h4 },
  ];

  const [showPlanner, setShowPlanner] = useState(false);
  const [days, setDays] = useState("3");
  const [budget, setBudget] = useState("No limit");
  const [style, setStyle] = useState("Luxury");
  const [interests, setInterests] = useState<string[]>(["Desert Safari"]);
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<ReturnType<typeof generateLocalItinerary> | null>(null);

  function toggleInterest(item: string) {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  }

  function generateItinerary() {
    if (loading) return;
    setLoading(true);
    setItinerary(null);
    setTimeout(() => {
      const result = generateLocalItinerary(Number(days), style, interests);
      setItinerary(result);
      setLoading(false);
    }, 1400);
  }

  function resetPlanner() {
    setItinerary(null);
    setDays("3");
    setBudget("No limit");
    setStyle("Luxury");
    setInterests(["Desert Safari"]);
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
              Discover The Soul <br />
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
              <Button
                variant="outline"
                onClick={() => setShowPlanner(true)}
                className="border-[#C8A96B] text-[#C8A96B] hover:bg-[#C8A96B] hover:text-black h-14 px-10 text-lg rounded-none w-full sm:w-auto bg-transparent transition-transform hover:scale-105"
                data-testid="hero-plan-btn"
              >
                Plan Your Trip
              </Button>
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

      {/* AI Trip Planner Modal */}
      <AnimatePresence>
        {showPlanner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && !loading && setShowPlanner(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#151515] border border-[#C8A96B]/20 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8A96B]/50 to-transparent" />

              {/* Header */}
              <div className="flex items-start justify-between p-6 md:p-8 pb-0">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-[#C8A96B] uppercase mb-3">
                    <Sparkles size={12} /> Powered by AI
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground">Plan Your Trip</h2>
                  <p className="text-muted-foreground text-sm mt-2">Tell us what you want — we'll craft your perfect Jaisalmer itinerary.</p>
                </div>
                <button
                  onClick={() => { if (!loading) { setShowPlanner(false); resetPlanner(); } }}
                  className="text-muted-foreground hover:text-foreground transition-colors mt-1 ml-4 shrink-0"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                {!itinerary ? (
                  <>
                    {/* Days */}
                    <div>
                      <label className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#C8A96B] mb-3">
                        <Calendar size={12} /> Number of Days
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {DAY_OPTIONS.map((d) => (
                          <button
                            key={d}
                            onClick={() => setDays(d)}
                            className={`w-10 h-10 border text-sm font-medium transition-colors ${
                              days === d
                                ? "border-[#C8A96B] text-[#C8A96B] bg-[#C8A96B]/10"
                                : "border-border text-muted-foreground hover:border-[#C8A96B]/40"
                            }`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#C8A96B] mb-3">
                        <Wallet size={12} /> Budget Range
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {BUDGET_OPTIONS.map((b) => (
                          <button
                            key={b}
                            onClick={() => setBudget(b)}
                            className={`px-3 py-2 border text-xs transition-colors ${
                              budget === b
                                ? "border-[#C8A96B] text-[#C8A96B] bg-[#C8A96B]/10"
                                : "border-border text-muted-foreground hover:border-[#C8A96B]/40"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Travel Style */}
                    <div>
                      <label className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#C8A96B] mb-3">
                        <MapPin size={12} /> Travel Style
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {TRAVEL_STYLES.map((s) => (
                          <button
                            key={s}
                            onClick={() => setStyle(s)}
                            className={`px-4 py-2 border text-sm transition-colors ${
                              style === s
                                ? "border-[#C8A96B] text-[#C8A96B] bg-[#C8A96B]/10"
                                : "border-border text-muted-foreground hover:border-[#C8A96B]/40"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Interests */}
                    <div>
                      <label className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#C8A96B] mb-3">
                        <Heart size={12} /> Interests
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {INTERESTS.map((item) => (
                          <button
                            key={item}
                            onClick={() => toggleInterest(item)}
                            className={`px-4 py-2 border text-sm transition-colors ${
                              interests.includes(item)
                                ? "border-[#C8A96B] text-[#C8A96B] bg-[#C8A96B]/10"
                                : "border-border text-muted-foreground hover:border-[#C8A96B]/40"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={generateItinerary}
                      disabled={loading}
                      className="w-full h-14 bg-[#C8A96B] text-black hover:bg-[#C8A96B]/90 rounded-none text-lg disabled:opacity-50"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="inline-block w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Crafting your itinerary...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2"><Sparkles size={16} /> Generate Trip</span>
                      )}
                    </Button>

                    {/* Loading skeleton */}
                    {loading && (
                      <div className="space-y-4 pt-2">
                        {[0, 1, 2].map((i) => (
                          <div key={i} className="border border-border p-5 bg-[#0B0B0B]/50 animate-pulse">
                            <div className="h-5 bg-[#C8A96B]/10 rounded w-48 mb-4" />
                            <div className="space-y-2">
                              <div className="h-3 bg-white/5 rounded w-full" />
                              <div className="h-3 bg-white/5 rounded w-3/4" />
                              <div className="h-3 bg-white/5 rounded w-5/6" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  // Itinerary result
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-2xl text-[#C8A96B]">{itinerary.title}</h3>
                      <span className="text-xs text-muted-foreground tracking-widest uppercase">{itinerary.days.length} day{itinerary.days.length > 1 ? "s" : ""}</span>
                    </div>

                    {itinerary.days.map((day, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="border border-border p-5 bg-[#0B0B0B]/50"
                      >
                        <div className="flex items-baseline gap-3 mb-3">
                          <span className="text-xs font-medium tracking-widest text-[#C8A96B]/60 uppercase">Day {day.day}</span>
                          <h4 className="font-serif text-lg text-[#C8A96B]">{day.theme}</h4>
                        </div>
                        <ul className="space-y-2">
                          {day.activities.map((act, j) => (
                            <li key={j} className="flex gap-4 text-sm text-foreground/80">
                              <span className="text-[#C8A96B] w-12 shrink-0 font-mono">{act.time}</span>
                              <span>{act.activity}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}

                    {/* Budget estimate */}
                    <div className="border border-[#C8A96B]/20 p-4 bg-[#C8A96B]/5 flex items-start gap-3">
                      <TrendingUp size={14} className="text-[#C8A96B] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-medium tracking-widest text-[#C8A96B] uppercase mb-1">Estimated Budget</p>
                        <p className="text-sm text-foreground/80">{itinerary.budgetEstimate}</p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="border border-border p-4 bg-[#0B0B0B]/50">
                      <p className="text-xs font-medium tracking-widest text-[#C8A96B] uppercase mb-3">Trip Highlights</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {itinerary.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-foreground/70">
                            <span className="text-[#C8A96B]">✦</span> {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {itinerary.tip && (
                      <div className="border border-[#C8A96B]/20 p-4 bg-[#C8A96B]/5">
                        <p className="text-xs font-medium tracking-widest text-[#C8A96B] uppercase mb-1">Insider Tip</p>
                        <p className="text-sm text-foreground/70">{itinerary.tip}</p>
                      </div>
                    )}

                    <div className="flex gap-3 pt-2">
                      <Button onClick={resetPlanner} variant="outline" className="flex-1 border-border hover:border-[#C8A96B] hover:text-[#C8A96B] rounded-none bg-transparent">
                        Plan Another Trip
                      </Button>
                      <Button onClick={() => { setShowPlanner(false); resetPlanner(); }} className="flex-1 bg-[#C8A96B] text-black hover:bg-[#C8A96B]/90 rounded-none">
                        Done
                      </Button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                    <span className="text-xs font-medium tracking-widest text-[#C8A96B] uppercase border border-[#C8A96B]/30 px-3 py-1 bg-black/40 backdrop-blur-sm">Premium</span>
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

      {/* 4. AI Trip Planner Preview CTA */}
      <section className="py-32 bg-[#0B0B0B] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C8A96B]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-[#C8A96B] uppercase border border-[#C8A96B]/30 px-4 py-2 mb-8">
              <Sparkles size={12} /> Powered by AI
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
              Your Perfect Trip,<br />
              <span className="text-[#C8A96B] italic">Crafted by AI</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Choose your travel style, days, and interests — our AI builds a day-by-day itinerary with real places, sunset times, and insider tips.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {["Desert Safari", "Luxury Camps", "Hidden Places", "Photography", "Local Cafes"].map((tag) => (
                <span key={tag} className="text-xs text-[#C8A96B]/70 border border-[#C8A96B]/20 px-4 py-2">
                  {tag}
                </span>
              ))}
            </div>
            <Button
              onClick={() => setShowPlanner(true)}
              className="bg-[#C8A96B] text-black hover:bg-[#C8A96B]/90 h-14 px-12 text-lg rounded-none"
            >
              Plan With AI
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Cinematic Photo Gallery (replaces Reels) */}
      <section className="py-32 bg-[#151515] overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Jaisalmer in Motion</h2>
          <div className="w-24 h-px bg-[#C8A96B]" />
          <p className="text-muted-foreground mt-4 font-light">A visual journey through the golden city</p>
        </div>

        <div className="w-full overflow-x-auto pb-12 hide-scrollbar pl-6 md:pl-12 lg:pl-[max(1.5rem,calc((100vw-1536px)/2+1.5rem))]">
          <div className="flex gap-4 w-max pr-6">
            {reels.map((reel, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="relative w-64 md:w-80 h-[500px] md:h-[600px] flex-shrink-0 overflow-hidden cursor-pointer group bg-[#0B0B0B]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${reel.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500" />
                <div className="absolute inset-0 border border-transparent group-hover:border-[#C8A96B]/30 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-white font-serif text-xl drop-shadow-md group-hover:text-[#C8A96B] transition-colors duration-300">
                    {reel.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Partners */}
      <section className="py-32 bg-[#0B0B0B]">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Featured Partners</h2>
              <div className="w-16 h-px bg-[#C8A96B]" />
              <p className="text-muted-foreground mt-4 text-sm font-light">Handpicked businesses trusted by Jaisalmer.city</p>
            </div>
            <Link href="/partner">
              <Button variant="outline" className="border-[#C8A96B]/40 text-[#C8A96B] hover:bg-[#C8A96B] hover:text-black rounded-none bg-transparent">
                Become a Partner
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "SUJÁN The Serai", type: "Luxury Desert Camp", tag: "Desert Camp", dist: "Sam Dunes, 42km", img: gridCamp, desc: "Award-winning ultra-luxury camp at Sam — private pool tents, Michelin-style cuisine, and the finest desert hospitality." },
              { name: "Moustache Café", type: "Rooftop Café", tag: "Café", dist: "Fort Road, City Centre", img: gridRestaurant, desc: "Beloved rooftop café inside the fort — locally sourced Rajasthani meals, strong chai, and views of the golden city walls." },
              { name: "Thar Adventures", type: "Safari Provider", tag: "Safari", dist: "Jaisalmer Desert", img: gridCamel, desc: "Private jeep and camel safaris into the deep Thar — guided by local experts who know every hidden dune and desert route." },
              { name: "Shahi Palace Hotel", type: "Heritage Hotel", tag: "Hotel", dist: "Near Fort Entrance", img: gridWalls, desc: "Intricately carved sandstone haveli-style hotel steps from the fort — traditional jharokha suites with modern comforts." },
            ].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-[#151515] border border-border hover:border-[#C8A96B]/30 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${partner.img})` }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur border border-[#C8A96B]/30 px-3 py-1 text-xs text-[#C8A96B] uppercase tracking-widest">
                    {partner.tag}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#C8A96B]/20 border border-[#C8A96B]/40 px-2 py-1 text-xs text-[#C8A96B]">
                    ✦ Featured
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-foreground mb-0.5">{partner.name}</h3>
                  <p className="text-xs text-[#C8A96B]/70 tracking-wider uppercase mb-3 flex items-center gap-1.5">
                    <MapPin size={10} /> {partner.dist}
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{partner.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Business CTA */}
      <section className="py-28 bg-[#151515] relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${gridCamel})` }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A96B]/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 border border-[#C8A96B]/30 px-4 py-2 text-xs text-[#C8A96B] uppercase tracking-widest mb-8">
              <Handshake size={12} /> For Businesses
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6 leading-tight">
              Own a Camp, Café<br />or Hotel in Jaisalmer?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Partner with Jaisalmer.city and showcase your business to travelers from around the world. Get featured listings, social media promotion, and a place in every AI-generated itinerary.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {["Desert Camps", "Hotels", "Cafes & Restaurants", "Safari Providers", "Local Artisans"].map((tag) => (
                <span key={tag} className="text-xs text-[#C8A96B]/60 border border-[#C8A96B]/15 px-4 py-2">
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/partner">
              <Button className="bg-[#C8A96B] text-black hover:bg-[#C8A96B]/90 h-14 px-14 text-lg rounded-none">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
