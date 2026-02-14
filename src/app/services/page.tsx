import InnerPageHero from "@/components/layout/InnerPageHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <InnerPageHero
        title="Our Services"
        description="Comprehensive pest control solutions for residential and commercial properties"
        backgroundImage="/images/services-hero.jpeg"
      />

      <Section className="bg-zinc-950">
        <Container>
          <div className="space-y-20">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="text-primary text-xl mt-1">✓</span>
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-400 mb-8">
              Contact us today for a free consultation
            </p>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
