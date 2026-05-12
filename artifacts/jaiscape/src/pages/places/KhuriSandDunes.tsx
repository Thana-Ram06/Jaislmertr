import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/place-khuri-sand-dunes.png";
import img2 from "@/assets/images/hero-dunes.png";
import img3 from "@/assets/images/card-sunset.png";
import img4 from "@/assets/images/grid-dunes.png";
import img5 from "@/assets/images/camp-2.png";

export default function KhuriSandDunes() {
  return (
    <PlacePage
      name="Khuri Sand Dunes"
      location="45km Southwest of Jaisalmer"
      heroImg={heroImg}
      gallery={[heroImg, img2, img3, img4, img5]}
      about={[
        "Khuri Sand Dunes are the Thar Desert's best-kept secret — a vast and largely undeveloped dune field 45km southwest of Jaisalmer that offers the authentic desert experience that Sam Sand Dunes once provided before mass tourism arrived. The village of Khuri sits at the edge of a rippling sea of sand where the dunes are taller, the colours more saturated, and the crowds almost non-existent.",
        "What distinguishes Khuri from its more famous counterpart at Sam is the quality of solitude available here. Walk 15 minutes from the village and you are entirely alone in an ocean of sand — no jeep tracks, no competing camp music, no tourist infrastructure visible in any direction. The silence is profound, broken only by the wind reshaping the dune crests into new geometries with each passing hour.",
        "The village of Khuri is also a destination in itself. Its traditional mud-plastered houses decorated with geometric patterns in white, the warm hospitality of the Sodha Rajput families who run the local camps, and the quality of local food served on sand — dal baati churma cooked over a wood fire and served under the stars — make Khuri a destination that rewards those willing to venture beyond the well-trodden desert circuit.",
      ]}
      experiences={[
        { title: "Secluded Dune Walk", desc: "Walk 20 minutes from Khuri village into the dune field for genuine desert solitude — sand in every direction, no crowds, no sound but wind.", tag: "Adventure" },
        { title: "Village Mud House Stay", desc: "Spend a night in a traditional mud-plastered Rajasthani village house — the most authentic desert accommodation in the Jaisalmer region.", tag: "Cultural Stay" },
        { title: "Camel Safari at Sunset", desc: "A private camel safari through the dunes as the sun sets — the light at Khuri turns from gold to deep violet without a single tourist camp in sight.", tag: "Safari" },
        { title: "Desert Campfire Dinner", desc: "Dal baati churma cooked over a wood fire, served on the dunes with folk music and a sky full of stars — pure Rajasthani desert hospitality.", tag: "Luxury Camp" },
      ]}
      travelInfo={{
        bestTime: "October to March. Arrive 1 hour before sunset for the dunes at their most beautiful.",
        entry: "Free access. Camel safari: ₹400–700. Village accommodation: ₹800–2,500 per night.",
        distance: "45km southwest of Jaisalmer. Taxi: ₹700–900 return. Jeep recommended for the sandy approach road.",
        photoTip: "The lack of crowds means you can compose pure dune landscapes without tourists. Shoot from dune crests with a long lens to compress the waves.",
        nearby: "Sam Sand Dunes · Desert National Park · Tanot Mata Temple",
        extra: "October to February for cool nights and clear skies. Avoid monsoon season.",
        extraLabel: "Best Season",
      }}
      mapsQuery="Khuri Sand Dunes Jaisalmer"
    />
  );
}
