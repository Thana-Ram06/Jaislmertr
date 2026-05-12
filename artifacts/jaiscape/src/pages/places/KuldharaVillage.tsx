import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, MapPin, Clock, Camera, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import placeImg from "@/assets/images/place-kuldhara-village.png";
import h2 from "@/assets/images/hidden-2.png";
import h3 from "@/assets/images/hidden-3.png";
import h5 from "@/assets/images/hidden-5.png";
import gridStreets from "@/assets/images/grid-streets.png";
import reelRider from "@/assets/images/reel-rider.png";

const gallery = [placeImg, h2, h3, h5, gridStreets, reelRider];

const experiences = [
  { title: "Guided Mystery Walk", desc: "Walk the abandoned streets of Kuldhara with a local historian who narrates the village's untold story.", tag: "History Tour" },
  { title: "Night Visit", desc: "A specially arranged after-dark experience in the abandoned village — hauntingly beautiful under moonlight.", tag: "Night Experience" },
  { title: "Desert Village Photography", desc: "The crumbling arched doorways, skeletal rooftops, and desert vegetation make for extraordinary compositions.", tag: "Photography" },
  { title: "Sunset at the Ruins", desc: "The village turns an eerie, cinematic gold at sunset — considered one of the most atmospheric sights near Jaisalmer.", tag: "Sunset" },
];

export default function KuldharaVillage() {
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
              <MapPin size={10} /> 18km from Jaisalmer
            </div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="font-serif text-6xl md:text-8xl text-white leading-none"
            >
              Kuldhara Village
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
                  <p>In 1825, one night before a new moon, the entire population of Kuldhara — nearly 1,500 people from 84 Paliwal Brahmin families — vanished from the village without a trace. They left no note, no explanation, and no forwarding address. The village has stood empty ever since.</p>
                  <p>The Paliwal Brahmins were an extraordinarily wealthy and advanced community who had settled the desert 600 years before their disappearance. They built elaborate multi-level homes, sophisticated water harvesting systems, and well-planned streets — achievements remarkable for their time and location. Legend holds that the local chieftain had taken a fancy to the village headman's daughter, and rather than comply, the entire community chose a dignified departure, cursing the land so that no one could ever settle it again.</p>
                  <p>Today, Kuldhara stands as one of the most atmospheric abandoned places in India. The Archaeological Survey of India maintains it as a protected monument. Walking its empty lanes — past doorless houses, collapsed rooftops, and the old village temple still standing — is an experience that stays with you long after you leave.</p>
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
                      <p className="text-muted-foreground">Sunset for atmosphere · Morning for photography · Avoid midday heat Oct–Apr.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Entry Fee</p>
                      <p className="text-muted-foreground">₹50 (Indians) · ₹100 (Foreigners). Open 8 AM – 6 PM.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Getting There</p>
                      <p className="text-muted-foreground">18km from Jaisalmer on the Sam road. Taxi: ₹400–600 return. 25 min drive.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Camera size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Photography Tip</p>
                      <p className="text-muted-foreground">Look for framing opportunities through doorless archways. Shoot into the light for dramatic silhouettes.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border space-y-4">
                  <div>
                    <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Nearby</p>
                    <p className="text-muted-foreground text-sm">Sam Sand Dunes (24km) · Khuri Dunes (30km) · Tanot Mata Temple (120km)</p>
                  </div>
                  <div>
                    <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Sunset Time</p>
                    <p className="text-muted-foreground text-sm">6:10 PM (winter) · 7:20 PM (summer)</p>
                  </div>
                </div>
                <a href="https://maps.google.com/?q=Kuldhara+Village+Jaisalmer" target="_blank" rel="noopener noreferrer">
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
