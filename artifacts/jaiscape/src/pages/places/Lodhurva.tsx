import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/place-lodhurva.png";
import img2 from "@/assets/images/hidden-3.png";
import img3 from "@/assets/images/grid-walls.png";
import img4 from "@/assets/images/explore-8.png";
import img5 from "@/assets/images/hidden-4.png";

export default function Lodhurva() {
  return (
    <PlacePage
      name="Lodhurva"
      location="15km from Jaisalmer"
      heroImg={heroImg}
      gallery={[heroImg, img2, img3, img4, img5]}
      about={[
        "Lodhurva is the ancient capital of the Bhati Rajput kingdom — the predecessor city to Jaisalmer, abandoned after repeated Mughal raids in the 11th and 12th centuries. Today, all that remains of the old city are the ruins of the ancient settlement and one extraordinarily beautiful Jain temple complex that survived the centuries, restored to functioning condition and still visited by pilgrims from across Rajasthan.",
        "The Lodhurva Jain Temple is a jewel of desert religious architecture — a complex of golden sandstone shrines with elaborately carved torans (ornamental arches) that frame the entrances in a cascade of floral and figurative decoration. The main shrine houses an ancient black stone idol of Parshvanath, the 23rd Jain tirthankara, that is said to be over 2,000 years old. A sacred natural spring emerges from beneath the temple floor — revered as spiritually significant for centuries.",
        "The site also features a large sacred pool inhabited by a pair of gharials (Lodhurva's famous sacred crocodiles, now gharials — the long-snouted fish-eating cousins), considered sacred protectors of the temple. Pilgrims feed them wheat balls, and the ancient ritual of coexistence between the temple community and these reptiles has continued without interruption for generations.",
      ]}
      experiences={[
        { title: "Sacred Gharial Feeding", desc: "Feed the sacred gharials (long-snouted crocodilians) that inhabit the temple pool — an ancient ritual of coexistence that has continued for centuries.", tag: "Cultural" },
        { title: "Jain Temple Puja", desc: "Attend morning prayers at the beautifully carved Jain temple — the chanting and incense in the golden sandstone shrine is a deeply atmospheric spiritual experience.", tag: "Spiritual" },
        { title: "Carved Toran Study", desc: "Examine the ornamental entrance arches in detail — the carving density and quality rivals anything found in the more famous temples at Mount Abu.", tag: "Heritage Tour" },
        { title: "Amar Sagar Combined Trip", desc: "Combine Lodhurva with Amar Sagar Lake (8km away) for a full afternoon of ancient heritage and desert water landscapes.", tag: "Guided Tour" },
      ]}
      travelInfo={{
        bestTime: "Morning (7–11 AM) for temple prayers and cooler temperatures. Evenings are also pleasant.",
        entry: "Free entry to the temple. Donations welcome.",
        distance: "15km from Jaisalmer. Taxi: ₹300–450 return. Often combined with Amar Sagar Lake.",
        photoTip: "Shoot the carved torans from slightly below to show their full depth and silhouette against the sky. Morning light on the sandstone is spectacular.",
        nearby: "Amar Sagar Lake · Sam Sand Dunes · Kuldhara Village",
        extra: "Modest dress required. Remove shoes before entering the temple precincts.",
        extraLabel: "Dress Code",
      }}
      mapsQuery="Lodhurva Jain Temple Jaisalmer"
    />
  );
}
