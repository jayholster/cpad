import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Syllabus from "./pages/Syllabus";
import Week1 from "./pages/Week1";
import Week2 from "./pages/Week2";
import Week3 from "./pages/Week3";
import Week4 from "./pages/Week4";
import Week5 from "./pages/Week5";
import Week6 from "./pages/Week6";
import Week7 from "./pages/Week7";
import Week8 from "./pages/Week8";
import Week9 from "./pages/Week9";
import Week10 from "./pages/Week10";
import Week11 from "./pages/Week11";
import Week12 from "./pages/Week12";
import Week13 from "./pages/Week13";
import Week14 from "./pages/Week14";
import Week15 from "./pages/Week15";
import NotFound from "./pages/NotFound";

import { useScrollToTop } from "./hooks/useScrollToTop";

const queryClient = new QueryClient();

const AppContent = () => {
  useScrollToTop();
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/syllabus" element={<Syllabus />} />
      <Route path="/week1" element={<Week1 />} />
      <Route path="/week2" element={<Week2 />} />
      <Route path="/week3" element={<Week3 />} />
      <Route path="/week4" element={<Week4 />} />
      <Route path="/week5" element={<Week5 />} />
      <Route path="/week6" element={<Week6 />} />
      <Route path="/week7" element={<Week7 />} />
      <Route path="/week8" element={<Week8 />} />
      <Route path="/week9" element={<Week9 />} />
      <Route path="/week10" element={<Week10 />} />
      <Route path="/week11" element={<Week11 />} />
      <Route path="/week12" element={<Week12 />} />
      <Route path="/week13" element={<Week13 />} />
      <Route path="/week14" element={<Week14 />} />
      <Route path="/week15" element={<Week15 />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
