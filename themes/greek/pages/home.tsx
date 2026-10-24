import { ClosingSection, FaqSection, InPractice, MethodSection, PartnersBand, ProductFrieze, ServiceSummary } from "../components/sections";
import { Temple } from "../components/temple";

export function GreekHome() {
  return <>
    <Temple />
    <PartnersBand />
    <ProductFrieze />
    <ServiceSummary />
    <InPractice />
    <MethodSection />
    <FaqSection />
    <ClosingSection />
  </>;
}
