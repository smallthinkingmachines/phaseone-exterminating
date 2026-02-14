import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import AboutSnippet from "@/components/AboutSnippet";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutSnippet />
      <CTABanner />
      <Section className="bg-zinc-950">
        <Container maxWidth="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get a Free Consultation
            </h2>
            <p className="text-xl text-gray-400">
              Fill out the form below and we&apos;ll get back to you shortly
            </p>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
