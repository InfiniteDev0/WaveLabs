import { MotionProvider } from "@/components/motion-provider";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";
import { SiteFooter } from "@/components/site-footer";
import MyWork from "@/components/mywork";
import ContactDialog from "@/components/contact-dialog";

export default function Home() {
  return (
    <MotionProvider>
      <div className="bg-gradient-to-b from-blue-400 via-cyan-400 to-white">
        <SiteNav />
        <div className="pt-15">
          <Hero />
        </div>
      </div>
      <main className="">
        <Manifesto />
        <Services />
        <Projects />
        <MyWork/>
        <Testimonials />
        <ContactDialog/>
      </main>
      <SiteFooter />
    </MotionProvider>
  );
}
