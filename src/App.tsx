
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
import SoftwareProductDevelopment from "./pages/SoftwareProductDevelopment";
import PoCDevelopment from "./pages/PoCDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import ConnectorDevelopment from "./pages/ConnectorDevelopment";
import BlockchainDevelopment from "./pages/BlockchainDevelopment";
import CRMDevelopment from "./pages/CRMDevelopment";
import DigitalPlatformDevelopment from "./pages/DigitalPlatformDevelopment";
import BusinessProcessAutomation from "./pages/BusinessProcessAutomation";
import ITRecruitingServices from "./pages/ITRecruitingServices";
import ConversationalAnalytics from "./pages/ConversationalAnalytics";
import AICopilotDevelopment from "./pages/AICopilotDevelopment";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import MissionVision from "./pages/MissionVision";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import AIGuide from "./pages/AIGuide";
import CaseStudies from "./pages/CaseStudies";
import ClientSuccessStories from "./pages/ClientSuccessStories";
import Portfolio from "./pages/Portfolio";
import Webinar from "./pages/Webinar";
import Whitepapers from "./pages/Whitepapers";
import ITConsultingServices from "./pages/ITConsultingServices";
import MVPAppDevelopment from "./pages/MVPAppDevelopment";
import CustomAPIDevelopment from "./pages/CustomAPIDevelopment";
import ProductLifecycleManagement from "./pages/ProductLifecycleManagement";
import SoftwareDeploymentServices from "./pages/SoftwareDeploymentServices";
import SecurityComplianceSoftwareDevelopment from "./pages/SecurityComplianceSoftwareDevelopment";
import WindowsAppDevelopment from "./pages/WindowsAppDevelopment";
import WebAppDevelopment from "./pages/WebAppDevelopment";
import CrossPlatformDevelopment from "./pages/CrossPlatformDevelopment";
import ProgressiveWebApps from "./pages/ProgressiveWebApps";
import UIUXForApps from "./pages/UIUXForApps";
import OutsourcingServices from "./pages/OutsourcingServices";


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
          <Route path="/software-product-development" element={<SoftwareProductDevelopment />} />
          <Route path="/poc-development-services" element={<PoCDevelopment />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/connector-development" element={<ConnectorDevelopment />} />
          <Route path="/blockchain-development" element={<BlockchainDevelopment />} />
          <Route path="/crm-software-development" element={<CRMDevelopment />} />
          <Route path="/digital-platform-development" element={<DigitalPlatformDevelopment />} />
          <Route path="/business-process-automation" element={<BusinessProcessAutomation />} />
          <Route path="/it-recruiting-services" element={<ITRecruitingServices />} />
          <Route path="/conversational-analytics" element={<ConversationalAnalytics />} />
          <Route path="/ai-copilot-development" element={<AICopilotDevelopment />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
        <Route path="/ai-guide" element={<AIGuide />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/client-success-stories" element={<ClientSuccessStories />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/webinar" element={<Webinar />} />
        <Route path="/whitepapers" element={<Whitepapers />} />
        <Route path="/it-consulting-services" element={<ITConsultingServices />} />
        <Route path="/mvp-app-development" element={<MVPAppDevelopment />} />
        <Route path="/custom-api-development" element={<CustomAPIDevelopment />} />
        <Route path="/product-lifecycle-management" element={<ProductLifecycleManagement />} />
        <Route path="/software-deployment-services" element={<SoftwareDeploymentServices />} />
        <Route path="/security-compliance-software-development" element={<SecurityComplianceSoftwareDevelopment />} />
        <Route path="/windows-app-development" element={<WindowsAppDevelopment />} />
        <Route path="/web-app-development" element={<WebAppDevelopment />} />
        <Route path="/cross-platform-development" element={<CrossPlatformDevelopment />} />
        <Route path="/progressive-web-apps" element={<ProgressiveWebApps />} />
        <Route path="/ui-ux-for-apps" element={<UIUXForApps />} />
        <Route path="/outsourcing-services" element={<OutsourcingServices />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
