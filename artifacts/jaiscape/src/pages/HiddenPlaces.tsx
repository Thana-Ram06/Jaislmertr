import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";

import h1 from "@/assets/images/hidden-1.png";
import h2 from "@/assets/images/hidden-2.png";
import h3 from "@/assets/images/hidden-3.png";
import h4 from "@/assets/images/hidden-4.png";
import h5 from "@/assets/images/hidden-5.png";
import h6 from "@/assets/images/hidden-6.png";

const hiddenPlaces = [
  { img: h1, title: "Secret Rooftop", desc: "A quiet vantage point overlooking the golden city walls. Perfect for sunset tea.", dist: "1.2km · 15 min walk" },
  { img: h2, title: "Ancient Stepwell", desc: "Architectural marvel hidden away from the main tourist paths. Dramatic shadows at noon.", dist: "3km · 10 min drive" },
  { img: h3, title: "Desert Village", desc: "Experience authentic rural life and meet local artisans preserving ancient crafts.", dist: "25km · 45 min drive" },
  { img: h4, title: "Old Haveli Courtyard", desc: "Intricately carved sandstone courtyard hidden behind modest doors in the old city.", dist: "0.5km · 5 min walk" },
  { img: h5, title: "Sand Art Dunes", desc: "A shifting gallery of wind-sculpted sand patterns in an undisturbed part of the desert.", dist: "40km · 1 hr drive" },
  { img: h6, title: "Star-Gazing Point", desc: "Zero light pollution area in the deep desert for spectacular milky way views.", dist: "50km · 1.5 hr drive" },
];

export default function HiddenPlaces() {
  return (
    <Layout>
      <div className="bg-[#0B0B0B] pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6">Hidden Places</h1>
            <div className="w-24 h-px bg-[#C8A96B] mb-6" />
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Beyond the fort and the famous dunes lie secrets waiting to be discovered. 
              These are the places that don't make it to the usual itineraries.
            </p>
          </div>

          <div className="space-y-32">
            {hiddenPlaces.map((place, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
              >
                <div className="w-full lg:w-3/5 overflow-hidden border border-[#C8A96B]/10">
                  <div className="relative aspect-[16/9] group cursor-pointer">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                      style={{ backgroundImage: `url(${place.img})` }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
                
                <div className="w-full lg:w-2/5">
                  <span className="text-[#C8A96B] text-sm tracking-widest uppercase mb-4 block">0{idx + 1}</span>
                  <h2 className="font-serif text-4xl mb-6 text-foreground">{place.title}</h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {place.desc}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-foreground/60 border-l border-[#C8A96B] pl-4">
                    <span>{place.dist}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
