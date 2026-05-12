import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/grid-restaurant.png";
import img2 from "@/assets/images/explore-6.png";
import img3 from "@/assets/images/hidden-5.png";
import img4 from "@/assets/images/grid-streets.png";
import img5 from "@/assets/images/card-cafe.png";

export default function DussehraChowk() {
  return (
    <PlacePage
      name="Dussehra Chowk"
      location="Inside Jaisalmer Fort"
      heroImg={heroImg}
      gallery={[img2, heroImg, img3, img4, img5]}
      about={[
        "Dussehra Chowk is the ceremonial heart of Jaisalmer Fort — a large open square flanked by the Raj Mahal (Royal Palace) on one side and a collection of carved havelis and temples on the other. Named for the Dussehra festival at which the Maharaja would receive his subjects and conduct royal ceremonies, the chowk is the social and historical centre of the living fort community.",
        "The square comes alive at all hours: in the morning, local residents cross it on their daily errands; in the afternoon, it fills with tourists exploring the fort; in the evening, it becomes an outdoor gathering place where chai is served at stone benches, musicians occasionally play, and the fort's warm sandstone glows in the last light. The Raj Mahal's carved facade dominates the northern end — a multi-storey sandstone palace with elaborate jharokha balconies and carved screens.",
        "The restaurants and cafes that line the chowk's edges offer some of the best rooftop views in Jaisalmer — tables perched above the ancient square with the fort ramparts framing the sky and the city below. The combination of history, daily life, food, and architecture makes Dussehra Chowk the ideal place to spend an hour absorbing the extraordinary living quality of this 800-year-old city.",
      ]}
      experiences={[
        { title: "Rooftop Cafe Dining", desc: "Breakfast or dinner on a rooftop restaurant overlooking the Raj Mahal and the chowk — the most atmospheric dining setting in the fort.", tag: "Dining" },
        { title: "Raj Mahal Photography", desc: "Photograph the palace facade at golden hour when the carved jharokhas cast long decorative shadows across the sandstone. The light lasts approximately 20 minutes.", tag: "Photography" },
        { title: "Evening People-Watching", desc: "Pull up a stone bench as the sun sets and watch the fort community go about its evening — chai vendors, children playing, musicians, and the inevitable goats.", tag: "Cultural" },
        { title: "Fort Inner Circuit Walk", desc: "Use Dussehra Chowk as your starting point for the inner fort circuit — Jain Temples, Tazia Tower, and Raj Mahal within a single 2-hour walk.", tag: "Guided Tour" },
      ]}
      travelInfo={{
        bestTime: "Early morning (7–9 AM) for quiet and light. Sunset (5:30–7 PM) for golden hour and evening atmosphere.",
        entry: "Included in Jaisalmer Fort entry ticket. ₹70 (Indians) · ₹250 (Foreigners).",
        distance: "Inside Jaisalmer Fort, 5-minute walk from the main Hawa Pol gate. Central fort location.",
        photoTip: "Shoot from the ground level toward the Raj Mahal at dusk — the carved facade lit from below by street lamps creates a magical atmosphere.",
        nearby: "Raj Mahal · Jain Temples · Tazia Tower · Fort Ramparts",
        extra: "The chowk is fully pedestrian — ideal for slow, unhurried exploration without motor traffic.",
        extraLabel: "Tip",
      }}
      mapsQuery="Dussehra Chowk Jaisalmer Fort"
    />
  );
}
