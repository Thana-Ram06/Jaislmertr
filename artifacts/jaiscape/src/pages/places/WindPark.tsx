import { PlacePage } from "@/components/PlacePage";
import heroImg from "@/assets/images/about-hero.png";
import img2 from "@/assets/images/hero-dunes.png";
import img3 from "@/assets/images/explore-3.png";
import img4 from "@/assets/images/reel-rider.png";
import img5 from "@/assets/images/grid-dunes.png";

export default function WindPark() {
  return (
    <PlacePage
      name="Wind Park"
      location="Amarsagar Road, Jaisalmer"
      heroImg={heroImg}
      gallery={[img2, heroImg, img3, img4, img5]}
      about={[
        "The Jaisalmer Wind Park is one of the largest wind energy installations in Asia — a vast field of white turbines rising from the flat desert plain outside Jaisalmer that has become, unexpectedly, one of the region's most visually striking and thought-provoking destinations. Established in the 1990s when Jaisalmer was identified as one of India's windiest locations, the park now spans thousands of hectares and hosts hundreds of turbines from multiple energy companies.",
        "What makes the Wind Park compelling is the surreal visual contrast it creates: enormous white turbine towers rising from the ancient golden desert, blades turning silently above camels and desert scrub. The scale of the installation — some turbines stand 100 metres tall — creates a landscape unlike anything else in Rajasthan, and the juxtaposition of clean energy technology with the timeless desert environment has a particular visual and conceptual power.",
        "The park is best experienced at dusk, when the turbines are silhouetted against the sunset sky and the blades catch the last light. Photographers find the location extraordinary — the geometric rhythm of dozens of turbines against a vast sky creates compositions that feel both modern and mythological. The drive through the park on the Amarsagar Road also provides access to the Sand Dunes and Amar Sagar Lake, making it a natural part of any western day circuit.",
      ]}
      experiences={[
        { title: "Sunset Turbine Photography", desc: "Photograph the turbine silhouettes against the dusk sky — the rhythmic geometry and scale create images that feel simultaneously industrial and transcendent.", tag: "Photography" },
        { title: "Clean Energy Landscape Drive", desc: "Drive or cycle through the wind farm on the Amarsagar Road — the experience of moving through hundreds of giant turbines is unlike anything else in India.", tag: "Scenic Drive" },
        { title: "Camel & Turbine Safari", desc: "A surreal juxtaposition: a camel ride through the wind farm, ancient transport moving among the most modern technology in the desert.", tag: "Adventure" },
        { title: "Sustainability Story", desc: "Learn how Jaisalmer — once a remote desert outpost — became a global leader in wind energy generation and what it means for the region's future.", tag: "Learning" },
      ]}
      travelInfo={{
        bestTime: "Sunset (1 hour before) for the most dramatic photography. Early morning for cool temperatures.",
        entry: "Free access on the public road. No ticket required.",
        distance: "15km from Jaisalmer on Amarsagar Road. En route to Amar Sagar Lake and Sam Sand Dunes.",
        photoTip: "Use a wide-angle lens at dusk — include desert foreground and fill the frame with turbines receding to the horizon. Silhouette mode is most powerful.",
        nearby: "Amar Sagar Lake · Lodhurva · Sam Sand Dunes",
        extra: "Best experienced as part of a western day trip: Lodhurva → Amar Sagar → Wind Park → Sam Dunes.",
        extraLabel: "Suggested Circuit",
      }}
      mapsQuery="Wind Park Jaisalmer"
    />
  );
}
