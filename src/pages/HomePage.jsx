import Hero from '@/sections/home/Hero/Hero';
import Process from '@/sections/home/Process/Process';
import Projects from '@/sections/home/Projects/Projects';
import Services from '@/sections/home/Services/Services';
import Testimonials from '@/sections/home/Testimonials/Testimonials';
import Comparison from '@/sections/home/Comparison/Comparison';
import Integrations from '@/sections/home/Integrations/Integrations';
import Pricing from '@/sections/home/Pricing/Pricing';
import Faq from '@/sections/home/Faq/Faq';
import Careers from '@/sections/home/Careers/Careers';
import Strategy from '@/sections/home/Strategy/Strategy';
import Community from '@/sections/home/Community/Community';
import CallToAction from '@/sections/home/CallToAction/CallToAction';

/** Sections render in this order; reorder or remove lines to change the page. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Process />
      <Projects />
      <Services />
      <Testimonials />
      <Comparison />
      <Integrations />
      <Pricing />
      <Faq />
      <Careers />
      <Strategy />
      <Community />
      <CallToAction />
    </>
  );
}
