import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/place-akal-fossil-park.png";
import img2 from "@/assets/images/explore-3.png";
import img3 from "@/assets/images/about-hero.png";
import img4 from "@/assets/images/explore-8.png";
import img5 from "@/assets/images/hidden-5.png";

export default function AkalFossilPark() {
  return (
    <PlacePage
      name="Akal Wood Fossil Park"
      location="17km from Jaisalmer, Barmer Road"
      heroImg={heroImg}
      gallery={[heroImg, img2, img3, img4, img5]}
      about={[
        "Akal Wood Fossil Park is one of India's most remarkable and least visited geological wonders — an open-air park where ancient fossilised tree trunks, up to 180 million years old, lie exposed in the desert sand exactly as they fell. Protected since 1974, the park preserves evidence of a Jurassic forest that once stood where the Thar Desert now extends — a fact that makes standing among these petrified logs one of the most mind-expanding experiences in all of Rajasthan.",
        "The fossils are the remains of massive coniferous trees that once grew in a tropical forest environment during the Jurassic period, when this region lay at the edge of the ancient Tethys Sea. As the climate shifted, the trees died and were buried in sediment; over millions of years, mineral-rich groundwater replaced the organic material cell by cell, creating perfect stone replicas of the original wood — some still showing bark texture, growth rings, and branch scars in extraordinary detail.",
        "The park contains around 25 major fossilised trunks, the largest measuring over 13 metres in length. Interpretive signage explains the geological processes and the timescale involved, but the impact of the site is primarily experiential: you walk among stone logs in the desert and feel the full weight of deep geological time. The nearby Government Museum holds additional fossil specimens with more detailed explanations.",
      ]}
      experiences={[
        { title: "Fossil Trail Walk", desc: "A self-guided or guided walk among 25 exposed fossilised tree trunks — an encounter with 180 million years of geological time in the open desert.", tag: "Nature" },
        { title: "Geological Storytelling", desc: "A trained guide narrates the journey from Jurassic tropical forest to desert — the story of tectonic plates, ancient seas, and the slow making of the Thar.", tag: "Guided Tour" },
        { title: "Macro Photography", desc: "The fossilised wood shows extraordinary surface detail — bark texture, growth rings, and mineral crystallisation. Macro photography here is unlike anything else in India.", tag: "Photography" },
        { title: "Desert Wilderness Walk", desc: "The area surrounding the park is pristine desert scrubland — combine the fossil walk with an early morning naturalist walk for a full desert ecology experience.", tag: "Nature" },
      ]}
      travelInfo={{
        bestTime: "Early morning (7–10 AM) or late afternoon (4–6 PM). Midday summer heat is extreme.",
        entry: "₹20 (Indians) · ₹100 (Foreigners). Photography permitted.",
        distance: "17km from Jaisalmer on Barmer Road. Taxi: ₹350–500 return. Often combined with Desert National Park.",
        photoTip: "Use a macro lens for the fossilised bark detail — it is unlike any rock texture you've photographed. Morning side-light reveals the grain beautifully.",
        nearby: "Desert National Park · Sam Sand Dunes · Khuri Sand Dunes",
        extra: "Allow 1–1.5 hours. Bring water — there are no facilities inside the park.",
        extraLabel: "Tip",
      }}
      mapsQuery="Akal Wood Fossil Park Jaisalmer"
    />
  );
}
