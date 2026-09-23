import { CtaSection } from "@/components/landing/cta-section";
import { FaqSection } from "@/components/landing/faq-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { ProductsSection } from "@/components/landing/products-section";
import { SecuritySection } from "@/components/landing/security-section";
import { ServicesSection } from "@/components/landing/services-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ServicesSection />
      <InfrastructureSection />
      <IntegrationsSection />
      <SecuritySection />
      <DevelopersSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
