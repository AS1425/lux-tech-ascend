
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AIDevelopment from "./pages/AIDevelopment";
import AIChatbotDevelopment from "./pages/AIChatbotDevelopment";
import AIAgentDevelopment from "./pages/AIAgentDevelopment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-development" element={<AIDevelopment />} />
          <Route path="/ai-chatbot-development" element={<AIChatbotDevelopment />} />
          <Route path="/ai-agent-development" element={<AIAgentDevelopment />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
