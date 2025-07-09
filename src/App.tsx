
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
import EUAccessibilityAudit from "./pages/EUAccessibilityAudit";
import AIConsulting from "./pages/AIConsulting";
import ChatbotConsulting from "./pages/ChatbotConsulting";
import GenerativeAIConsulting from "./pages/GenerativeAIConsulting";
import MachineLearningConsulting from "./pages/MachineLearningConsulting";
import AISecurityConsulting from "./pages/AISecurityConsulting";
import HealthcareAIConsulting from "./pages/HealthcareAIConsulting";
import CustomSoftwareDevelopment from "./pages/CustomSoftwareDevelopment";
import PoCDevelopment from "./pages/PoCDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import ConnectorDevelopment from "./pages/ConnectorDevelopment";
import BlockchainDevelopment from "./pages/BlockchainDevelopment";
import CRMDevelopment from "./pages/CRMDevelopment";
import DigitalPlatformDevelopment from "./pages/DigitalPlatformDevelopment";
import BusinessProcessAutomation from "./pages/BusinessProcessAutomation";
import ITRecruitingServices from "./pages/ITRecruitingServices";
import ConversationalAnalytics from "./pages/ConversationalAnalytics";

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
          <Route path="/eu-accessibility-audit" element={<EUAccessibilityAudit />} />
          <Route path="/ai-consulting" element={<AIConsulting />} />
          <Route path="/chatbot-consulting" element={<ChatbotConsulting />} />
          <Route path="/generative-ai-consulting" element={<GenerativeAIConsulting />} />
          <Route path="/machine-learning-consulting" element={<MachineLearningConsulting />} />
          <Route path="/ai-security-consulting" element={<AISecurityConsulting />} />
          <Route path="/healthcare-ai-consulting" element={<HealthcareAIConsulting />} />
          <Route path="/custom-software-development" element={<CustomSoftwareDevelopment />} />
          <Route path="/poc-development-services" element={<PoCDevelopment />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/connector-development" element={<ConnectorDevelopment />} />
          <Route path="/blockchain-development" element={<BlockchainDevelopment />} />
          <Route path="/crm-software-development" element={<CRMDevelopment />} />
          <Route path="/digital-platform-development" element={<DigitalPlatformDevelopment />} />
          <Route path="/business-process-automation" element={<BusinessProcessAutomation />} />
          <Route path="/it-recruiting-services" element={<ITRecruitingServices />} />
          <Route path="/conversational-analytics" element={<ConversationalAnalytics />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
