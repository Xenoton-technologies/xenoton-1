import { Route, Routes } from "react-router-dom"
import { Layout } from "@/components/Layout"
import { ScrollToTop } from "@/components/ScrollToTop"
import { Home } from "@/pages/Home"
import { ServicesPage } from "@/pages/ServicesPage"
import { SolutionsPage } from "@/pages/SolutionsPage"
import { ProjectsPage } from "@/pages/ProjectsPage"
import { AboutPage } from "@/pages/AboutPage"
import { ContactPage } from "@/pages/ContactPage"
import { TermsPage } from "@/pages/TermsPage"
import { PrivacyPage } from "@/pages/PrivacyPage"
import { NotFoundPage } from "@/pages/NotFoundPage"

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
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
  )
}

export default App
