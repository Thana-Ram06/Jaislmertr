import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/hidden-4.png";
import img2 from "@/assets/images/explore-7.png";
import img3 from "@/assets/images/explore-8.png";
import img4 from "@/assets/images/hidden-5.png";
import img5 from "@/assets/images/reel-fire.png";

export default function RamdevraTemple() {
  return (
    <PlacePage
      name="Ramdevra Temple"
      location="12km from Pokhran, 110km from Jaisalmer"
      heroImg={heroImg}
      gallery={[img2, heroImg, img3, img4, img5]}
      about={[
        "Ramdevra is one of the most important pilgrimage sites in Rajasthan — a temple complex dedicated to Baba Ramdev, a 15th-century mystic saint revered equally by Hindus and Muslims across western Rajasthan, Sindh, and Gujarat. Born into a Rajput family, Ramdev renounced royal life to devote himself to the poor, the marginalized, and the suffering, performing miracles that his devotees believe continue to this day.",
        "The temple town of Ramdevra is located near Pokhran, 110km east of Jaisalmer, and attracts millions of pilgrims annually — particularly during the Ramdev Jayanti festival in August and September, when the roads fill with devotees walking barefoot for hundreds of kilometres. The primary temple is a grand white marble structure housing the samadhi (tomb) of Baba Ramdev, perpetually fragrant with incense and flowers.",
        "What makes Ramdevra particularly poignant is its communal character: uniquely, the saint is venerated by Muslims as Ramshah Pir, and the shrine attracts both Hindu and Muslim worshippers side by side — a living example of the syncretic spiritual tradition of the desert frontier. The evening aarti, when thousands of oil lamps are lit and the crowd sways with devotional songs, is one of the most moving religious experiences in western India.",
      ]}
      experiences={[
        { title: "Evening Aarti Ceremony", desc: "Join thousands of pilgrims for the evening aarti — the sea of lamps, devotional singing, and the extraordinary communal energy is unlike any other temple experience.", tag: "Spiritual" },
        { title: "Pilgrimage Town Walk", desc: "Wander the temple town's bazaars — vendors sell devotional items, traditional Rajasthani sweets, and the distinctive five-coloured flags associated with Baba Ramdev.", tag: "Cultural" },
        { title: "Interfaith Devotion Study", desc: "Observe Hindu and Muslim pilgrims worshipping side by side at the same shrine — a remarkable window into the syncretic spiritual traditions of the desert frontier.", tag: "Cultural" },
        { title: "Pokhran Combined Trip", desc: "Combine with Pokhran Fort (12km) for a full-day journey into the desert heartland east of Jaisalmer.", tag: "Guided Tour" },
      ]}
      travelInfo={{
        bestTime: "October to March for pleasant weather. August–September for the major pilgrimage festival (Ramdev Jayanti).",
        entry: "Free entry. Donations welcome at the main shrine.",
        distance: "110km from Jaisalmer via Pokhran (NH11). Taxi: ₹1,800–2,500 return. Often combined with Pokhran Fort.",
        photoTip: "The evening aarti offers extraordinary low-light photography — fast lens, high ISO, and candid human portraits of devotees in the lamplight.",
        nearby: "Pokhran Fort · Akal Fossil Park · Jaisalmer",
        extra: "Modest dress required. The festival period (August–September) sees massive crowds — book accommodation well in advance.",
        extraLabel: "Festival Advisory",
      }}
      mapsQuery="Ramdevra Temple Pokhran Rajasthan"
    />
  );
}
