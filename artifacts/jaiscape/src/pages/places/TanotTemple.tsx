import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/place-tanot-mata-temple.png";
import img2 from "@/assets/images/explore-7.png";
import img3 from "@/assets/images/explore-8.png";
import img4 from "@/assets/images/hidden-3.png";
import img5 from "@/assets/images/hidden-5.png";

export default function TanotTemple() {
  return (
    <PlacePage
      name="Tanot Mata Temple"
      location="120km from Jaisalmer, near Pakistan Border"
      heroImg={heroImg}
      gallery={[heroImg, img2, img3, img4, img5]}
      about={[
        "The Tanot Mata Temple is one of India's most spiritually powerful and historically charged religious sites — a remote desert temple 120km from Jaisalmer, just 18km from the Pakistan border, that has been worshipped continuously for over 1,200 years. The temple is dedicated to the goddess Tanot Rai, a manifestation of the divine feminine revered throughout the Thar Desert region as a protector of the frontier.",
        "The temple's modern fame rests on a miracle that occurred during the 1971 war with Pakistan. Pakistani forces bombed the temple area with approximately 3,000 shells over multiple days — and according to Indian Army accounts, none of the bombs that landed within the temple compound exploded. The Indian Army, crediting the goddess's protection for this outcome, took over management of the temple following the war's conclusion. Today the temple is administered by the Border Security Force, and unexploded Pakistani shells are displayed in its museum as evidence of the miracle.",
        "The journey to Tanot is itself a remarkable experience — 120km of straight desert highway cutting through increasingly empty and desolate landscape, with the Pakistan border just over the horizon. The temple complex has a charged atmosphere: BSF soldiers stand guard alongside orange-clad priests, and the sound of evening aarti echoing across the empty desert as the sun sets is profoundly moving.",
      ]}
      experiences={[
        { title: "Evening Aarti Ceremony", desc: "Attend the sunset aarti — the temple bells, incense, and chanting echoing across the silent desert border landscape create an atmosphere unlike any other temple in India.", tag: "Spiritual" },
        { title: "1971 War Museum Visit", desc: "View the unexploded Pakistani shells displayed in the temple museum — tangible evidence of the extraordinary story that defines Tanot Mata's modern significance.", tag: "History" },
        { title: "Border Landscape Drive", desc: "The 120km desert drive from Jaisalmer to Tanot passes through some of the most austere and beautiful landscape in India — a journey worth the destination.", tag: "Scenic Drive" },
        { title: "Longewala Combined Trip", desc: "Combine Tanot Mata Temple with Longewala War Memorial (30km away) for a full-day immersion in the 1971 war's western front landscape.", tag: "Guided Tour" },
      ]}
      travelInfo={{
        bestTime: "October to March. Sunrise or evening aarti (6:30 PM in winter). The drive is best done early morning.",
        entry: "Free entry. Photography permitted in most areas.",
        distance: "120km from Jaisalmer. Full day trip. Taxi: ₹2,000–3,000 return. Often combined with Longewala.",
        photoTip: "The empty desert landscape surrounding the temple is as compelling as the temple itself — shoot wide to include the infinite horizon.",
        nearby: "Longewala War Memorial · Tanot Border Outpost",
        extra: "Carry ID proof (Aadhaar/Passport) — the area is a restricted border zone. Check current BSF regulations before visiting.",
        extraLabel: "Border Zone Advisory",
      }}
      mapsQuery="Tanot Mata Temple Jaisalmer"
    />
  );
}
