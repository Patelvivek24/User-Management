import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemWeSolve from '@/components/ProblemWeSolve';
import PlatformFeatures from '@/components/PlatformFeatures';
import HowItWorks from '@/components/HowItWorks';
import DashboardHighlights from '@/components/DashboardHighlights';
import KeyBenefits from '@/components/KeyBenefits';
import Pricing from '@/components/Pricing';
import ContactDemo from '@/components/ContactDemo';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProblemWeSolve />
      <PlatformFeatures />
      <HowItWorks />
      <DashboardHighlights />
      <KeyBenefits />
      <Pricing />
      <ContactDemo />
      <Footer />
    </>
  );
}
