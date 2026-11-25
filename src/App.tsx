import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { Layout } from "@/components/common/Layout";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { SolutionsPage } from "@/pages/SolutionsPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { PrivacyPage, TermsPage } from "@/pages/LegalPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
