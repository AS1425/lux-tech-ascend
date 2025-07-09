
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AIDevelopment from "./pages/AIDevelopment";
import AIChatbotDevelopment from "./pages/AIChatbotDevelopment";
import AIAgentDevelopment from "./pages/AIAgentDevelopment";
import ConversationalAI from "./pages/ConversationalAI";
import ConversationDesign from "./pages/ConversationDesign";
import GenerativeAIDevelopment from "./pages/GenerativeAIDevelopment";
import AIPredictiveAnalytics from "./pages/AIPredictiveAnalytics";
import LLMDevelopment from "./pages/LLMDevelopment";
import AIVoiceBots from "./pages/AIVoiceBots";

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
          <Route path="/conversational-ai" element={<ConversationalAI />} />
          <Route path="/conversation-design" element={<ConversationDesign />} />
          <Route path="/generative-ai-development" element={<GenerativeAIDevelopment />} />
          <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalytics />} />
          <Route path="/llm-development" element={<LLMDevelopment />} />
          <Route path="/ai-voice-bots" element={<AIVoiceBots />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
