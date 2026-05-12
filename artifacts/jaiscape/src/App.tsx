import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import Explore from "@/pages/Explore";
import HiddenPlaces from "@/pages/HiddenPlaces";
import DesertCamps from "@/pages/DesertCamps";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Partner from "@/pages/Partner";

import JaisalmerFort from "@/pages/places/JaisalmerFort";
import PatwonHaveli from "@/pages/places/PatwonHaveli";
import GadisarLake from "@/pages/places/GadisarLake";
import NathmalHaveli from "@/pages/places/NathmalHaveli";
import SalimSinghHaveli from "@/pages/places/SalimSinghHaveli";
import JainTemples from "@/pages/places/JainTemples";
import MandirPalace from "@/pages/places/MandirPalace";
import TaziaTower from "@/pages/places/TaziaTower";
import VyasChhatri from "@/pages/places/VyasChhatri";
import BadaBagh from "@/pages/places/BadaBagh";
import WarMuseum from "@/pages/places/WarMuseum";
import DesertCultureCentre from "@/pages/places/DesertCultureCentre";
import TharHeritageMuseum from "@/pages/places/TharHeritageMuseum";
import GovernmentMuseum from "@/pages/places/GovernmentMuseum";
import AmarSagarLake from "@/pages/places/AmarSagarLake";
import SamSandDunes from "@/pages/places/SamSandDunes";
import KuldharaVillage from "@/pages/places/KuldharaVillage";
import KhabaFort from "@/pages/places/KhabaFort";
import DesertNationalPark from "@/pages/places/DesertNationalPark";
import AkalFossilPark from "@/pages/places/AkalFossilPark";
import KhuriSandDunes from "@/pages/places/KhuriSandDunes";
import TanotTemple from "@/pages/places/TanotTemple";
import LongewalaMemorial from "@/pages/places/LongewalaMemorial";
import Lodhurva from "@/pages/places/Lodhurva";
import RamdevraTemple from "@/pages/places/RamdevraTemple";
import PokhranFort from "@/pages/places/PokhranFort";
import DussehraChowk from "@/pages/places/DussehraChowk";
import ManakChowk from "@/pages/places/ManakChowk";
import WindPark from "@/pages/places/WindPark";
import MoolSagar from "@/pages/places/MoolSagar";
import PromoVideo from "@/pages/PromoVideo";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/explore" component={Explore} />
      <Route path="/hidden-places" component={HiddenPlaces} />
      <Route path="/desert-camps" component={DesertCamps} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/partner" component={Partner} />

      <Route path="/places/jaisalmer-fort" component={JaisalmerFort} />
      <Route path="/places/patwon-ki-haveli" component={PatwonHaveli} />
      <Route path="/places/gadisar-lake" component={GadisarLake} />
      <Route path="/places/nathmal-ki-haveli" component={NathmalHaveli} />
      <Route path="/places/salim-singh-ki-haveli" component={SalimSinghHaveli} />
      <Route path="/places/jain-temples" component={JainTemples} />
      <Route path="/places/mandir-palace" component={MandirPalace} />
      <Route path="/places/tazia-tower" component={TaziaTower} />
      <Route path="/places/vyas-chhatri" component={VyasChhatri} />
      <Route path="/places/bada-bagh" component={BadaBagh} />
      <Route path="/places/war-museum" component={WarMuseum} />
      <Route path="/places/desert-culture-centre" component={DesertCultureCentre} />
      <Route path="/places/thar-heritage-museum" component={TharHeritageMuseum} />
      <Route path="/places/government-museum" component={GovernmentMuseum} />
      <Route path="/places/amar-sagar-lake" component={AmarSagarLake} />
      <Route path="/places/sam-sand-dunes" component={SamSandDunes} />
      <Route path="/places/kuldhara-village" component={KuldharaVillage} />
      <Route path="/places/khaba-fort" component={KhabaFort} />
      <Route path="/places/desert-national-park" component={DesertNationalPark} />
      <Route path="/places/akal-fossil-park" component={AkalFossilPark} />
      <Route path="/places/khuri-sand-dunes" component={KhuriSandDunes} />
      <Route path="/places/tanot-mata-temple" component={TanotTemple} />
      <Route path="/places/longewala-war-memorial" component={LongewalaMemorial} />
      <Route path="/places/lodhurva" component={Lodhurva} />
      <Route path="/places/ramdevra-temple" component={RamdevraTemple} />
      <Route path="/places/pokhran-fort" component={PokhranFort} />
      <Route path="/places/dussehra-chowk" component={DussehraChowk} />
      <Route path="/places/manak-chowk" component={ManakChowk} />
      <Route path="/places/wind-park" component={WindPark} />
      <Route path="/places/mool-sagar" component={MoolSagar} />

      <Route path="/promo" component={PromoVideo} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
