import InnerPageHero from "@/components/layout/InnerPageHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import { COMPANY_INFO, SOCIAL_LINKS } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      <InnerPageHero
        title="Contact Us"
        description="Get in touch for a free consultation"
      />

      <Section className="bg-zinc-950">
        <Container maxWidth="2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                  Have questions or need immediate assistance? Reach out to us
                  and we&apos;ll be happy to help. We offer 24-hour emergency
                  services for urgent pest control needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Phone
                    </h3>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-primary hover:text-primary-light transition-colors text-lg"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <p className="text-gray-400 text-sm mt-1">
                      Available 24/7 for emergencies
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-primary hover:text-primary-light transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Service Area
                    </h3>
                    <p className="text-gray-400">
                      {COMPANY_INFO.serviceAreas}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-400">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-400">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-400">Sunday: Emergency calls only</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-2xl"
                    aria-label="Facebook"
                  >
                    📘
                  </a>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-2xl"
                    aria-label="Instagram"
                  >
                    📷
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
