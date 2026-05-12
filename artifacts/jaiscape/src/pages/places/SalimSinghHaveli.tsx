import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/place-salim-singh-ki-haveli.png";
import img2 from "@/assets/images/explore-1.png";
import img3 from "@/assets/images/reel-towers.png";
import img4 from "@/assets/images/grid-walls.png";
import img5 from "@/assets/images/grid-streets.png";

export default function SalimSinghHaveli() {
  return (
    <PlacePage
      name="Salim Singh Ki Haveli"
      location="Jaisalmer Old City"
      heroImg={heroImg}
      gallery={[heroImg, img2, img3, img4, img5]}
      about={[
        "Salim Singh Ki Haveli is one of Jaisalmer's most immediately recognisable buildings — a nine-storey mansion that rises like a ship's prow above the old city's rooftops. Built around 1815 for the powerful prime minister Salim Singh, the haveli's distinctive peacock-shaped top floor — shaped like an outstretched fan of carved blue stone — is unlike anything else in Rajasthan and has become an iconic silhouette on Jaisalmer's skyline.",
        "The haveli's story is inseparable from the darker side of Jaisalmer's history. Salim Singh was a feared administrator known for his cruelty, and legend holds that the local Maharaja refused to allow the haveli to rise higher than the palace, cutting its construction short. Despite this, the building's 38 intricately carved balconies, each different in design, and the extraordinary peacock-arch top floor make it among the most visually inventive havelis in all of India.",
        "The interior is largely unfurnished but the architectural drama more than compensates — ornate carved arches, elaborate bracket-supported upper floors, and peacock motifs repeated throughout in stone, wood, and plaster. The views from the upper floors sweep across the golden labyrinth of the old city to the fort.",
      ]}
      experiences={[
        { title: "Skyline Photography", desc: "Capture Jaisalmer's most dramatic roofline from across the lane — the peacock-arch top floor is the city's most iconic architectural silhouette.", tag: "Photography" },
        { title: "Interior Exploration", desc: "Move through 38 uniquely carved balconies, each with its own decorative scheme — a treasure hunt for architectural details.", tag: "Heritage Tour" },
        { title: "Old City Walk", desc: "Start here and walk the ancient lanes connecting all three great havelis in a single morning circuit through the golden old city.", tag: "Walking Tour" },
        { title: "Sunset Views", desc: "The western-facing upper floors catch the last light of day, with the fort glowing amber behind. An unmissable sunset vantage.", tag: "Sunset" },
      ]}
      travelInfo={{
        bestTime: "Early morning (7–10 AM) or late afternoon (4–6 PM) for the best facade light.",
        entry: "₹30 (Indians) · ₹80 (Foreigners). Nominal camera charge applies.",
        distance: "500m south of the fort entrance. Easily walkable from the fort gate.",
        photoTip: "Step back to the opposite side of the lane for a full view. The peacock arch glows copper at sunset from the west-facing angle.",
        nearby: "Nathmal Ki Haveli · Patwon Ki Haveli · Jaisalmer Fort",
        extra: "October to February for cool mornings. Monsoon is atmospheric but muddy.",
        extraLabel: "Best Season",
      }}
      mapsQuery="Salim Singh Ki Haveli Jaisalmer"
    />
  );
}
