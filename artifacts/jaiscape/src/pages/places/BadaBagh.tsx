import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/place-bada-bagh.png";
import img2 from "@/assets/images/hidden-2.png";
import img3 from "@/assets/images/about-hero.png";
import img4 from "@/assets/images/hidden-5.png";
import img5 from "@/assets/images/reel-fire.png";

export default function BadaBagh() {
  return (
    <PlacePage
      name="Bada Bagh"
      location="6km North of Jaisalmer"
      heroImg={heroImg}
      gallery={[heroImg, img2, img3, img4, img5]}
      about={[
        "Bada Bagh — the 'Great Garden' — is a haunting and beautiful complex of royal cenotaphs set amid a grove of trees on the edge of the Thar Desert, 6km north of Jaisalmer. Built for the rulers and nobles of the Bhati Rajput dynasty from the 16th century onward, the complex contains dozens of chhatris (cenotaphs) arranged in loose clusters across the sand, each marking a royal cremation site.",
        "The cenotaphs range from simple domed platforms to elaborate multi-pillared pavilions with carved equestrian panels depicting the ruler on horseback — a tradition that continued until the last maharaja. The sandstone has weathered over centuries, and many of the older structures lean at angles or have partially collapsed, giving the site an atmosphere of dignified ruin that is profoundly atmospheric, especially at dawn or dusk.",
        "What elevates Bada Bagh beyond a typical heritage site is its setting: the cenotaphs rise from golden sand against a backdrop of the desert, with a dam-fed reservoir nearby that attracts waterbirds in winter. In the late afternoon, when the sand glows and the desert wind moves through the carved lattice screens, this is one of the most cinematically beautiful spots in Rajasthan — a landscape that feels entirely removed from the modern world.",
      ]}
      experiences={[
        { title: "Sunrise Desert Walk", desc: "Walk among the cenotaphs as the first light hits the carved sandstone — the long shadows and golden light create a scene of extraordinary beauty.", tag: "Sunrise" },
        { title: "Royal History Tour", desc: "A guide walks you through the dynasty of rulers memorialized here, from the fort's founding to the last maharaja, using carved friezes as the visual text.", tag: "Heritage Tour" },
        { title: "Photography Trail", desc: "The weathered cenotaphs, desert light, and sparse vegetation create a landscape photographer's dream — best in the golden hours.", tag: "Photography" },
        { title: "Birdwatching", desc: "The nearby reservoir attracts migratory waterbirds in winter — bring binoculars for a meditative hour by the water at dawn.", tag: "Nature" },
      ]}
      travelInfo={{
        bestTime: "Sunrise (6–8 AM) or 1 hour before sunset. The site is harsh in midday heat.",
        entry: "₹50 per person. Jeep entry: ₹100.",
        distance: "6km north of Jaisalmer. Taxi: ₹250–400 return. 15-minute drive.",
        photoTip: "Shoot from low angles with the cenotaphs silhouetted against the sky. Sunrise from the east gives the most dramatic backlighting.",
        nearby: "Sam Sand Dunes · Khuri Dunes · Jaisalmer Fort",
        extra: "October to February. Avoid May–June when heat is extreme.",
        extraLabel: "Best Season",
      }}
      mapsQuery="Bada Bagh Jaisalmer"
    />
  );
}
