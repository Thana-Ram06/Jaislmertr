import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/hidden-2.png";
import img2 from "@/assets/images/explore-4.png";
import img3 from "@/assets/images/hidden-1.png";
import img4 from "@/assets/images/reel-fire.png";
import img5 from "@/assets/images/camp-3.png";

export default function MoolSagar() {
  return (
    <PlacePage
      name="Mool Sagar"
      location="9km West of Jaisalmer"
      heroImg={heroImg}
      gallery={[img2, heroImg, img3, img4, img5]}
      about={[
        "Mool Sagar is a hidden garden oasis 9km west of Jaisalmer — a royal pleasure garden built by the Maharawal of Jaisalmer as a summer retreat, centred around a small but remarkably picturesque tank (reservoir) fed by an underground spring. In a desert where water is the rarest luxury, the existence of Mool Sagar — with its clear water, mature trees, and the sound of birds — has a quality almost miraculous.",
        "The garden was laid out in the traditional char-bagh (four-garden) style of Mughal landscaping, with water channels dividing the space into quadrants and a pavilion at the centre. A small but beautifully carved temple dedicated to Lord Shiva stands at the water's edge, its reflection shimmering in the tank. The combination of water, greenery, carved stone, and desert silence makes this one of the most peaceful spots in the Jaisalmer region.",
        "Unlike the busier tourist sites, Mool Sagar receives few visitors and retains an atmosphere of authentic quietude. Local families come on Sunday afternoons; a caretaker tends the garden and the small temple. The garden is at its most beautiful in the cool morning hours, when birds congregate at the water and the sound of their calls mingles with the wind in the neem trees.",
      ]}
      experiences={[
        { title: "Garden Morning Walk", desc: "A gentle walk through the royal garden in the early morning — the sound of birds, the smell of neem, and the reflection of the temple in still water.", tag: "Wellness" },
        { title: "Temple Darshan", desc: "Visit the small Shiva temple at the water's edge — simple, ancient, and attended by a gentle priest who welcomes all visitors with a tilak and a smile.", tag: "Spiritual" },
        { title: "Birdwatching by the Tank", desc: "The garden's water source attracts a diversity of birds unusual for the desert — white-throated kingfishers, bee-eaters, and various warblers in winter.", tag: "Nature" },
        { title: "Picnic in the Desert Oasis", desc: "Bring a hamper from Jaisalmer and spend a slow afternoon in the garden — one of the most quietly delightful picnic spots in Rajasthan.", tag: "Leisure" },
      ]}
      travelInfo={{
        bestTime: "Early morning (7–10 AM) for birds and coolness. Avoid peak afternoon heat in summer.",
        entry: "₹20 (Indians) · ₹50 (Foreigners). A nominal garden maintenance charge.",
        distance: "9km west of Jaisalmer. Taxi: ₹250–350 return. Often combined with Lodhurva and Amar Sagar on a western day circuit.",
        photoTip: "Shoot the temple reflected in the still tank from the opposite bank — early morning mist sometimes lingers on the water for extraordinary atmospheric shots.",
        nearby: "Amar Sagar Lake · Lodhurva · Wind Park",
        extra: "Combine with Lodhurva (6km) and Amar Sagar Lake (7km) for a full western half-day circuit.",
        extraLabel: "Suggested Circuit",
      }}
      mapsQuery="Mool Sagar Jaisalmer"
    />
  );
}
