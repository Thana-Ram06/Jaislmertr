import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/grid-streets.png";
import img2 from "@/assets/images/grid-restaurant.png";
import img3 from "@/assets/images/explore-6.png";
import img4 from "@/assets/images/card-cafe.png";
import img5 from "@/assets/images/hidden-5.png";

export default function ManakChowk() {
  return (
    <PlacePage
      name="Manak Chowk"
      location="Old City, Jaisalmer"
      heroImg={heroImg}
      gallery={[img2, heroImg, img3, img4, img5]}
      about={[
        "Manak Chowk is the commercial and cultural heartbeat of Jaisalmer's old city — a busy market square just outside the fort walls where the daily life of the golden city converges in a riot of colour, sound, and activity. Named after a revered local figure, the chowk is surrounded by centuries-old havelis that have been adapted over time into shops selling everything from Rajasthani textiles and silver jewellery to spices, handicrafts, and street food.",
        "The square is at its most vibrant in the morning, when vendors arrange their wares and the old city awakens. Fabric merchants hang embroidered shawls from their upper floors, silver jewellers arrange ancestral pieces alongside modern work, and the smell of chai and freshly fried kachori drifts from small kitchens. The afternoon sees a quieter pace, while evenings bring a different energy — lit by warm light, with tourists and locals mingling around street food stalls.",
        "For shoppers, Manak Chowk is the best starting point for authentic Rajasthani handicrafts: traditional mirror-work embroidery (shisha), hand-block printed textiles, camel leather goods, carved stone figurines, lac bangles, and the distinctive gold and silver jewellery of the region. Prices are negotiable, and the quality of craft here — much of it genuinely handmade in surrounding villages — is among the finest available in Rajasthan.",
      ]}
      experiences={[
        { title: "Morning Market Walk", desc: "Arrive at 8 AM and walk the chowk as vendors set up — the colours, smells, and textures of the daily market are extraordinary photographic and sensory material.", tag: "Cultural" },
        { title: "Craft Shopping", desc: "Browse for mirror-work embroidery, hand-block prints, carved stone, lac bangles, and silver jewellery with guidance on quality and fair pricing from Jaiscape.", tag: "Shopping" },
        { title: "Street Food Trail", desc: "Sample mirchi bada (stuffed chilli fritters), pyaaz kachori, and mawa kachori from the street vendors — the best flavours of Rajasthani street food in one square.", tag: "Food" },
        { title: "Old City Photography", desc: "The narrow lanes radiating from Manak Chowk offer the finest street photography in Jaisalmer — colourful doorways, vendors, and the sandstone architecture of everyday life.", tag: "Photography" },
      ]}
      travelInfo={{
        bestTime: "8–11 AM for market activity and morning light. Evenings (6–8 PM) for a more relaxed atmosphere.",
        entry: "Free access. Open daily.",
        distance: "Outside the main fort gate, 200m from the fort entrance. Walking distance from most old city hotels.",
        photoTip: "Shoot the textile merchants' upper floors — embroidered shawls hanging against ancient sandstone walls create extraordinary colour compositions.",
        nearby: "Jaisalmer Fort · Nathmal Ki Haveli · Salim Singh Ki Haveli",
        extra: "Bargaining is expected and customary. Start at 40–50% of the asking price. Government-certified shops have fixed prices.",
        extraLabel: "Shopping Tip",
      }}
      mapsQuery="Manak Chowk Jaisalmer"
    />
  );
}
