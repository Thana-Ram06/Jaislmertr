import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

import c1 from "@/assets/images/camp-1.png";
import c2 from "@/assets/images/camp-2.png";
import c3 from "@/assets/images/camp-3.png";
import c4 from "@/assets/images/camp-4.png";

const camps = [
  { img: c1, name: "The Serai Camp", stars: 5, loc: "Sam Sand Dunes", price: "₹18,500" },
  { img: c2, name: "Golden Oasis", stars: 5, loc: "Khuri Desert", price: "₹12,000" },
  { img: c3, name: "Starlit Retreat", stars: 4, loc: "Sam Sand Dunes", price: "₹8,500" },
  { img: c4, name: "Nomad Luxury", stars: 5, loc: "Barna Village", price: "₹15,000" },
];

export default function DesertCamps() {
  return (
    <Layout>
      <div className="bg-[#151515] pt-32 pb-32 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6">Desert Camps</h1>
            <div className="w-24 h-px bg-[#C8A96B] mx-auto mb-6" />
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Experience the silence of the desert in unparalleled luxury. Premium tents, cultural evenings, and starry skies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {camps.map((camp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0B0B0B] border border-border group overflow-hidden"
              >
                <div className="relative h-72 md:h-96 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${camp.img})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div>
                      <div className="flex gap-1 mb-2 text-[#C8A96B]">
                        {[...Array(camp.stars)].map((_, j) => (
                          <Star key={j} size={14} fill="currentColor" />
                        ))}
                      </div>
                      <h3 className="font-serif text-3xl text-white mb-1">{camp.name}</h3>
                      <p className="text-white/60 text-sm tracking-wide">{camp.loc}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/5">
                  <div>
                    <span className="text-muted-foreground text-sm block mb-1">Starting from</span>
                    <span className="text-[#C8A96B] text-2xl font-serif">{camp.price}<span className="text-sm font-sans text-muted-foreground"> / night</span></span>
                  </div>
                  <Button className="bg-[#C8A96B] text-black hover:bg-[#C8A96B]/90 rounded-none h-12 px-8 w-full sm:w-auto" data-testid={`book-${i}`}>
                    Book Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
