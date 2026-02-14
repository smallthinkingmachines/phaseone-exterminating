import InnerPageHero from "@/components/layout/InnerPageHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { COMPANY_INFO, CERTIFICATIONS } from "@/lib/constants";
import Image from "next/image";

export default function AboutPage() {
  const yearsInBusiness =
    new Date().getFullYear() - COMPANY_INFO.established;

  return (
    <>
      <InnerPageHero
        title="About Us"
        description={`Professional pest control services since ${COMPANY_INFO.established}`}
        backgroundImage="/images/about-stock.jpeg"
      />

      <Section className="bg-zinc-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {yearsInBusiness}+ Years of Excellence
              </h2>
              <div className="space-y-4 text-lg text-gray-400">
                <p>
                  Founded in {COMPANY_INFO.established}, Phaseone Exterminating
                  has been serving the {COMPANY_INFO.serviceAreas} with
                  professional pest control solutions. Our commitment to
                  quality, safety, and customer satisfaction has made us a
                  trusted name in the industry.
                </p>
                <p>
                  We understand that pest problems can be stressful and
                  disruptive. That&apos;s why we offer comprehensive services
                  designed to eliminate pests quickly and effectively while
                  ensuring the safety of your family, pets, and the
                  environment.
                </p>
                <p>
                  Our team of licensed and certified technicians uses the
                  latest techniques and eco-friendly products to deliver
                  results you can count on. From residential homes to
                  commercial properties, we have the expertise to handle any
                  pest challenge.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/images/about-1.jpeg"
                alt="Phaseone Exterminating Team"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 md:p-12 mb-20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Our Certifications & Credentials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CERTIFICATIONS.map((cert, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-zinc-950 rounded-xl"
                >
                  <h4 className="text-xl font-bold text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-gray-400">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/about-doc.jpeg"
                alt="Certifications and Documentation"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-white mb-4">
                Why Choose Phaseone Exterminating?
              </h3>
              <ul className="space-y-4">
                {[
                  "Licensed and insured professionals",
                  "Green Shield Certified for eco-friendly practices",
                  "24-hour emergency services available",
                  "Customized treatment plans for every situation",
                  "Proven track record of success",
                  "Competitive pricing with no hidden fees",
                  "30-day warranty on all services",
                  "Serving NYC Metro & Tri-State Area",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-primary text-2xl">✓</span>
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
