
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Reading from "./pages/Reading";
import Games from "./pages/Games";
import Profile from "./pages/Profile";
import DyslexiaInfo from "./pages/DyslexiaInfo";
import DyslexiaTest from "./pages/DyslexiaTest";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/games" element={<Games />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dyslexia" element={<DyslexiaInfo />} />
          <Route path="/test" element={<DyslexiaTest />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Navigation />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
