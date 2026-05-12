import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, MapPin, Clock, Camera, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import exp5 from "@/assets/images/explore-5.png";
import gridWalls from "@/assets/images/grid-walls.png";
import h3 from "@/assets/images/hidden-3.png";
import h4 from "@/assets/images/hidden-4.png";
import cardFort from "@/assets/images/card-fort.png";
import gridStreets from "@/assets/images/grid-streets.png";

const gallery = [exp5, gridWalls, h3, h4, cardFort, gridStreets];

const experiences = [
  { title: "Guided Haveli Tour", desc: "Private tour with an art historian through all five interconnected mansions — including rooms rarely shown to visitors.", tag: "Guided Tour" },
  { title: "Jali Carving Workshop", desc: "Learn the ancient craft of jali (lattice) carving from a third-generation Jaisalmer stone craftsman.", tag: "Craft Workshop" },
  { title: "Architectural Photography", desc: "Two-hour photography session inside the haveli — capturing the light through jharokha windows and ornate corridors.", tag: "Photography" },
  { title: "Heritage Walk", desc: "Walk the surrounding old city lanes with a local guide to discover smaller, unmarked havelis and their stories.", tag: "Heritage Walk" },
];

export default function PatwonHaveli() {
  return (
    <Layout>
      <div className="bg-[#0B0B0B] min-h-screen">
        <div className="relative h-[70vh] w-full overflow-hidden flex items-end">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${exp5})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent" />
          <div className="relative z-10 container mx-auto px-6 pb-16">
            <Link href="/explore">
              <button className="flex items-center gap-2 text-[#C8A96B]/70 hover:text-[#C8A96B] text-sm tracking-widest uppercase mb-8 transition-colors">
                <ArrowLeft size={14} /> Back to Explore
              </button>
            </Link>
            <div className="inline-flex items-center gap-2 border border-[#C8A96B]/30 px-3 py-1 text-xs text-[#C8A96B] uppercase tracking-widest mb-4">
              <MapPin size={10} /> Inside Jaisalmer Fort Area
            </div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="font-serif text-6xl md:text-8xl text-white leading-none"
            >
              Patwon Ki Haveli
            </motion.h1>
          </div>
        </div>

        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <section>
                <h2 className="font-serif text-3xl text-[#C8A96B] mb-6">About This Place</h2>
                <div className="w-16 h-px bg-[#C8A96B]/40 mb-8" />
                <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                  <p>Patwon Ki Haveli is the grandest and oldest haveli in Jaisalmer — a group of five interconnected mansions built between 1800 and 1860 by Guman Chand Patwa, a wealthy brocade merchant and moneylender, for his five sons. The entire complex took 55 years to complete, and the result is the most elaborate example of Rajput craftsmanship in the golden city.</p>
                  <p>Every surface of the haveli is covered in extraordinary ornamentation — intricate filigree carvings in the warm yellow sandstone, jharokha (overhanging latticed) windows that cast dramatic patterns of light into the rooms below, arched galleries, mirror-work ceilings, and miniature paintings that tell the stories of Rajput kings and their courts. The craftsmanship is so fine in places that the stonework resembles lacework.</p>
                  <p>Of the five havelis, two are maintained by the Archaeological Survey of India as museums, one houses a government emporium, and two are in private hands but accessible. The museums contain original furniture, artifacts, costumes, and records from the Patwa family era — an intimate window into 19th-century merchant life in the Thar.</p>
                </div>
              </section>

              <section>
                <h2 className="font-serif text-3xl text-[#C8A96B] mb-6">Gallery</h2>
                <div className="w-16 h-px bg-[#C8A96B]/40 mb-8" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {gallery.map((img, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.02 }}
                      className={`overflow-hidden ${i === 0 ? "col-span-2 aspect-[4/3]" : "aspect-square"}`}
                    >
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
                    </motion.div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-serif text-3xl text-[#C8A96B] mb-6">Curated Experiences</h2>
                <div className="w-16 h-px bg-[#C8A96B]/40 mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {experiences.map((exp, i) => (
                    <motion.div key={i} whileHover={{ y: -4 }}
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

            <div>
              <div className="border border-[#C8A96B]/20 p-6 bg-[#151515] sticky top-28">
                <h3 className="font-serif text-xl text-foreground mb-6">Travel Info</h3>
                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <Clock size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Best Time to Visit</p>
                      <p className="text-muted-foreground">9 AM – 12 PM for best interior light. Closed on national holidays.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Entry Fee</p>
                      <p className="text-muted-foreground">₹100 (Indians) · ₹300 (Foreigners). Includes all 5 havelis. Camera: ₹75.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Location</p>
                      <p className="text-muted-foreground">Patwa Haveli Road, Old City. 10 min walk from the fort entrance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Camera size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Photography Tip</p>
                      <p className="text-muted-foreground">Look up at the jali ceilings against the sky. Best light comes through east-facing windows before noon.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border space-y-4">
                  <div>
                    <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Nearby Cafes</p>
                    <p className="text-muted-foreground text-sm">Moustache Café · Desert Boy Dhani · 8 July Restaurant</p>
                  </div>
                  <div>
                    <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Opening Hours</p>
                    <p className="text-muted-foreground text-sm">9:00 AM – 5:30 PM daily</p>
                  </div>
                </div>
                <a href="https://maps.google.com/?q=Patwon+Ki+Haveli+Jaisalmer" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#C8A96B] text-black hover:bg-[#C8A96B]/90 rounded-none mt-6">Open in Maps</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
