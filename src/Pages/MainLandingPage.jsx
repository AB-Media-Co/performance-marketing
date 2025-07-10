import AuditDeliverables from "../Components/AuditDeliverables"
import BonusAddonSection from "../Components/BonusAddonSection"
import BrandProfileQualification from "../Components/BrandProfileQualification"
import ClientTestimonialsSection from "../Components/ClientTestimonialsSection"
import FAQSection from "../Components/FAQSection"
import HeroSection from "../Components/HeroSection"
import ResultsSection from "../Components/ResultsSection"
import ServicesCards from "../Components/ServicesCards"
import WhyUsSection from "../Components/WhyUsSection"

const MainLandingPage = () => {
  return (
    <div>
      <HeroSection />
      {/* <ServicesCards/> */}
      <BrandProfileQualification/>
      <AuditDeliverables/>
      <ResultsSection/>
      <WhyUsSection/>
      <ClientTestimonialsSection/>
      {/* <BonusAddonSection/> */}
      <FAQSection/>
    </div>
  )
}

export default MainLandingPage
