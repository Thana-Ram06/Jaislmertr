import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, MapPin, Clock, Camera, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import placeImg from "@/assets/images/place-gadisar-lake.png";
import h1 from "@/assets/images/hidden-1.png";
import h4 from "@/assets/images/hidden-4.png";
import h6 from "@/assets/images/hidden-6.png";
import reelTowers from "@/assets/images/reel-towers.png";
import gridCamp from "@/assets/images/grid-camp.png";

const gallery = [placeImg, h1, h4, h6, reelTowers, gridCamp];

const experiences = [
  { title: "Sunrise Boat Ride", desc: "Glide across the still waters at first light with migratory birds overhead and the fort shimmering in the distance.", tag: "Boat Ride" },
  { title: "Ghats Evening Walk", desc: "Stroll the ornate ghats at dusk when locals come to pray, fishermen return, and the water turns gold.", tag: "Cultural Walk" },
  { title: "Bird Watching", desc: "Gadisar attracts 70+ species of migratory birds between November and March — a paradise for wildlife photographers.", tag: "Wildlife" },
  { title: "Haveli Rooftop Tea", desc: "Take tea at a lakeside rooftop café as the sun drops behind the old city walls.", tag: "Café Experience" },
];

export default function GadisarLake() {
  return (
    <Layout>
      <div className="bg-[#0B0B0B] min-h-screen">
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
              <MapPin size={10} /> 1km from Jaisalmer City Centre
            </div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="font-serif text-6xl md:text-8xl text-white leading-none"
            >
              Gadisar Lake
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
                  <p>Gadisar Lake was built in 1367 by the first ruler of Jaisalmer, Maharawal Gadsi Singh, as the city's primary water source — a remarkable feat of desert engineering that sustained the golden city for centuries. Today it is one of the most serene and photogenic spots in all of Rajasthan.</p>
                  <p>Approaching the lake through the ornate yellow sandstone gateway — the Tilon Ki Pol — feels like stepping into another era. The gateway is topped by a small temple and is one of the most photographed structures in Jaisalmer. Beyond it, the lake opens up into a wide, calm expanse fringed by elaborate ghats, small shrines, pavilions, and chattris (cenotaphs) that reflect in the water.</p>
                  <p>Between November and March, Gadisar transforms into a bird sanctuary as thousands of migratory birds — pelicans, herons, cormorants, brahminy ducks — make it their winter home. At dusk, when the fort glows above and fishermen draw in their nets, the scene is unlike anything else in India.</p>
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
                      <p className="text-muted-foreground">Early morning for birds · Sunset for photography · Nov–Mar for migratory birds.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Entry Fee</p>
                      <p className="text-muted-foreground">Free entry. Boat ride: ₹100 for 30 minutes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Distance from City</p>
                      <p className="text-muted-foreground">1km east of Jaisalmer Fort. 5 min auto-rickshaw or 15 min walk.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Camera size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Photography Tip</p>
                      <p className="text-muted-foreground">Shoot from the stone pavilion on the east bank for reflections of the fort in the water.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border space-y-4">
                  <div>
                    <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Nearby Cafes</p>
                    <p className="text-muted-foreground text-sm">Café Sheesh Mahal · Natraj Restaurant · Desert Café</p>
                  </div>
                  <div>
                    <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Sunset Time</p>
                    <p className="text-muted-foreground text-sm">6:15 PM (winter) · 7:15 PM (summer)</p>
                  </div>
                </div>
                <a href="https://maps.google.com/?q=Gadisar+Lake+Jaisalmer" target="_blank" rel="noopener noreferrer">
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
