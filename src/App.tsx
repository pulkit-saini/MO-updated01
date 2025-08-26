import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";
import CloudStrategy from "./pages/CloudStrategy";
import DataMigration from "./pages/DataMigration";
import ManagedServices from "./pages/ManagedServices";
import ITServices from "./pages/ITServices";
import StaffingSolutions from "./pages/StaffingSolutions";
import HMIS from "./pages/HMIS";
import WebDevelopment from "./pages/WebDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import OpenSource from "./pages/OpenSource";
import CustomSoftware from "./pages/CustomSoftware";
import Ecommerce from "./pages/Ecommerce";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
 

import OffshoreStaffing from "./pages/staffing/OffshoreStaffing";
import OnPremiseStaffing from "./pages/staffing/OnPremiseStaffing";
import ContractSolutions from "./pages/staffing/ContractSolutions";
import PayrollOutsourcing from "./pages/staffing/PayrollOutsourcing";
import ManagementConsulting from "./pages/staffing/ManagementConsulting";
import StaffingSolutionsDetail from "./pages/staffing/StaffingSolutionsDetail";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminJobs from "./pages/admin/AdminJobs";
import AdminApplicants from "./pages/admin/AdminApplicants";
import AdminSettings from "./pages/admin/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Index />} />
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/cloud-strategy" element={<CloudStrategy />} />
          <Route path="/data-migration" element={<DataMigration />} />
          <Route path="/managed-services" element={<ManagedServices />} />
          <Route path="/it-services" element={<ITServices />} />

          {/* Staffing Hub & Services */}
          <Route path="/staffing" element={<StaffingSolutions />} />
          
          <Route path="/staffing/offshore-staffing" element={<OffshoreStaffing />} />
          <Route path="/staffing/on-premise-staffing" element={<OnPremiseStaffing />} />
          <Route path="/staffing/contract-solutions" element={<ContractSolutions />} />
          <Route path="/staffing/payroll-outsourcing" element={<PayrollOutsourcing />} />
          <Route path="/staffing/management-consulting" element={<ManagementConsulting />} />
          <Route path="/staffing/staffing-solutions" element={<StaffingSolutionsDetail />} />
          <Route path="/staffing-solutions" element={<Navigate to="/staffing" replace />} />

          <Route path="/hmis" element={<HMIS />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/open-source" element={<OpenSource />} />
          <Route path="/custom-software" element={<CustomSoftware />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/career" element={<Navigate to="/careers" replace />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/jobs" element={<AdminJobs />} />
          <Route path="/admin/applicants" element={<AdminApplicants />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
