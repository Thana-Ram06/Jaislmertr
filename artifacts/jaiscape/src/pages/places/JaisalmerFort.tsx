import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, MapPin, Clock, Camera, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import placeImg from "@/assets/images/place-jaisalmer-fort.png";
import exp5 from "@/assets/images/explore-5.png";
import gridWalls from "@/assets/images/grid-walls.png";
import gridStreets from "@/assets/images/grid-streets.png";
import cardFort from "@/assets/images/card-fort.png";
import h3 from "@/assets/images/hidden-3.png";

const gallery = [placeImg, exp5, gridWalls, gridStreets, cardFort];

const experiences = [
  { title: "Sunrise Fort Walk", desc: "Private guided walk through the fort's narrow lanes as the golden light hits the sandstone walls.", tag: "Guided Tour" },
  { title: "Rooftop Haveli Dining", desc: "Dinner on an ancient haveli rooftop inside the fort with views of the entire golden city.", tag: "Luxury Dining" },
  { title: "Photography Trail", desc: "A curated 2-hour photography walk through the fort's most photogenic alleys, havelis, and viewpoints.", tag: "Photography" },
  { title: "Sunset Viewpoint", desc: "Watch the sun descend behind the Thar from the fort's ramparts — a cinematic experience at golden hour.", tag: "Sunset" },
];

export default function JaisalmerFort() {
  return (
    <Layout>
      <div className="bg-[#0B0B0B] min-h-screen">
        {/* Hero */}
        <div className="relative h-[70vh] w-full overflow-hidden flex items-end">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${placeImg})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent" />
          <div className="relative z-10 container mx-auto px-6 pb-16">
            <Link href="/explore">
              <button className="flex items-center gap-2 text-[#C8A96B]/70 hover:text-[#C8A96B] text-sm tracking-widest uppercase mb-8 transition-colors">
                <ArrowLeft size={14} /> Back to Explore
              </button>
            </Link>
            <div className="inline-flex items-center gap-2 border border-[#C8A96B]/30 px-3 py-1 text-xs text-[#C8A96B] uppercase tracking-widest mb-4">
              <MapPin size={10} /> Jaisalmer, Rajasthan
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-6xl md:text-8xl text-white leading-none"
            >
              Jaisalmer Fort
            </motion.h1>
          </div>
        </div>

        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* About */}
              <section>
                <h2 className="font-serif text-3xl text-[#C8A96B] mb-6">About This Place</h2>
                <div className="w-16 h-px bg-[#C8A96B]/40 mb-8" />
                <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                  <p>Rising 99 metres above the golden plains of the Thar Desert, Jaisalmer Fort is one of the world's largest fully preserved medieval cities — a UNESCO World Heritage Site and the crown jewel of Rajasthan. Built in 1156 AD by Rajput ruler Rawal Jaisal, the fort is constructed entirely from yellow Jurassic sandstone that glows a warm golden hue at sunrise and sunset, earning Jaisalmer the name "The Golden City."</p>
                  <p>Unlike most forts in India, Jaisalmer Fort is still very much alive. Nearly 3,000 people live within its walls — descendants of merchants, priests, and soldiers from a thousand years of history. Wander its labyrinthine lanes and you'll discover ancient Jain temples with intricately carved marble interiors, havelis with ornate jharokha windows, and rooftop restaurants with commanding desert views.</p>
                  <p>The fort has survived Mughal sieges, royal intrigue, and centuries of desert wind. Today it remains one of the most magical places in India — best experienced slowly, on foot, at dawn or dusk when the stones turn amber.</p>
                </div>
              </section>

              {/* Gallery */}
              <section>
                <h2 className="font-serif text-3xl text-[#C8A96B] mb-6">Gallery</h2>
                <div className="w-16 h-px bg-[#C8A96B]/40 mb-8" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {gallery.map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className={`overflow-hidden ${i === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-square"}`}
                    >
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Experiences */}
              <section>
                <h2 className="font-serif text-3xl text-[#C8A96B] mb-6">Curated Experiences</h2>
                <div className="w-16 h-px bg-[#C8A96B]/40 mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4 }}
                      className="border border-border hover:border-[#C8A96B]/30 p-6 bg-[#151515] transition-colors"
                    >
                      <span className="text-xs tracking-widest uppercase text-[#C8A96B] border border-[#C8A96B]/30 px-2 py-1 mb-4 inline-block">{exp.tag}</span>
                      <h3 className="font-serif text-xl text-foreground mt-3 mb-2">{exp.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{exp.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="border border-[#C8A96B]/20 p-6 bg-[#151515] sticky top-28">
                <h3 className="font-serif text-xl text-foreground mb-6">Travel Info</h3>
                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <Clock size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Best Time to Visit</p>
                      <p className="text-muted-foreground">Early morning (6–9 AM) or sunset (5–7 PM). Avoid midday heat.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Entry Fee</p>
                      <p className="text-muted-foreground">₹70 (Indians) · ₹250 (Foreigners) · Camera: ₹50</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Distance from City</p>
                      <p className="text-muted-foreground">Located in the heart of Jaisalmer city. Walking distance from most hotels.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Camera size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Photography Tip</p>
                      <p className="text-muted-foreground">Shoot from Vyas Chhatri viewpoint for the full fort silhouette against the desert sky.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border space-y-4">
                  <div>
                    <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Nearby Cafes</p>
                    <p className="text-muted-foreground text-sm">Saffron Restaurant · The Desert Boy's Dhani · 1st Gate Home Fusion</p>
                  </div>
                  <div>
                    <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Sunset Time</p>
                    <p className="text-muted-foreground text-sm">6:15 PM (winter) · 7:15 PM (summer)</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Jaisalmer+Fort"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full"
                >
                  <Button className="w-full bg-[#C8A96B] text-black hover:bg-[#C8A96B]/90 rounded-none mt-6">
                    Open in Maps
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
