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

import JaisalmerFort from "@/pages/places/JaisalmerFort";
import SamSandDunes from "@/pages/places/SamSandDunes";
import GadisarLake from "@/pages/places/GadisarLake";
import KuldharaVillage from "@/pages/places/KuldharaVillage";
import PatwonHaveli from "@/pages/places/PatwonHaveli";

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

      <Route path="/places/jaisalmer-fort" component={JaisalmerFort} />
      <Route path="/places/sam-sand-dunes" component={SamSandDunes} />
      <Route path="/places/gadisar-lake" component={GadisarLake} />
      <Route path="/places/kuldhara-village" component={KuldharaVillage} />
      <Route path="/places/patwon-ki-haveli" component={PatwonHaveli} />

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
