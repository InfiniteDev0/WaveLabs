import { MotionProvider } from "@/components/motion-provider";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <MotionProvider>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <Manifesto />
        <Services />
        <Projects />
        <Testimonials />
      </main>
      <SiteFooter />
    </MotionProvider>
  );
}
