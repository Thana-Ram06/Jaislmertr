import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/hidden-3.png";
import img2 from "@/assets/images/explore-5.png";
import img3 from "@/assets/images/grid-walls.png";
import img4 from "@/assets/images/hidden-4.png";
import img5 from "@/assets/images/grid-streets.png";

export default function JainTemples() {
  return (
    <PlacePage
      name="Jain Temples"
      location="Inside Jaisalmer Fort"
      heroImg={heroImg}
      gallery={[img2, heroImg, img3, img4, img5]}
      about={[
        "Hidden within the winding lanes of Jaisalmer Fort, the Jain Temples are among the most elaborately carved religious structures in all of India. A cluster of seven interconnected temples built between the 12th and 16th centuries, they were commissioned by wealthy Jain merchants who settled in Jaisalmer when the fort was the centre of a thriving Silk Road trade. The merchants' extraordinary prosperity is written in every inch of carved marble and yellow limestone.",
        "The temples are dedicated to Jain tirthankaras — spiritual teachers — and together form one of the finest examples of Dilwara-style temple architecture outside of Mount Abu. The level of craftsmanship is staggering: ceilings covered in interlocking floral patterns so dense that no two panels repeat, pillars where every surface is carved with celestial figures and foliage, and sanctuaries where the air smells of sandalwood and ghee lamps flicker against gold.",
        "The most celebrated is Chandraprabhu Temple, dedicated to the 8th tirthankara. Its assembly hall features 16 carved stone brackets, each depicting a different celestial dancer, and a ceiling panel of extraordinary complexity that took craftsmen years to complete. Visit at opening time to experience the morning prayers and the extraordinary quality of silence in these golden chambers.",
      ]}
      experiences={[
        { title: "Morning Prayers Attendance", desc: "Attend the 7 AM puja ceremony — the sound of bells, chanted mantras, and the smell of incense fill the golden chambers in an unforgettable spiritual experience.", tag: "Spiritual" },
        { title: "Stone Carving Study", desc: "A guided examination of the ceiling panels — your guide points out mythological narratives, astronomical motifs, and the signature of individual craftsmen.", tag: "Heritage Tour" },
        { title: "Sacred Circuit Walk", desc: "Move through all seven connected temples in sequence, each with its own deity and distinctive architectural character.", tag: "Guided Tour" },
        { title: "Photography — Detail Mode", desc: "Macro photography of the carved marble panels — the detail rivals the finest lacework. Best light comes through the eastern windows at dawn.", tag: "Photography" },
      ]}
      travelInfo={{
        bestTime: "7 AM – 12 PM. Temples close in the afternoon. Arrive early for morning prayers and soft light.",
        entry: "Free entry. Camera: ₹50. No leather items permitted inside.",
        distance: "Inside Jaisalmer Fort, 5-minute walk from the main Dashera Chowk. Accessible on foot.",
        photoTip: "Look up — the ceilings are the masterpiece. Bring a tripod for the low-light interior shots. Disable flash out of respect.",
        nearby: "Jaisalmer Fort Ramparts · Patwon Ki Haveli · Nathmal Ki Haveli",
        extra: "Modest dress required. No leather shoes, bags or belts inside the temple precincts.",
        extraLabel: "Dress Code",
      }}
      mapsQuery="Jain Temples Jaisalmer Fort"
    />
  );
}
