import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/place-khaba-fort.png";
import img2 from "@/assets/images/hero-fort.png";
import img3 from "@/assets/images/grid-walls.png";
import img4 from "@/assets/images/explore-1.png";
import img5 from "@/assets/images/explore-3.png";

export default function KhabaFort() {
  return (
    <PlacePage
      name="Khaba Fort"
      location="25km from Jaisalmer, near Kuldhara"
      heroImg={heroImg}
      gallery={[heroImg, img2, img3, img4, img5]}
      about={[
        "Khaba Fort is a hauntingly preserved medieval fortification rising from the flat desert plain 25km from Jaisalmer, adjacent to the abandoned village of Khaba — a settlement that shares the same mysterious desertion story as the more famous Kuldhara Village. The fort itself dates to the 14th century and served as a protective stronghold for the surrounding farming and herding communities of the Paliwal Brahmins.",
        "Unlike Jaisalmer Fort with its busy tourist circuit, Khaba is largely unvisited — which is precisely what makes it so remarkable. You can walk through its rooms, climb its watchtowers, and stand on its ramparts in near-total silence, with nothing but sand and desert scrub stretching to the horizon. The wind in the empty chambers has a particular sound, and the quality of solitude here is profound.",
        "The fort has a small museum in its lower chambers that documents the life of the Paliwal Brahmin communities who once populated the surrounding villages. Displays include agricultural tools, domestic objects, and photographs that give context to the mass departure that emptied these villages overnight — one of Rajasthan's most enduring historical mysteries. The combination of desert isolation, medieval architecture, and historical enigma makes Khaba one of the Jaisalmer region's most atmospheric destinations.",
      ]}
      experiences={[
        { title: "Rampart Walk", desc: "Climb to the fort's battlements and survey an unbroken 360° horizon of desert — no other structure or vehicle in sight. The silence is extraordinary.", tag: "Sightseeing" },
        { title: "Paliwal History Museum", desc: "Explore the small museum documenting the Paliwal Brahmin communities and the mystery of their overnight mass departure from 84 villages.", tag: "Heritage Tour" },
        { title: "Desert Isolation Photography", desc: "The fort against the empty desert sky, shot at golden hour, is one of the most cinematic images in the entire Jaisalmer region.", tag: "Photography" },
        { title: "Kuldhara Circuit", desc: "Combine Khaba Fort with Kuldhara Village in a single afternoon — both share the same eerie desertion story and are just 3km apart.", tag: "Guided Tour" },
      ]}
      travelInfo={{
        bestTime: "Sunrise or late afternoon. Midday heat in summer is extreme.",
        entry: "₹50 (Indians) · ₹100 (Foreigners). Small museum included.",
        distance: "25km from Jaisalmer. Usually combined with Kuldhara Village. Taxi: ₹500–700 return for both sites.",
        photoTip: "Shoot the fort from the desert approach road at golden hour — the empty foreground and dramatic sky frame the structure perfectly.",
        nearby: "Kuldhara Village · Sam Sand Dunes · Desert National Park",
        extra: "October to February. The site has no shade — bring water and sun protection.",
        extraLabel: "Best Season",
      }}
      mapsQuery="Khaba Fort Jaisalmer"
    />
  );
}
