import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/place-longewala-war-memorial.png";
import img2 from "@/assets/images/explore-6.png";
import img3 from "@/assets/images/about-hero.png";
import img4 from "@/assets/images/hidden-6.png";
import img5 from "@/assets/images/explore-7.png";

export default function LongewalaMemorial() {
  return (
    <PlacePage
      name="Longewala War Memorial"
      location="120km from Jaisalmer, Near Tanot"
      heroImg={heroImg}
      gallery={[heroImg, img2, img3, img4, img5]}
      about={[
        "The Longewala War Memorial marks the site of one of the most decisive and dramatic battles of the 1971 India-Pakistan war — a confrontation that has been immortalised in the acclaimed Bollywood film 'Border' (1997) and remains a defining chapter in Indian military history. On the night of 4–5 December 1971, a single company of 120 soldiers from the 23rd Punjab Regiment held off a Pakistani armoured column of 2,000 troops and 45 tanks, armed with only two rocket launchers and a single anti-tank recoilless gun.",
        "The Pakistani advance was halted by the desert terrain and the soldiers' extraordinary courage through the night, and destroyed at dawn when Indian Air Force Hawker Hunter jets arrived to strafe the column. The battle lasted 12 hours and ended with the destruction of 36 Pakistani tanks and over 200 vehicles, with the loss of only two Indian soldiers. It was a turning point in the western theatre of the 1971 war.",
        "The memorial site today preserves the actual battlefield, with destroyed Pakistani tanks still sitting in the desert sand where they were hit. A permanent exhibition documents the battle in detail, with photographs, maps, and personal accounts. Walking among the wrecked tanks on the desert floor — silent and rusting under the sun — is a powerful and haunting experience.",
      ]}
      experiences={[
        { title: "Battlefield Walk", desc: "Walk the actual 1971 battlefield — destroyed Pakistani tanks still sit in the sand where they were hit by Indian Air Force jets at dawn.", tag: "History" },
        { title: "Memorial Exhibition", desc: "The permanent exhibition uses maps, photographs, and audio accounts to reconstruct the 12-hour battle in vivid detail.", tag: "Museum" },
        { title: "Dawn Visit", desc: "Arrive at sunrise — the light on the rusting tank hulks and the empty desert creates one of the most atmospheric military heritage experiences in India.", tag: "Photography" },
        { title: "Tanot-Longewala Full Day", desc: "Combine the memorial with Tanot Mata Temple (30km) for a complete immersion in the 1971 war's border landscape and stories.", tag: "Guided Tour" },
      ]}
      travelInfo={{
        bestTime: "Morning (8–11 AM) for cooler temperatures and the best light on the battlefield.",
        entry: "₹30 (civilians). Photography permitted on the battlefield.",
        distance: "120km from Jaisalmer. Full day trip — combine with Tanot Mata Temple. Taxi: ₹2,500–3,500 return for both.",
        photoTip: "The wrecked Pakistani tanks in the open desert make extraordinary subjects — shoot low with a wide angle to show scale against the empty sky.",
        nearby: "Tanot Mata Temple (30km) · Jaisalmer War Museum (110km back toward city)",
        extra: "Carry ID. The road to Longewala passes through a restricted military zone — check current regulations with your taxi driver.",
        extraLabel: "Travel Advisory",
      }}
      mapsQuery="Longewala War Memorial Jaisalmer"
    />
  );
}
