import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
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

      {/* 4. AI Trip Planner Preview */}
      <section className="py-32 bg-[#0B0B0B] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C8A96B]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Plan With AI</h2>
              <p className="text-muted-foreground">Describe your dream journey, and let our intelligence craft the perfect itinerary.</p>
            </div>

            <div className="bg-[#151515] border border-[#C8A96B]/20 p-6 md:p-10 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8A96B]/50 to-transparent" />
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Input 
                  className="h-14 bg-[#0B0B0B] border-[#C8A96B]/20 text-lg placeholder:text-muted-foreground focus-visible:ring-[#C8A96B]/50 rounded-none flex-1"
                  placeholder="2 day luxury trip under ₹10,000..."
                  readOnly
                />
                <Button className="h-14 px-8 bg-[#C8A96B] text-black hover:bg-[#C8A96B]/90 rounded-none text-lg">
                  Generate Itinerary
                </Button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium tracking-widest text-[#C8A96B] uppercase">Powered by AI</span>
                  <span className="text-xs text-muted-foreground">Preview</span>
                </div>

                <div className="border border-border p-6 bg-[#0B0B0B]/50">
                  <h4 className="font-serif text-2xl text-[#C8A96B] mb-4">Day 1: The Golden Arrival</h4>
                  <ul className="space-y-4 text-sm text-foreground/80">
                    <li className="flex gap-4"><span className="text-[#C8A96B] w-12">14:00</span> Check-in to SUJÁN The Serai</li>
                    <li className="flex gap-4"><span className="text-[#C8A96B] w-12">17:00</span> Private Sunset Safari at Sam Sand Dunes</li>
                    <li className="flex gap-4"><span className="text-[#C8A96B] w-12">20:00</span> Dinner under the stars with Kalbelia music</li>
                  </ul>
                </div>

                <div className="border border-border p-6 bg-[#0B0B0B]/50 relative opacity-50">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#151515]" />
                  <h4 className="font-serif text-2xl text-[#C8A96B] mb-4">Day 2: Fort & Flavors</h4>
                  <ul className="space-y-4 text-sm text-foreground/80">
                    <li className="flex gap-4"><span className="text-[#C8A96B] w-12">09:00</span> Guided tour of Jaisalmer Fort</li>
                    <li className="flex gap-4"><span className="text-[#C8A96B] w-12">13:00</span> Lunch at The Trio...</li>
                  </ul>
                </div>
              </div>
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
