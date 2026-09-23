import { FooterSection } from "@/components/landing/footer-section";
import { Navigation } from "@/components/landing/navigation";

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <main>{children}</main>
      <FooterSection />
    </div>
  );
}
