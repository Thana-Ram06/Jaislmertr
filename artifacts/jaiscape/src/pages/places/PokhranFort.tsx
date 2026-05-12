import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/hero-fort.png";
import img2 from "@/assets/images/explore-1.png";
import img3 from "@/assets/images/grid-walls.png";
import img4 from "@/assets/images/card-fort.png";
import img5 from "@/assets/images/explore-3.png";

export default function PokhranFort() {
  return (
    <PlacePage
      name="Pokhran Fort"
      location="110km East of Jaisalmer"
      heroImg={heroImg}
      gallery={[img2, heroImg, img3, img4, img5]}
      about={[
        "Pokhran Fort is a grand 14th-century Rajput fortification that rises dramatically above the small desert town of Pokhran, 110km east of Jaisalmer on the highway to Jodhpur. Built by the Bhati Rajput rulers as a waystation fortress on the desert trade route, the fort's massive yellow sandstone walls and soaring towers have watched over the Thar Desert for seven centuries — and witnessed some of the most consequential moments in modern Indian history.",
        "Pokhran is the site of India's nuclear tests — Operation Smiling Buddha in 1974 and Operation Shakti in 1998 — conducted in the desert test ranges just a few kilometres from the fort. The fort itself predates these events by six centuries and is a remarkable piece of medieval military architecture: its walls are 5 metres thick in places, its gateways flanked by towers with cannon mounts still visible, and its inner courtyard holds a palace complex decorated with murals of hunting scenes and royal portraits.",
        "The fort museum preserves a collection of royal weapons, armour, ancient manuscripts, and photographs that document the fort's history and Pokhran's role in modern India. The town around the fort is unhurried and authentic — an ideal stop on the Jaisalmer to Jodhpur highway for those who want to encounter a Rajput fort entirely free of tourist crowds.",
      ]}
      experiences={[
        { title: "Fort Rampart Walk", desc: "Walk the massive perimeter walls for unobstructed desert views in every direction — the landscape around Pokhran is flat and vast, giving a true sense of frontier geography.", tag: "Sightseeing" },
        { title: "Royal Museum", desc: "Examine medieval weapons, armour, royal manuscripts, and hunting murals in the fort's palace chambers — a genuine trove of Rajput military history.", tag: "Heritage Tour" },
        { title: "Nuclear History Context", desc: "Your guide explains the connection between this ancient fort and India's nuclear test sites in the surrounding desert — a strange and fascinating historical juxtaposition.", tag: "History" },
        { title: "Ramdevra Circuit", desc: "Combine the fort with nearby Ramdevra Temple (12km) for a full-day desert heritage experience east of Jaisalmer.", tag: "Guided Tour" },
      ]}
      travelInfo={{
        bestTime: "October to March. Morning hours for cooler temperatures inside the fort.",
        entry: "₹50 (Indians) · ₹150 (Foreigners). Museum included.",
        distance: "110km from Jaisalmer on NH11. Taxi: ₹1,800–2,500 return. Natural midway stop between Jaisalmer and Jodhpur.",
        photoTip: "Shoot the fort towers from outside the walls at golden hour — the desert light on the yellow sandstone glows amber. The gate complex is the strongest composition.",
        nearby: "Ramdevra Temple (12km) · Akal Fossil Park (93km) · Jodhpur (185km)",
        extra: "A useful stop on the Jaisalmer–Jodhpur road trip. Allow 1.5 hours for the fort and museum.",
        extraLabel: "Tip",
      }}
      mapsQuery="Pokhran Fort Rajasthan"
    />
  );
}
