import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/place-mandir-palace.png";
import img2 from "@/assets/images/hero-fort.png";
import img3 from "@/assets/images/explore-1.png";
import img4 from "@/assets/images/grid-walls.png";
import img5 from "@/assets/images/card-fort.png";

export default function MandirPalace() {
  return (
    <PlacePage
      name="Mandir Palace"
      location="Jaisalmer City Centre"
      heroImg={heroImg}
      gallery={[heroImg, img2, img3, img4, img5]}
      about={[
        "Mandir Palace is one of Jaisalmer's grandest royal residences — a magnificent sandstone complex that served as the official palace of the Jaisalmer royal family outside the fort walls. Built across multiple centuries and expanded by successive rulers, its architecture blends Rajput elegance with Mughal-influenced ornamentation, resulting in a building of rare character and historical depth.",
        "The palace complex is centred around a series of courtyards connected by intricately carved archways, with jharokha balconies projecting from each floor. The façade is an extraordinary exercise in sandstone craftsmanship: elephants, peacocks, and floral patterns compete for attention across every surface. The main tower, visible from across the city, has become one of Jaisalmer's defining landmarks.",
        "Parts of the palace have been converted into a heritage hotel, allowing visitors the rare experience of staying within a royal residence that has housed Rajasthani nobility for generations. The palace's rooftop offers an unobstructed 360-degree panorama of Jaisalmer — the fort to the north, the golden city below, and the Thar Desert stretching to the horizon in every direction.",
      ]}
      experiences={[
        { title: "Royal Heritage Stay", desc: "Book a room within the palace complex for the full maharaja experience — original furnishings, carved ceilings, and royal courtyard views.", tag: "Luxury Stay" },
        { title: "Rooftop Panorama", desc: "Climb to the palace rooftop for a 360° view of Jaisalmer — the fort, the golden city, and the desert beyond. Best at sunrise.", tag: "Sightseeing" },
        { title: "Architectural Walk", desc: "A guided tour through the palace's carved courtyards, royal chambers, and the tower staircase — with stories of the ruling dynasty.", tag: "Heritage Tour" },
        { title: "Sunset Cocktails", desc: "The palace rooftop terrace serves evening drinks with arguably the finest view in Jaisalmer — the fort silhouette lit gold at dusk.", tag: "Sunset" },
      ]}
      travelInfo={{
        bestTime: "Sunrise (6–8 AM) for the rooftop panorama. Afternoon light on the west facade is spectacular.",
        entry: "Heritage hotel with public areas accessible. Rooftop: ₹100 entry for non-guests.",
        distance: "5-minute walk from Jaisalmer Fort. Located on the main Gandhi Chowk road.",
        photoTip: "Shoot from the east in the morning — the rising sun catches the tower's carved brackets and jharokhas in warm gold.",
        nearby: "Jaisalmer Fort · Tazia Tower · Dussehra Chowk",
        extra: "6:30 PM (winter) · 7:30 PM (summer)",
        extraLabel: "Sunset Time",
      }}
      mapsQuery="Mandir Palace Jaisalmer"
    />
  );
}
