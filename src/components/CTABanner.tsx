import Container from "./ui/Container";
import Section from "./ui/Section";
import Button from "./ui/Button";
import { COMPANY_INFO } from "@/lib/constants";

export default function CTABanner() {
  return (
    <Section className="bg-gradient-to-r from-accent-dark to-accent">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Emergency Pest Control?
          </h2>
          <p className="text-xl text-white/90 mb-6">
            We provide 24-hour emergency services. Call us now!
          </p>
          <a href={`tel:${COMPANY_INFO.phone}`}>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-accent hover:bg-gray-100"
            >
              📞 {COMPANY_INFO.phone}
            </Button>
          </a>
        </div>
      </Container>
    </Section>
  );
}
