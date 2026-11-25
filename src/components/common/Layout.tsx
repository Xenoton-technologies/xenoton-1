import { Outlet } from "react-router-dom";
import { useAnimations } from "@/hooks/useAnimations";
import { Preloader } from "@/components/common/Preloader";
import { CustomCursor } from "@/components/common/CustomCursor";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";
import { MobileCtaBar } from "@/components/common/MobileCtaBar";

export function Layout() {
  useAnimations();

  return (
    <div className="pb-20 md:pb-0">
      <Preloader />
      <CustomCursor />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
      <MobileCtaBar />
    </div>
  );
}
