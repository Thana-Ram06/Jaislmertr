import { Layout } from "@/components/Layout";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import pJaisalmerFort from "@/assets/images/place-jaisalmer-fort.png";
import pPatwonHaveli from "@/assets/images/place-patwon-ki-haveli.png";
import pGadisarLake from "@/assets/images/place-gadisar-lake.png";
import pNathmalHaveli from "@/assets/images/place-nathmal-ki-haveli.png";
import pSalimSinghHaveli from "@/assets/images/place-salim-singh-ki-haveli.png";
import pJainTemples from "@/assets/images/place-jain-temples.png";
import pMandirPalace from "@/assets/images/place-mandir-palace.png";
import pTaziaTower from "@/assets/images/place-tazia-tower.png";
import pVyasChhatri from "@/assets/images/place-vyas-chhatri.png";
import pBadaBagh from "@/assets/images/place-bada-bagh.png";
import pWarMuseum from "@/assets/images/place-war-museum.png";
import pDesertCulture from "@/assets/images/place-desert-culture-centre.png";
import pTharHeritage from "@/assets/images/place-thar-heritage-museum.png";
import pGovernmentMuseum from "@/assets/images/place-government-museum.png";
import pAmarSagar from "@/assets/images/place-amar-sagar-lake.png";
import pSamDunes from "@/assets/images/place-sam-sand-dunes.png";
import pKuldhara from "@/assets/images/place-kuldhara-village.png";
import pKhabaFort from "@/assets/images/place-khaba-fort.png";
import pDesertPark from "@/assets/images/place-desert-national-park.png";
import pAkalFossil from "@/assets/images/place-akal-fossil-park.png";
import pKhuriDunes from "@/assets/images/place-khuri-sand-dunes.png";
import pTanotTemple from "@/assets/images/place-tanot-mata-temple.png";
import pLongewala from "@/assets/images/place-longewala-war-memorial.png";
import pLodhurva from "@/assets/images/place-lodhurva.png";
import pRamdevra from "@/assets/images/place-ramdevra-temple.png";
import pPokhranFort from "@/assets/images/place-pokhran-fort.png";
import pDussehraChowk from "@/assets/images/place-dussehra-chowk.png";
import pManakChowk from "@/assets/images/place-manak-chowk.png";
import pWindPark from "@/assets/images/place-wind-park.png";
import pMoolSagar from "@/assets/images/place-mool-sagar.png";

const categories = ["All", "Forts", "Temples", "Lakes", "Dunes", "Museums", "Villages", "Markets"];

const places = [
  { id: 1,  name: "Jaisalmer Fort",          slug: "jaisalmer-fort",          category: "Forts",    desc: "A living fort that rises from the golden Thar — one of the world's largest fully preserved medieval cities.", img: pJaisalmerFort },
  { id: 2,  name: "Patwon Ki Haveli",         slug: "patwon-ki-haveli",         category: "Forts",    desc: "The grandest haveli in Jaisalmer — five interconnected mansions of intricate carved sandstone.", img: pPatwonHaveli },
  { id: 3,  name: "Gadisar Lake",             slug: "gadisar-lake",             category: "Lakes",    desc: "A centuries-old reservoir with ornate ghats, temples, and migratory birds at dusk.", img: pGadisarLake },
  { id: 4,  name: "Nathmal Ki Haveli",        slug: "nathmal-ki-haveli",        category: "Forts",    desc: "A 19th-century prime minister's mansion — its façade carved by two brothers, each on one symmetrical half.", img: pNathmalHaveli },
  { id: 5,  name: "Salim Singh Ki Haveli",    slug: "salim-singh-ki-haveli",    category: "Forts",    desc: "Nine storeys of carved sandstone rising above the old city, crowned by an iconic peacock-arch top floor.", img: pSalimSinghHaveli },
  { id: 6,  name: "Jain Temples",             slug: "jain-temples",             category: "Temples",  desc: "Seven interconnected 12th–16th century temples inside the fort with staggeringly intricate carved marble interiors.", img: pJainTemples },
  { id: 7,  name: "Mandir Palace",            slug: "mandir-palace",            category: "Forts",    desc: "A grand royal palace with carved courtyards, jharokha balconies and a rooftop panorama of the entire golden city.", img: pMandirPalace },
  { id: 8,  name: "Tazia Tower",              slug: "tazia-tower",              category: "Forts",    desc: "Five storeys of carved lattice inspired by Muslim tazia processions — built by a Hindu royal family in a gesture of communal harmony.", img: pTaziaTower },
  { id: 9,  name: "Vyas Chhatri",             slug: "vyas-chhatri",             category: "Villages", desc: "Jaisalmer's finest sunset viewpoint — ornate cenotaphs on a rocky outcrop with the fort silhouette against the desert sky.", img: pVyasChhatri },
  { id: 10, name: "Bada Bagh",                slug: "bada-bagh",                category: "Villages", desc: "A haunting complex of royal cenotaphs in golden sand — the cenotaphs of Jaisalmer's Bhati Rajput rulers across five centuries.", img: pBadaBagh },
  { id: 11, name: "Jaisalmer War Museum",     slug: "war-museum",               category: "Museums",  desc: "Tanks, jets and the story of the Battle of Longewala — a powerful tribute to the soldiers of India's western desert frontier.", img: pWarMuseum },
  { id: 12, name: "Desert Culture Centre",    slug: "desert-culture-centre",    category: "Museums",  desc: "Folk music, Kathputli puppet shows, and the traditional arts of the Thar — an intimate living cultural experience every evening.", img: pDesertCulture },
  { id: 13, name: "Thar Heritage Museum",     slug: "thar-heritage-museum",     category: "Museums",  desc: "A privately curated haveli museum of desert jewellery, textiles, weapons, and the daily life of Thar communities.", img: pTharHeritage },
  { id: 14, name: "Government Museum",        slug: "government-museum",        category: "Museums",  desc: "Fossils, medieval sculptures, and folk art tracing Jaisalmer from prehistoric ocean floor to Rajput glory.", img: pGovernmentMuseum },
  { id: 15, name: "Amar Sagar Lake",          slug: "amar-sagar-lake",          category: "Lakes",    desc: "A serene royal reservoir 7km from the city with ornate ghats, carved temples, a magnificent step-well, and winter waterbirds.", img: pAmarSagar },
  { id: 16, name: "Sam Sand Dunes",           slug: "sam-sand-dunes",           category: "Dunes",    desc: "Vast rippling dunes with unforgettable sunset hues. The iconic heart of the Thar Desert experience.", img: pSamDunes },
  { id: 17, name: "Kuldhara Village",         slug: "kuldhara-village",         category: "Villages", desc: "An abandoned 13th-century village with 84 silent houses — one of Rajasthan's greatest mysteries.", img: pKuldhara },
  { id: 18, name: "Khaba Fort",               slug: "khaba-fort",               category: "Forts",    desc: "A medieval desert fortification near Kuldhara — empty, silent, and profoundly atmospheric in the open Thar.", img: pKhabaFort },
  { id: 19, name: "Desert National Park",     slug: "desert-national-park",     category: "Villages", desc: "3,162 sq km of protected desert wilderness — home to the critically endangered Great Indian Bustard and ancient fossils.", img: pDesertPark },
  { id: 20, name: "Akal Wood Fossil Park",    slug: "akal-fossil-park",         category: "Villages", desc: "Fossilised Jurassic tree trunks lying in the open desert — 180-million-year-old evidence of the sea that was once here.", img: pAkalFossil },
  { id: 21, name: "Khuri Sand Dunes",         slug: "khuri-sand-dunes",         category: "Dunes",    desc: "The Thar's best-kept secret — tall, undeveloped dunes and genuine desert solitude 45km southwest of Jaisalmer.", img: pKhuriDunes },
  { id: 22, name: "Tanot Mata Temple",        slug: "tanot-mata-temple",        category: "Temples",  desc: "A remote border temple where Pakistani bombs inexplicably failed to explode in 1971 — guarded now by the BSF.", img: pTanotTemple },
  { id: 23, name: "Longewala War Memorial",   slug: "longewala-war-memorial",   category: "Museums",  desc: "The actual battlefield where 120 soldiers repelled 2,000 Pakistani troops and 45 tanks — wrecks still in the desert sand.", img: pLongewala },
  { id: 24, name: "Lodhurva",                 slug: "lodhurva",                 category: "Temples",  desc: "The ancient capital of the Bhati Rajputs — a serene Jain temple complex with sacred gharials in its temple pool.", img: pLodhurva },
  { id: 25, name: "Ramdevra Temple",          slug: "ramdevra-temple",          category: "Temples",  desc: "A major pilgrimage shrine where Hindus and Muslims worship side by side at the tomb of a 15th-century desert saint.", img: pRamdevra },
  { id: 26, name: "Pokhran Fort",             slug: "pokhran-fort",             category: "Forts",    desc: "A grand 14th-century Rajput fort on the Jaisalmer–Jodhpur highway with a royal museum and deep desert views.", img: pPokhranFort },
  { id: 27, name: "Dussehra Chowk",           slug: "dussehra-chowk",           category: "Markets",  desc: "The ceremonial heart of Jaisalmer Fort — a living royal square with the Raj Mahal facade and rooftop cafes.", img: pDussehraChowk },
  { id: 28, name: "Manak Chowk",              slug: "manak-chowk",              category: "Markets",  desc: "The golden city's great marketplace — embroidered textiles, silver jewellery, spices, and the best street food in Rajasthan.", img: pManakChowk },
  { id: 29, name: "Wind Park",                slug: "wind-park",                category: "Villages", desc: "One of Asia's largest wind farms — hundreds of white turbines rising from the ancient desert in a surreal modern landscape.", img: pWindPark },
  { id: 30, name: "Mool Sagar",               slug: "mool-sagar",               category: "Lakes",    desc: "A hidden royal garden oasis 9km from the city — a spring-fed tank, carved Shiva temple, and birdsong in the desert.", img: pMoolSagar },
];

export default function Explore() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredPlaces = places.filter(
    (place) => activeTab === "All" || place.category === activeTab
  );

  return (
    <Layout>
      <div className="pt-24 bg-[#0B0B0B]">
        <div className="relative h-[40vh] w-full overflow-hidden flex items-center justify-center mb-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${pJaisalmerFort})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-6">
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">Explore Jaisalmer</h1>
            <p className="text-white/70 max-w-xl mx-auto text-lg font-light">
              30 curated destinations — from living forts and ancient temples to vast golden dunes.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 pb-32">
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

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                    <h3 className="font-serif text-xl mb-2 text-foreground">{place.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{place.desc}</p>
                    <Link href={`/places/${place.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full border-border hover:border-[#C8A96B] hover:bg-transparent hover:text-[#C8A96B] rounded-none cursor-pointer"
                      >
                        View Place
                      </Button>
                    </Link>
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
