import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, MapPin, Clock, Camera, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import placeImg from "@/assets/images/place-sam-sand-dunes.png";
import heroDunes from "@/assets/images/hero-dunes.png";
import gridDunes from "@/assets/images/grid-dunes.png";
import cardSafari from "@/assets/images/card-safari.png";
import cardSunset from "@/assets/images/card-sunset.png";

const gallery = [placeImg, heroDunes, gridDunes, cardSafari, cardSunset];

const experiences = [
  { title: "Private Sunset Safari", desc: "Ride across endless dunes on camelback as the sun melts into the horizon. Champagne served at the ridge.", tag: "Safari" },
  { title: "Desert Camp Overnight", desc: "Stay in a luxury tented camp at the foot of the dunes. Campfire dinner, folk music, and million-star sky.", tag: "Luxury Camp" },
  { title: "Dune Boarding", desc: "Sand-board down the tallest dunes at Sam — the closest thing to snowboarding in Rajasthan.", tag: "Adventure" },
  { title: "Sunrise Meditation", desc: "Begin your morning in silence on the dunes, watching the first light paint the Thar gold.", tag: "Wellness" },
];

export default function SamSandDunes() {
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
              <MapPin size={10} /> 42km from Jaisalmer
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-6xl md:text-8xl text-white leading-none"
            >
              Sam Sand Dunes
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
                  <p>Forty-two kilometres west of Jaisalmer lies the Thar Desert's most spectacular landscape — Sam Sand Dunes. These towering dunes, some reaching 30 metres in height, are part of the Sam Desert National Park and form one of the most cinematic desert environments in all of India.</p>
                  <p>Unlike the smaller dunes closer to the city, Sam offers genuine wilderness. In the early morning, when the tourist camps are quiet, you can walk to the crest of a ridge and see nothing but rippling sand in every direction — a silence so complete it has a texture of its own. The light at Sam is extraordinary: the dunes shift from copper at dawn to blinding gold at noon to deep amber and violet at dusk.</p>
                  <p>This is where Jaisalmer's most memorable experiences happen — camel safaris at sunset, overnight camps under skies dense with stars, folk music by a desert fire, and the particular peace of waking up to an ocean of sand.</p>
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

            <div className="space-y-6">
              <div className="border border-[#C8A96B]/20 p-6 bg-[#151515] sticky top-28">
                <h3 className="font-serif text-xl text-foreground mb-6">Travel Info</h3>
                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <Clock size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Best Time to Visit</p>
                      <p className="text-muted-foreground">Arrive 1 hour before sunset (around 5:30 PM). Mornings after 7 AM for quiet dunes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Entry & Access</p>
                      <p className="text-muted-foreground">Free entry. Camel safari: ₹400–800. Jeep safari: ₹1,200–2,500.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Getting There</p>
                      <p className="text-muted-foreground">42km from Jaisalmer. Taxi: ₹600–900 return. Journey: ~50 minutes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Camera size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Photography Tip</p>
                      <p className="text-muted-foreground">Shoot from the second ridge, 500m into the dunes — away from crowds. Use a polarising filter.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border space-y-4">
                  <div>
                    <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Nearby Camps</p>
                    <p className="text-muted-foreground text-sm">SUJÁN The Serai · Rajwada Desert Camp · Mama's Home Sam Dunes</p>
                  </div>
                  <div>
                    <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Sunset Time</p>
                    <p className="text-muted-foreground text-sm">6:10 PM (winter) · 7:20 PM (summer)</p>
                  </div>
                </div>
                <a href="https://maps.google.com/?q=Sam+Sand+Dunes+Jaisalmer" target="_blank" rel="noopener noreferrer">
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
