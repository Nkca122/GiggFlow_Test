import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import FeatureCard from "@/components/feature_card";

export default function Home() {
  return (
    <>
      <section>
        <div className="h-screen relative bg-green-950">
          <Image
            src="/assets/hero.png"
            fill
            alt=""
            className="mask-b-from-6 z-0"
          />
          <div className="flex flex-col h-full w-full justify-center items-center gap-2 text-center">
            <h1 className="text-gray-50 text-4xl md:text-5xl font-bold w-full text-wrap">
              Scale Smarter<p className="md:inline-block hidden">.</p>
              <br className="md:hidden flex" /> Hire Differently
              <p className="md:inline-block hidden">.</p>
            </h1>
            <h2 className="text-gray-100 md:text-xl md:font-semibold md:zoom-in-5 animate-pulse">
              Transform your workforce with agile
              <br className="md:hidden flex" />
              <p className="md:inline-block hidden">{"."}</p> cost-effective
              talent from Gigfloww
            </h2>
            <Button className="md:absolute md:bottom-28 md:[left:calc(50%_-_16px)] animate-bounce w-8 h-8 md:z-50 mt-4 md:mt-0">
              <ArrowDown />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-4 px-3 bg-background">
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center md:items-start flex-1 gap-2 px-4">
            <h2 className="text-4xl md:text-5xl font-bold font-serif">
              About Us
            </h2>
            <p className="text-muted-foreground text-sm text-center md:text-start">
              At <b className="inline-block">Gigfloww</b>, we're redefining how
              businesses in the US and UK build high-performing teams. Instead
              of relying on expensive, full-time hires, we connect companies
              with skilled interns and entry-level professionals who are ready
              to deliver real impact—fast. Whether you're a startup or an
              enterprise, our flexible hiring model helps you reduce costs,
              increase productivity, and scale without long-term commitments.
            </p>
            <Button className="p-4 font rounded-none font-semibold text-base mt-4">
              Learn More
            </Button>
          </div>
          <div className="flex-1 flex justify-center items-center bg-black">
            <Image src="/assets/about.png" width={375} height={318} alt="" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-sage-100 dark:bg-sage-900">
        <div className="container mx-auto">
          <div className="flex flex-col w-full items-center justify-center gap-10">
            <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <FeatureCard
                src="/assets/service1.png"
                title="Smart Talent Matching"
                description="We handpick interns and junior professionals that match your exact needs—ensuring a seamless fit for your team and culture."
              />
              <FeatureCard
                src="/assets/service2.png"
                title="Flexible Scaling"
                description="Whether you're growing fast or adapting to change, scale your workforce up or down effortlessly with no strings attached."
              />
              <FeatureCard
                src="/assets/service3.png"
                title="Cost-Effective Hiring"
                description="Save up to 60% on traditional hiring costs by leveraging our curated pool of gig-ready professionals."
              />
              <FeatureCard
                src="/assets/service4.png"
                title="Risk Management"
                description="Stay compliant and secure with our vetted talent pool and structured onboarding process. We minimize hiring risks through background checks, NDA enforcement, and clear performance metrics."
              />
              <FeatureCard
                src="/assets/service5.png"
                title="Faster Onboarding, Immediate Results"
                description="Our streamlined onboarding process means your new hires hit the ground running—delivering value from day one."
              />
              <FeatureCard
                src="/assets/service6.png"
                title="24/7 Customer Support"
                description="Our global support team is always on. Whether you need help with onboarding, replacements, or performance tracking, we're here 24/7 to ensure smooth operations and peace of mind."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#789b77] text-white">
        <div className="absolute inset-0 z-0 md:hidden">
          <Image
            src="/assets/contact.png"
            fill
            alt="World map background"
            className="object-cover"
          />
        </div>

        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-4 z-10">
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold leading-tight">
                  Ready to Reinvent Your Hiring?
                </h3>
                <p className="text-sm mt-1">
                  <span className="font-bold">Join Now</span> and experience a
                  smarter way to build your team with Gigfloww.
                </p>
              </div>

              <div className="w-full relative mt-4">
                <Label
                  className="mx-2 text-xs text-white/80 bg-[#789b77] px-2 py-1 absolute -top-2 left-2"
                  htmlFor="message"
                >
                  Your Message
                </Label>
                <Textarea
                  className="resize-none bg-[#789b77]/80 border border-white/30 rounded-md w-full"
                  rows={6}
                  id="message"
                  name="message"
                />
              </div>

              <Button className="bg-green-950 hover:bg-green-900 text-white rounded-full px-6 py-2 mt-2 self-start">
                Send Message
              </Button>
            </div>
            <div className="flex-1 hidden md:block relative">
              <div className="aspect-w-16 aspect-h-10 w-full h-full">
                <Image
                  src="/assets/contact.png"
                  fill
                  alt="World map"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
