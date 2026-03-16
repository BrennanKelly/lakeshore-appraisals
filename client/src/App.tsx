import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceAreas from "./pages/ServiceAreas";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OrderAppraisal from "./pages/OrderAppraisal";
import KalamazooAppraisal from "./pages/KalamazooAppraisal";
import PortageAppraisal from "./pages/PortageAppraisal";
import PawPawAppraisal from "./pages/PawPawAppraisal";
import MattawanAppraisal from "./pages/MattawanAppraisal";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/service-areas" component={ServiceAreas} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/order-appraisal" component={OrderAppraisal} />
      <Route path="/kalamazoo-home-appraisal" component={KalamazooAppraisal} />
      <Route path="/portage-home-appraisal" component={PortageAppraisal} />
      <Route path="/paw-paw-home-appraisal" component={PawPawAppraisal} />
      <Route path="/mattawan-home-appraisal" component={MattawanAppraisal} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster richColors position="top-right" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
