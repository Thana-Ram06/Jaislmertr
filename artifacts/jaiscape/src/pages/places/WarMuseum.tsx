import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/place-war-museum.png";
import img2 from "@/assets/images/about-hero.png";
import img3 from "@/assets/images/hidden-6.png";
import img4 from "@/assets/images/explore-7.png";
import img5 from "@/assets/images/explore-8.png";

export default function WarMuseum() {
  return (
    <PlacePage
      name="Jaisalmer War Museum"
      location="NH11, 10km from Jaisalmer"
      heroImg={heroImg}
      gallery={[heroImg, img2, img3, img4, img5]}
      about={[
        "The Jaisalmer War Museum stands as a powerful tribute to the soldiers of the Indian Army who defended the nation's western frontier during the 1965 and 1971 wars with Pakistan. Established by the Indian Army and inaugurated in 2015, the museum is set on the road to Longewala — the site of one of India's most celebrated military victories — and tells the story of the Thar Desert's strategic role in modern Indian military history.",
        "The museum's outdoor display is its most dramatic feature: a full collection of decommissioned tanks, artillery guns, fighter jets, and armoured vehicles from both wars are arranged across a landscaped ground, creating a landscape of extraordinary historical weight. Walk among Patton tanks captured from the Pakistani Army in 1971 and the Indian Air Force Hawker Hunters that turned the tide at Longewala, and the scale of the battles comes alive.",
        "Inside, the exhibition spaces use maps, photographs, personal accounts, and military equipment to narrate the battles in detail — including the legendary Battle of Longewala, where a single company of 120 soldiers and a handful of aircraft repelled a Pakistani armoured column of 2,000 troops and 45 tanks. The museum is a moving and respectful memorial to extraordinary courage in one of history's most dramatic desert battles.",
      ]}
      experiences={[
        { title: "Tank & Aircraft Walk", desc: "Walk through the outdoor display of captured Pakistani tanks and Indian Air Force jets — a visceral encounter with the machinery of desert warfare.", tag: "History" },
        { title: "Battle of Longewala Story", desc: "A guided narration of how 120 soldiers held off a Pakistani armoured column — one of the most remarkable small-unit actions in military history.", tag: "Guided Tour" },
        { title: "Veteran Interaction", desc: "On selected days, veterans who participated in the 1971 campaign are present to share their personal accounts — a rare and moving experience.", tag: "Cultural" },
        { title: "Photography — Military Heritage", desc: "The tanks and aircraft against the desert sky create striking compositions. Morning or late afternoon light enhances the weathered metal textures.", tag: "Photography" },
      ]}
      travelInfo={{
        bestTime: "9 AM – 1 PM or 3 PM – 6 PM. Closed on Mondays.",
        entry: "₹50 (civilians) · Free for defence personnel and their families.",
        distance: "10km from Jaisalmer on NH11 (road to Jodhpur). Taxi: ₹300–450 return.",
        photoTip: "Shoot the captured Pakistani Patton tanks in the evening light — the desert sky and weathered metal make compelling images. Use a wide angle for scale.",
        nearby: "Longewala War Memorial (120km) · Tanot Mata Temple · Sam Sand Dunes",
        extra: "Open 9 AM – 6 PM daily except Monday. Allow 2–3 hours for a full visit.",
        extraLabel: "Opening Hours",
      }}
      mapsQuery="Jaisalmer War Museum"
    />
  );
}
