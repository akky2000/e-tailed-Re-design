
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import BusinessAssociate from "./pages/BusinessAssociate";
import CertifiedDeliveryPartner from "./pages/services/CertifiedDeliveryPartner";
import DigitalVisitingCard from "./pages/services/DigitalVisitingCard";
import FinancialConsultant from "./pages/services/FinancialConsultant";
import TravelAgent from "./pages/services/TravelAgent";
import TaxConsultant from "./pages/services/TaxConsultant";
import EducationConsultant from "./pages/services/EducationConsultant";
import ITConsultant from "./pages/services/ITConsultant";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/business-associate" element={<BusinessAssociate />} />
            <Route path="/services/certified-delivery-partner" element={<CertifiedDeliveryPartner />} />
            <Route path="/services/digital-visiting-card" element={<DigitalVisitingCard />} />
            <Route path="/services/financial-consultant" element={<FinancialConsultant />} />
            <Route path="/services/travel-agent" element={<TravelAgent />} />
            <Route path="/services/tax-consultant" element={<TaxConsultant />} />
            <Route path="/services/education-consultant" element={<EducationConsultant />} />
            <Route path="/services/it-consultant" element={<ITConsultant />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
