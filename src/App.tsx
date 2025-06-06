
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Showcase from "./pages/Showcase";
import Talents from "./pages/Talents";
import Scope from "./pages/Scope";
import Pricing from "./pages/Pricing";
import ApplyTalent from "./pages/ApplyTalent";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import DataPreferences from "./pages/DataPreferences";
import Imprint from "./pages/Imprint";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/talents" element={<Talents />} />
          <Route path="/scope" element={<Scope />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/apply-talent" element={<ApplyTalent />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/data-preferences" element={<DataPreferences />} />
          <Route path="/imprint" element={<Imprint />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
