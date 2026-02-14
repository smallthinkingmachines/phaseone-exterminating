import ServiceCard from "./ServiceCard";
import Container from "./ui/Container";
import Section from "./ui/Section";
import { SERVICES } from "@/lib/constants";

export default function ServicesOverview() {
  return (
    <Section className="bg-zinc-950">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive pest control solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
