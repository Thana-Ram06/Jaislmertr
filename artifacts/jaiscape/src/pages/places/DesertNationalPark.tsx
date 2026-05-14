import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/place-desert-national-park.png";
import img2 from "@/assets/images/hero-dunes.png";
import img3 from "@/assets/images/grid-dunes.png";
import img4 from "@/assets/images/grid-camel.png";
import img5 from "@/assets/images/card-safari.png";

export default function DesertNationalPark() {
  return (
    <PlacePage
      name="Desert National Park"
      location="40km from Jaisalmer, via Sam"
      heroImg={heroImg}
      gallery={[heroImg, img2, img3, img4, img5]}
      about={[
        "The Desert National Park is one of India's largest national parks — a vast protected area of 3,162 square kilometres encompassing dunes, rocky terrain, salt flats, and sparse desert scrubland that together form one of the most biodiverse desert ecosystems in Asia. Established in 1980, the park protects a landscape that has remained largely unchanged for millennia, home to species found nowhere else on earth.",
        "The park's most celebrated resident is the Great Indian Bustard — one of the world's heaviest flying birds and now critically endangered, with fewer than 150 individuals surviving. The open desert grasslands of the park are among the last places on earth where these extraordinary birds can be reliably seen. Winter mornings are the best time to observe them on the open flats between Sam and Sudasari.",
        "Beyond the bustard, the park hosts a remarkable collection of desert wildlife: chinkara gazelles, desert foxes, caracals, Indian wolves, blackbucks, and hundreds of species of resident and migratory birds. The fossil beds within the park's boundaries contain marine fossils up to 180 million years old — evidence of the ancient ocean that once covered this desert. A jeep safari into the core wilderness areas, guided by a trained naturalist, is one of the most extraordinary natural experiences available anywhere in India.",
      ]}
      experiences={[
        { title: "Great Indian Bustard Safari", desc: "A dawn jeep safari to the park's open grasslands for a chance to see the critically endangered Great Indian Bustard — a once-in-a-lifetime wildlife encounter.", tag: "Wildlife Safari" },
        { title: "Desert Fossil Trail", desc: "Visit the marine fossil beds within the park — ancient sea creatures preserved in stone that reveal the desert's extraordinary geological past.", tag: "Nature" },
        { title: "Night Sky Astronomy", desc: "The park's vast dark skies offer some of the finest stargazing in India. Guided night sessions with telescopes are available through Jaisalmer.city's partners.", tag: "Astronomy" },
        { title: "Naturalist-Guided Walk", desc: "A 2-hour walking safari with a trained desert naturalist who identifies tracks, bird calls, and desert plants — an intimate encounter with the park's ecology.", tag: "Guided Tour" },
      ]}
      travelInfo={{
        bestTime: "November to February for wildlife (especially Great Indian Bustard). Avoid April–June heat.",
        entry: "₹100 (Indians) · ₹500 (Foreigners). Jeep safari: ₹1,500–3,000 with guide. Permit required.",
        distance: "40km from Jaisalmer via Sam village. Jeep required — arrange through your hotel or Jaisalmer.city.",
        photoTip: "Bring a telephoto (400mm minimum) for wildlife. The open flats near Sudasari are best for bustard photography in morning light.",
        nearby: "Sam Sand Dunes · Khuri Sand Dunes · Akal Fossil Park",
        extra: "A certified naturalist guide is mandatory for the core area. Book 24 hours in advance through the forest department.",
        extraLabel: "Permit Info",
      }}
      mapsQuery="Desert National Park Jaisalmer"
    />
  );
}
