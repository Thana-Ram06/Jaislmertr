import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/place-thar-heritage-museum.png";
import img2 from "@/assets/images/hidden-4.png";
import img3 from "@/assets/images/about-hero.png";
import img4 from "@/assets/images/hidden-6.png";
import img5 from "@/assets/images/explore-7.png";

export default function TharHeritageMuseum() {
  return (
    <PlacePage
      name="Thar Heritage Museum"
      location="Court Road, Jaisalmer"
      heroImg={heroImg}
      gallery={[heroImg, img2, img3, img4, img5]}
      about={[
        "The Thar Heritage Museum is a remarkable private museum housed in a beautifully restored haveli in the heart of Jaisalmer's old city. Founded and curated by historian L.N. Khatri, the museum is a labour of love spanning decades of research and collection — an intimate window into the domestic, religious, and artistic life of the Thar Desert's communities across five centuries.",
        "The collection is organised around the rhythms of desert life: the tools and vessels of nomadic existence, the ornaments and textiles of wedding ceremonies, the weapons of tribal warriors, and the sacred objects of religious practice. Unlike national museums with their glass cases and institutional distance, the Thar Heritage Museum is warm, personal, and curated with the passion of a collector who grew up in this landscape.",
        "Particularly outstanding is the collection of antique Rajasthani jewellery — silver ornaments worn by desert women, turban pins of Bhati Rajput nobles, and the distinctive gold-thread embroidery of the region's festive dress. The museum's founder is often present to answer questions and share stories that bring every object to life with human context that no label can fully convey.",
      ]}
      experiences={[
        { title: "Curator's Personal Tour", desc: "When L.N. Khatri is present, request a personal tour — his stories about individual objects bring the collection to life with human depth and local knowledge.", tag: "Heritage Tour" },
        { title: "Jewellery & Textile Study", desc: "Examine the extraordinary silver ornaments and embroidered textiles up close — your guide explains the tribal and ceremonial significance of every piece.", tag: "Cultural" },
        { title: "Photography — Antiques", desc: "Still-life photography of the collection's most visually striking objects — the aged textures and warm lighting of the museum spaces are perfect for atmospheric shots.", tag: "Photography" },
        { title: "Desert Community Stories", desc: "Learn about the distinct communities of the Thar — Bhati Rajputs, Jain merchants, Bishnoi villagers, and nomadic pastoralists — through their material culture.", tag: "Learning" },
      ]}
      travelInfo={{
        bestTime: "10 AM – 6 PM. Closed on Tuesdays. Quieter on weekday mornings.",
        entry: "₹75 (Indians) · ₹150 (Foreigners). Photography: ₹50 additional.",
        distance: "Near Jaisalmer Court Road, 400m from the fort gate. Easy walking distance.",
        photoTip: "The natural light through haveli windows creates beautiful ambient conditions. Request permission before photographing specific artefacts.",
        nearby: "Desert Culture Centre · Gadisar Lake · Jaisalmer Fort",
        extra: "Allow 1.5–2 hours for a thorough visit. The museum shop sells quality reproduction crafts.",
        extraLabel: "Tip",
      }}
      mapsQuery="Thar Heritage Museum Jaisalmer"
    />
  );
}
