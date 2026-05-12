import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/grid-walls.png";
import img2 from "@/assets/images/explore-5.png";
import img3 from "@/assets/images/grid-streets.png";
import img4 from "@/assets/images/card-fort.png";
import img5 from "@/assets/images/hidden-3.png";

export default function NathmalHaveli() {
  return (
    <PlacePage
      name="Nathmal Ki Haveli"
      location="Jaisalmer Old City"
      heroImg={heroImg}
      gallery={[img2, heroImg, img3, img4, img5]}
      about={[
        "Nathmal Ki Haveli is one of Jaisalmer's most captivating architectural treasures — a 19th-century prime minister's mansion that stands as a testament to the extraordinary skill of the city's stone carvers. Built in 1885 for Prime Minister Diwan Mohata, the haveli was commissioned to two brothers who worked simultaneously, each on one half of the façade, creating an almost-symmetrical masterpiece with subtle artistic differences that reveal close inspection.",
        "The haveli's five-storey yellow sandstone façade is a riot of intricate carvings — floral motifs, elephants, horses, peacocks, miniature camels, and European-influenced flourishes reflecting the era's cosmopolitan tastes. The jharokha windows overflow with lacework so fine it looks like embroidered fabric rather than stone. Every surface tells a story of a dynasty at the height of its power.",
        "Inside, the merchant-class opulence continues with painted interiors, mirror-work ceilings, and carved wooden pillars. The upper floors offer stunning views of the fort and the surrounding golden city rooftops. A visit here before sunset, when the light turns the sandstone amber, is among the most atmospheric experiences in all of Rajasthan.",
      ]}
      experiences={[
        { title: "Façade Photography Walk", desc: "Document every carved panel of this extraordinary façade — each section tells a different story in stone. Best light: early morning.", tag: "Photography" },
        { title: "Architectural Comparison", desc: "Compare the two brothers' competing halves — find subtle differences in their carving styles and motifs across the symmetrical facade.", tag: "Heritage Tour" },
        { title: "Rooftop Views", desc: "Climb to the upper floors for a rare rooftop perspective over the old city's golden labyrinth and the distant fort silhouette.", tag: "Sightseeing" },
        { title: "Art & Craft Discovery", desc: "Visit the ground-floor craft shops for hand-carved stone miniatures, traditional Rajasthani textiles, and local silver jewellery.", tag: "Shopping" },
      ]}
      travelInfo={{
        bestTime: "8 AM – 11 AM or 4 PM – 6 PM. Morning light illuminates the façade from the east.",
        entry: "₹30 (Indians) · ₹100 (Foreigners). Photography: ₹50 extra.",
        distance: "200m from Jaisalmer Fort main gate. Easy walking distance from the old city.",
        photoTip: "Stand directly opposite the entrance at mid-morning for a symmetrical full-façade shot. Use a wide-angle lens.",
        nearby: "Patwon Ki Haveli · Salim Singh Ki Haveli · Jaisalmer Fort",
        extra: "October to March. Monsoon (July–August) is atmospheric but roads can flood.",
        extraLabel: "Best Season",
      }}
      mapsQuery="Nathmal Ki Haveli Jaisalmer"
    />
  );
}
