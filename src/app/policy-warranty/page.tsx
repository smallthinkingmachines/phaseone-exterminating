import InnerPageHero from "@/components/layout/InnerPageHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function PolicyWarrantyPage() {
  return (
    <>
      <InnerPageHero
        title="Policy & Warranty"
        description="Understanding our service guarantee and policies"
      />

      <Section className="bg-zinc-950">
        <Container maxWidth="lg">
          <div className="space-y-12">
            {/* Warranty Section */}
            <div className="bg-zinc-900 rounded-2xl p-8 md:p-12">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">
                  30-Day Service Warranty
                </h2>
                <p className="text-xl text-primary">
                  Your satisfaction is guaranteed
                </p>
              </div>

              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  At Phaseone Exterminating, we stand behind the quality of our
                  work. All of our services come with a comprehensive 30-day
                  warranty to ensure your complete satisfaction.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    How Our Warranty Works:
                  </h3>
                  <ol className="space-y-4 list-decimal list-inside">
                    <li className="pl-2">
                      <span className="font-semibold text-white">
                        Initial Treatment:
                      </span>{" "}
                      Our certified technicians perform a thorough treatment of
                      your property using the most effective methods and
                      products.
                    </li>
                    <li className="pl-2">
                      <span className="font-semibold text-white">
                        Follow-Up Period:
                      </span>{" "}
                      If you experience any pest activity within 30 days of the
                      initial treatment, simply contact us and we&apos;ll
                      schedule a follow-up visit at no additional charge.
                    </li>
                    <li className="pl-2">
                      <span className="font-semibold text-white">
                        Resolution:
                      </span>{" "}
                      We will continue to work on your property until the pest
                      problem is completely resolved, all covered under our
                      warranty period.
                    </li>
                  </ol>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-6">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Important Note:
                  </h4>
                  <p>
                    The warranty applies to the specific pest problem treated
                    during the initial service. New pest infestations or
                    different pest types may require additional services and are
                    not covered under the original warranty.
                  </p>
                </div>
              </div>
            </div>

            {/* Refund Policy Section */}
            <div className="bg-zinc-900 rounded-2xl p-8 md:p-12">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">
                  No Refund Policy
                </h2>
                <p className="text-xl text-gray-400">
                  Understanding our service terms
                </p>
              </div>

              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Due to the nature of pest control services and the immediate
                  deployment of materials and labor, we operate under a no
                  refund policy.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    Why We Have This Policy:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-primary text-xl mt-1">•</span>
                      <span>
                        Services are rendered immediately upon technician
                        arrival and application of treatments
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-primary text-xl mt-1">•</span>
                      <span>
                        Professional-grade products and materials are used
                        during each service
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-primary text-xl mt-1">•</span>
                      <span>
                        Certified technician time and expertise are committed to
                        your service
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-6">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Our Commitment to You:
                  </h4>
                  <p>
                    While we do not offer refunds, we are fully committed to
                    resolving your pest problem. Our 30-day warranty ensures
                    that we will continue to work on your property until the
                    issue is resolved, at no additional cost to you.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-zinc-900 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                Questions About Our Policies?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We believe in transparency and want you to feel completely
                comfortable with our services. If you have any questions about
                our warranty or policies, please don&apos;t hesitate to contact
                us before scheduling your service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:(845) 592-0967"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  📞 Call Us: (845) 592-0967
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  Contact Us Online
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
