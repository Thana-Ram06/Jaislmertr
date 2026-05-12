import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/place-desert-culture-centre.png";
import img2 from "@/assets/images/hidden-5.png";
import img3 from "@/assets/images/camp-1.png";
import img4 from "@/assets/images/about-hero.png";
import img5 from "@/assets/images/hidden-4.png";

export default function DesertCultureCentre() {
  return (
    <PlacePage
      name="Desert Culture Centre"
      location="Near Gadisar Lake, Jaisalmer"
      heroImg={heroImg}
      gallery={[heroImg, img2, img3, img4, img5]}
      about={[
        "The Desert Culture Centre and Museum is one of Jaisalmer's most intimate cultural institutions — a privately funded museum dedicated to preserving and celebrating the traditional arts, crafts, music, and folklore of the Thar Desert region. Founded by the cultural historian and folklorist Nakulam Vyaas, the centre has grown over the decades into a remarkable repository of Rajasthani desert culture that mainstream museums rarely document.",
        "The collection spans traditional instruments of desert music — the khartal, morchang, rawanhattha, and the distinctive kamayacha fiddle — alongside folk costumes, camel decorations, embroidered textiles, and household objects that reveal the ingenuity of desert life. Each section is annotated with contextual information that situates these objects within the social fabric of the communities that made them.",
        "What makes the centre truly special is its living cultural programme. Every evening, the museum hosts an intimate folk music and puppet show performance — Rajasthani kathputli (puppet theatre) and live performances of desert folk music that have entertained and informed visitors from across the world. The performers are masters of their traditions, and the intimate setting of 40–50 seats makes this one of the most personal cultural experiences available in Jaisalmer.",
      ]}
      experiences={[
        { title: "Evening Folk Music Show", desc: "An intimate 45-minute performance of traditional Rajasthani desert music and Kathputli puppet theatre — a living encounter with centuries-old art forms.", tag: "Cultural" },
        { title: "Instrument Discovery", desc: "Handle traditional desert instruments — the morchang jaw harp, khartal clappers, and rawanhattha one-string fiddle — with brief introductions from the curator.", tag: "Interactive" },
        { title: "Costume & Textile Gallery", desc: "Examine the extraordinary embroidered textiles and festive costumes of the desert communities — the colours and needlework represent different tribes and occasions.", tag: "Heritage Tour" },
        { title: "Folklore Research", desc: "The centre's library of oral literature, folk tales, and musical recordings is available to researchers and curious visitors by appointment.", tag: "Research" },
      ]}
      travelInfo={{
        bestTime: "7 PM for the evening cultural show. Museum: 9 AM – 6 PM daily.",
        entry: "Museum: ₹20. Evening show: ₹100 (includes museum entry). Book seats early in peak season.",
        distance: "500m from Gadisar Lake. 1.5km from the fort. Auto-rickshaw from the city centre: ₹40–60.",
        photoTip: "The evening show is dimly lit — use a fast lens (f/1.8) and high ISO for candid performance shots without flash.",
        nearby: "Gadisar Lake · Thar Heritage Museum · Jaisalmer Fort",
        extra: "Evening shows at 7:30 PM and 8:30 PM. Arrive 15 minutes early for good seats.",
        extraLabel: "Show Timings",
      }}
      mapsQuery="Desert Culture Centre Museum Jaisalmer"
    />
  );
}
