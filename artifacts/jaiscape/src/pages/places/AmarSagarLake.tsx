import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/place-amar-sagar-lake.png";
import img2 from "@/assets/images/explore-4.png";
import img3 from "@/assets/images/hidden-2.png";
import img4 from "@/assets/images/reel-fire.png";
import img5 from "@/assets/images/grid-camp.png";

export default function AmarSagarLake() {
  return (
    <PlacePage
      name="Amar Sagar Lake"
      location="7km West of Jaisalmer"
      heroImg={heroImg}
      gallery={[heroImg, img2, img3, img4, img5]}
      about={[
        "Amar Sagar is a serene and largely undiscovered reservoir 7km west of Jaisalmer, fringed by carved temples and the ruins of a royal garden complex built by Maharawal Akhai Singh in the 18th century. Unlike the more visited Gadisar Lake, Amar Sagar retains a quality of quietude that makes it one of the Thar Desert's most meditative water bodies — a place where the reflection of carved sandstone ghats in still water creates an image of extraordinary beauty.",
        "The lake is surrounded by a collection of small temples and carved cenotaphs in various states of preservation, their stone facades weathered by desert wind into organic, almost sculptural forms. A large ornate step-well (baoli) is accessible from the lake's edge — its carved interior, descending in stages to the waterline, is one of the finest examples of Rajput water architecture in the region.",
        "In winter, the lake attracts a variety of migratory waterbirds, including painted storks, flamingos, and various species of duck. The combination of bird life, reflective water, carved stone architecture, and the desert landscape beyond makes Amar Sagar a favourite destination for photographers, naturalists, and anyone seeking solitude away from the fort's busy tourist circuit.",
      ]}
      experiences={[
        { title: "Sunrise Reflections", desc: "Arrive at dawn to photograph the carved ghats and temple spires reflected in the still surface — the best mirror photography in the Jaisalmer region.", tag: "Photography" },
        { title: "Stepwell Exploration", desc: "Descend the carved baoli (step-well) to the waterline — the geometry of the carved tiers is extraordinary and almost entirely overlooked by tourists.", tag: "Heritage Tour" },
        { title: "Birdwatching by the Shore", desc: "Winter brings painted storks, flamingos, and ducks — walk the lakeshore with binoculars in the early morning for an hour of unexpected wildness.", tag: "Nature" },
        { title: "Temple Circuit Walk", desc: "Visit the small carved temples that line the lake — each dedicated to a different deity, each in a different state of photogenic decay.", tag: "Cultural" },
      ]}
      travelInfo={{
        bestTime: "Early morning (6:30–9 AM) for reflections and birds. Sunset is also spectacular.",
        entry: "Free access. No ticket required.",
        distance: "7km from Jaisalmer. Taxi: ₹300–400 return. Often combined with a trip to Lodhurva.",
        photoTip: "Use a tripod at sunrise for long-exposure reflections on the still water. The light is perfect between 6:30 and 8 AM.",
        nearby: "Lodhurva · Kuldhara Village · Sam Sand Dunes",
        extra: "October to March for migratory birds. Avoid monsoon when water levels can be unpredictable.",
        extraLabel: "Birdwatching Season",
      }}
      mapsQuery="Amar Sagar Lake Jaisalmer"
    />
  );
}
