import { usePageTitle } from '@/hooks/usePageTitle';
import Hero from '@/sections/home/Hero/Hero';
import TrustedBy from '@/sections/home/TrustedBy/TrustedBy';
import Process from '@/sections/home/Process/Process';
import Projects from '@/sections/home/Projects/Projects';
import Services from '@/sections/home/Services/Services';
import BeyondDevelopment from '@/sections/home/BeyondDevelopment/BeyondDevelopment';
import Approach from '@/sections/home/Approach/Approach';
import Integrations from '@/sections/home/Integrations/Integrations';
import Products from '@/sections/home/Products/Products';
import Testimonials from '@/sections/home/Testimonials/Testimonials';
import Faq from '@/sections/home/Faq/Faq';
import CallToAction from '@/sections/home/CallToAction/CallToAction';

/** Sections render in this order; reorder or remove lines to change the page. */
export default function HomePage() {
  usePageTitle(null);

  return (
    <>
      <Hero />
      <TrustedBy />
      <Process />
      <Projects />
      <Services />
      <BeyondDevelopment />
      <Approach />
      <Integrations />
      <Products />
      {/* Hidden until authentic client testimonials are available. */}
      <Testimonials />
      <Faq />
      <CallToAction />
    </>
  );
}
