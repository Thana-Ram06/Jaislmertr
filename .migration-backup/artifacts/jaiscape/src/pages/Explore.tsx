import { Layout } from "@/components/Layout";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

import exp1 from "@/assets/images/explore-1.png";
import exp2 from "@/assets/images/explore-2.png";
import exp3 from "@/assets/images/explore-3.png";
import exp4 from "@/assets/images/explore-4.png";
import exp5 from "@/assets/images/explore-5.png";
import exp6 from "@/assets/images/explore-6.png";
import exp7 from "@/assets/images/explore-7.png";
import exp8 from "@/assets/images/explore-8.png";
import aboutHero from "@/assets/images/about-hero.png";

const categories = ["All", "Camps", "Cafes", "Forts", "Sunset", "Hidden Gems"];

const places = [
  { id: 1, name: "Sunset Point", category: "Sunset", desc: "Golden views of the dunes.", img: exp1 },
  { id: 2, name: "Heritage Cafe", category: "Cafes", desc: "Authentic flavors with a view.", img: exp2 },
  { id: 3, name: "Jain Temples", category: "Forts", desc: "Intricate ancient carvings.", img: exp3 },
  { id: 4, name: "Gadisar Lake", category: "Hidden Gems", desc: "Peaceful waters at dusk.", img: exp4 },
  { id: 5, name: "Fort Streets", category: "Forts", desc: "Lost in ancient pathways.", img: exp5 },
  { id: 6, name: "Local Market", category: "Hidden Gems", desc: "Vibrant colors and spices.", img: exp6 },
  { id: 7, name: "Dune Safari", category: "Camps", desc: "Vast landscapes.", img: exp7 },
  { id: 8, name: "Luxury Tent", category: "Camps", desc: "Premium stays.", img: exp8 },
];

export default function Explore() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredPlaces = places.filter(
    (place) => activeTab === "All" || place.category === activeTab
  );

  return (
    <Layout>
      <div className="pt-24 bg-[#0B0B0B]">
        {/* Header Hero */}
        <div className="relative h-[40vh] w-full overflow-hidden flex items-center justify-center mb-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutHero})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-6">
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">Explore Jaisalmer</h1>
            <p className="text-white/70 max-w-xl mx-auto text-lg font-light">Discover curated spots, from ancient forts to vast golden dunes.</p>
          </div>
        </div>

        <div className="container mx-auto px-6 pb-32">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 border rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === cat 
                    ? "border-[#C8A96B] text-[#C8A96B] bg-[#C8A96B]/10" 
                    : "border-border text-muted-foreground hover:border-[#C8A96B]/50 hover:text-foreground"
                }`}
                data-testid={`filter-${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredPlaces.map((place) => (
                <motion.div
                  key={place.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-[#151515] border border-border hover:border-[#C8A96B]/30 transition-colors"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${place.img})` }}
                    />
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur border border-white/10 px-3 py-1 text-xs text-[#C8A96B] uppercase tracking-wider">
                      {place.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl mb-2 text-foreground">{place.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{place.desc}</p>
                    <Button variant="outline" className="w-full border-border hover:border-[#C8A96B] hover:bg-transparent hover:text-[#C8A96B] rounded-none">
                      View Place
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
