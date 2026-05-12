import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/about-hero.png";
import img2 from "@/assets/images/hidden-3.png";
import img3 from "@/assets/images/hidden-6.png";
import img4 from "@/assets/images/explore-8.png";
import img5 from "@/assets/images/explore-6.png";

export default function GovernmentMuseum() {
  return (
    <PlacePage
      name="Government Museum"
      location="Near Gadisar Road, Jaisalmer"
      heroImg={heroImg}
      gallery={[img2, heroImg, img3, img4, img5]}
      about={[
        "The Government Museum of Jaisalmer, maintained by the Rajasthan State Government, houses an important collection of archaeological finds, fossils, medieval sculptures, and folk art that traces the history of the Jaisalmer region from prehistoric times to the Rajput era. Though modest in scale compared to the great museums of Jaipur and Jodhpur, the collection contains items of real scholarly significance — many discovered during construction work in the surrounding desert over the past century.",
        "The fossil section is particularly noteworthy: the museum holds specimens from the Akal Wood Fossil Park and other desert sites, including ancient marine fossils that reveal the startling fact that the Thar Desert was once an ocean floor. These geological exhibits offer a perspective on the desert landscape that transforms how you see the dunes and rock formations outside.",
        "The medieval sculpture gallery features carved stone figures removed from ruined temples across the region — apsaras, yakshinis, and divine figures in the distinctive Rajput style of the 10th–14th centuries. The folk art section displays traditional Rajasthani crafts, costumes, and implements in a context that complements the private collections of the Thar Heritage Museum and Desert Culture Centre.",
      ]}
      experiences={[
        { title: "Fossil & Geology Gallery", desc: "Examine marine fossils that prove the Thar was once an ocean — a perspective-shifting encounter with deep geological time that changes how you see the desert.", tag: "Science" },
        { title: "Medieval Sculpture Walk", desc: "Move through the carved stone gallery with context from a knowledgeable guide — each piece tells a story of the religious landscape of medieval Rajputana.", tag: "Heritage Tour" },
        { title: "Folk Art Overview", desc: "A curated introduction to the traditional crafts of the Thar Desert communities — complementary to the private museums but with a broader regional scope.", tag: "Cultural" },
        { title: "Combined Museum Day", desc: "Pair this visit with the Thar Heritage Museum and Desert Culture Centre for a comprehensive picture of Jaisalmer's cultural history in a single day.", tag: "Learning" },
      ]}
      travelInfo={{
        bestTime: "10 AM – 1 PM (morning). The museum closes for lunch and reopens 3–5 PM.",
        entry: "₹10 (Indians) · ₹50 (Foreigners). Photography not permitted inside.",
        distance: "1km from Jaisalmer Fort, near Gadisar Lake road. Auto-rickshaw from city centre: ₹30–50.",
        photoTip: "Photography is restricted inside — sketch or note your observations for reference. The exterior building is photogenic in late afternoon light.",
        nearby: "Gadisar Lake · Thar Heritage Museum · Desert Culture Centre",
        extra: "Open 10 AM – 5 PM. Closed on Fridays and government holidays.",
        extraLabel: "Opening Hours",
      }}
      mapsQuery="Government Museum Jaisalmer"
    />
  );
}
