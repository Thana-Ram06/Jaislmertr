import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/place-vyas-chhatri.png";
import img2 from "@/assets/images/card-sunset.png";
import img3 from "@/assets/images/reel-dunes.png";
import img4 from "@/assets/images/explore-2.png";
import img5 from "@/assets/images/grid-dunes.png";

export default function VyasChhatri() {
  return (
    <PlacePage
      name="Vyas Chhatri"
      location="Northeast Jaisalmer, 1km from Fort"
      heroImg={heroImg}
      gallery={[heroImg, img2, img3, img4, img5]}
      about={[
        "Vyas Chhatri is Jaisalmer's premier sunset viewpoint — a cluster of ornate cenotaphs (chhatris) dedicated to the Vyas Brahmin community, perched on a low rocky outcrop northeast of the city. The site has been a gathering point for sunset-watchers for centuries, and for good reason: from here, the entire silhouette of Jaisalmer Fort rises against the western sky, turning from gold to copper to dark amber as the sun descends behind the Thar.",
        "The chhatris themselves are beautiful carved sandstone structures — elevated platforms with domed canopies supported by carved pillars. They were built as royal cenotaphs, marking the cremation sites of distinguished Vyas Brahmins who served the Jaisalmer royal court. The architecture is intimate rather than grand, and the site has a contemplative, unhurried quality that the larger tourist attractions lack.",
        "Beyond the architecture, Vyas Chhatri is simply one of the finest viewpoints in Rajasthan. The panorama sweeps from the fort to the left, across the entire golden city below, to the Thar stretching into the haze on the right. On clear winter evenings, the visibility extends for kilometres into the desert, and the quality of light in the final hour before sunset is unlike anything available elsewhere in Jaisalmer.",
      ]}
      experiences={[
        { title: "Golden Hour Sunset", desc: "Arrive 45 minutes before sunset and watch the fort's sandstone walls cycle through every shade of amber, copper, and violet as the sun sets.", tag: "Sunset" },
        { title: "Panoramic Photography", desc: "The most comprehensive view of Jaisalmer available — fort, old city, and desert in a single frame. Bring a wide-angle lens.", tag: "Photography" },
        { title: "Heritage Chhatri Walk", desc: "Explore the individual chhatris and learn the stories of the Brahmin court scholars they memorialize — each has a unique carved frieze.", tag: "Heritage Tour" },
        { title: "Dawn Meditation", desc: "The site is almost entirely empty at sunrise — arrive for the dawn light and the extraordinary silence of the desert morning.", tag: "Wellness" },
      ]}
      travelInfo={{
        bestTime: "45–60 minutes before sunset. October to February for the clearest desert skies.",
        entry: "Free access. No ticket required.",
        distance: "1km northeast of Jaisalmer Fort. 15-minute walk or 5-minute auto-rickshaw from the city centre.",
        photoTip: "Use a telephoto to compress the fort against the sunset sky — the chhatris in the foreground frame the composition beautifully.",
        nearby: "Jaisalmer Fort · Gadisar Lake · Bada Bagh",
        extra: "6:15 PM (winter) · 7:20 PM (summer)",
        extraLabel: "Sunset Time",
      }}
      mapsQuery="Vyas Chhatri Jaisalmer"
    />
  );
}
