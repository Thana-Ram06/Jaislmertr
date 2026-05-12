import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/grid-streets.png";
import img2 from "@/assets/images/hero-fort.png";
import img3 from "@/assets/images/explore-5.png";
import img4 from "@/assets/images/reel-towers.png";
import img5 from "@/assets/images/grid-walls.png";

export default function TaziaTower() {
  return (
    <PlacePage
      name="Tazia Tower"
      location="Badal Mahal, Jaisalmer Fort"
      heroImg={heroImg}
      gallery={[img2, heroImg, img3, img4, img5]}
      about={[
        "The Tazia Tower is one of Jaisalmer's most intriguing architectural curiosities — a multi-storey tower attached to the Badal Mahal (Cloud Palace) within the fort complex, decorated with carved stone replicas of tazias: the ornate paper structures carried in Muharram processions by Shia Muslims. That a tower honouring a Muslim tradition was built by a Hindu royal family speaks to the remarkable communal harmony that defined medieval Jaisalmer.",
        "The tower is five storeys of increasingly delicate sandstone work, each floor balconing outward in a different ornamental style. The uppermost floors bear the tazia-inspired canopied structures that give the tower its name — intricately pierced stone lattices that filter the desert light into shadows of extraordinary complexity. At certain angles and times of day, the carved screens glow like lace against the sky.",
        "The Badal Mahal complex that surrounds the tower features some of the finest painted interiors in the fort — blue and white geometric motifs on walls and ceilings, executed in the style of Mughal court art. The combination of painted chambers and the carved tower exterior makes this one of the fort's most rewarding corners for slow, attentive visitors.",
      ]}
      experiences={[
        { title: "Lattice Light Photography", desc: "Shoot the carved stone screens from inside — the light filters through in patterns that shift as the sun moves. Morning eastern light is most dramatic.", tag: "Photography" },
        { title: "Badal Mahal Interior Tour", desc: "Explore the painted cloud-blue chambers of the Cloud Palace surrounding the tower — one of the fort's most intimate and beautiful interiors.", tag: "Heritage Tour" },
        { title: "Fort Architecture Trail", desc: "Combine the Tazia Tower with the Jain Temples and Raj Mahal in a single half-day fort walk guided by Jaiscape's heritage specialists.", tag: "Guided Tour" },
        { title: "Cultural History Talk", desc: "Learn the story of how a Hindu royal family came to build a tower honouring a Muslim tradition — a story of Jaisalmer's unique cultural fusion.", tag: "Cultural" },
      ]}
      travelInfo={{
        bestTime: "9 AM – 11 AM for side-lit carved screens. Late afternoon for golden-hour fort atmosphere.",
        entry: "Included in Jaisalmer Fort entry ticket. ₹70 (Indians) · ₹250 (Foreigners).",
        distance: "Inside Jaisalmer Fort, near the Raj Mahal. 10-minute walk from the main fort gate.",
        photoTip: "Shoot upward from the base of the tower against blue sky — the layered carved canopies create a striking graphic composition.",
        nearby: "Raj Mahal · Jain Temples · Jaisalmer Fort Ramparts",
        extra: "The tower is best visited as part of the fort's inner circuit — combine with Raj Mahal and Jain Temples.",
        extraLabel: "Tip",
      }}
      mapsQuery="Tazia Tower Jaisalmer Fort"
    />
  );
}
