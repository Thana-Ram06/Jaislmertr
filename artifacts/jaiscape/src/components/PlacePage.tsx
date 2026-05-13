import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, MapPin, Clock, Camera, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AiDisclaimer } from "@/components/AiDisclaimer";

export interface PlaceExperience {
  title: string;
  desc: string;
  tag: string;
}

export interface PlaceTravelInfo {
  bestTime: string;
  entry: string;
  distance: string;
  photoTip: string;
  nearby: string;
  extra?: string;
  extraLabel?: string;
}

export interface PlacePageProps {
  name: string;
  location: string;
  heroImg: string;
  gallery: string[];
  about: string[];
  experiences: PlaceExperience[];
  travelInfo: PlaceTravelInfo;
  mapsQuery: string;
}

export function PlacePage({ name, location, heroImg, gallery, about, experiences, travelInfo, mapsQuery }: PlacePageProps) {
  return (
    <Layout>
      <div className="bg-[#0B0B0B] min-h-screen">
        <div className="relative h-[70vh] w-full overflow-hidden flex items-end">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent" />
          <div className="relative z-10 container mx-auto px-6 pb-16">
            <Link href="/explore">
              <button className="flex items-center gap-2 text-[#C8A96B]/70 hover:text-[#C8A96B] text-sm tracking-widest uppercase mb-8 transition-colors">
                <ArrowLeft size={14} /> Back to Explore
              </button>
            </Link>
            <div className="inline-flex items-center gap-2 border border-[#C8A96B]/30 px-3 py-1 text-xs text-[#C8A96B] uppercase tracking-widest mb-4">
              <MapPin size={10} /> {location}
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-6xl md:text-8xl text-white leading-none"
            >
              {name}
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
                  {about.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>

              <section>
                <h2 className="font-serif text-3xl text-[#C8A96B] mb-6">Gallery</h2>
                <div className="w-16 h-px bg-[#C8A96B]/40 mb-8" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {gallery.map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
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

            <div className="space-y-6">
              <div className="border border-[#C8A96B]/20 p-6 bg-[#151515] sticky top-28">
                <h3 className="font-serif text-xl text-foreground mb-6">Travel Info</h3>
                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <Clock size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Best Time to Visit</p>
                      <p className="text-muted-foreground">{travelInfo.bestTime}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Entry & Access</p>
                      <p className="text-muted-foreground">{travelInfo.entry}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Getting There</p>
                      <p className="text-muted-foreground">{travelInfo.distance}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Camera size={14} className="text-[#C8A96B] mt-1 shrink-0" />
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Photography Tip</p>
                      <p className="text-muted-foreground">{travelInfo.photoTip}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border space-y-4">
                  <div>
                    <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">Nearby Attractions</p>
                    <p className="text-muted-foreground text-sm">{travelInfo.nearby}</p>
                  </div>
                  {travelInfo.extra && (
                    <div>
                      <p className="text-[#C8A96B] uppercase tracking-wider text-xs mb-1">{travelInfo.extraLabel ?? "Note"}</p>
                      <p className="text-muted-foreground text-sm">{travelInfo.extra}</p>
                    </div>
                  )}
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#C8A96B] text-black hover:bg-[#C8A96B]/90 rounded-none mt-6">
                    Open in Maps
                  </Button>
                </a>
              </div>

              <AiDisclaimer variant="place" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
