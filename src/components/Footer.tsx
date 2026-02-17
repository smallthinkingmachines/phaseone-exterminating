import Link from "next/link";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { COMPANY_INFO, SOCIAL_LINKS, NAV_ITEMS } from "@/lib/constants";

function YelpIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.16 12.56l-4.22-1.37c-.81-.26-1.57.49-1.31 1.3l.02.06 1.38 4.22c.26.81 1.35.99 1.85.29l2.84-4.2c.51-.74.07-1.08-.56-1.3zm-7.88 5.1l-.06.02-4.22 1.38c-.81.26-.99 1.35-.29 1.85l4.2 2.84c.74.51 1.08.07 1.3-.56l1.37-4.22c.26-.81-.49-1.57-1.3-1.31zm-5.94-5.62l-4.22 1.38c-.81.26-.99 1.35-.29 1.85l4.2 2.84c.74.51 1.08.07 1.3-.56l1.37-4.22c.26-.81-.49-1.57-1.3-1.31l-.06.02zM12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-.22 15.37l-.02.07-1.37 4.22c-.26.81.49 1.57 1.3 1.31l.07-.02 4.22-1.37c.81-.26.99-1.35.29-1.85l-4.2-2.84c-.35-.24-.78-.2-1.09.02-.07.06-.13.12-.2.2v.26zm-1.54-9.74l-.07.02c-.81.26-.99 1.35-.29 1.85l2.84 4.2c.51.74 1.57.74 2.08 0l2.84-4.2c.51-.74.07-1.08-.56-1.3l-4.22-1.38c-.81-.26-1.57.49-1.31 1.3l-.02.07-.02-.07c-.03-.12-.07-.23-.12-.33-.32-.67-1.07-.97-1.73-.69l-.06.03z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-gray-400 mb-2">
              Professional pest control services since {COMPANY_INFO.established}
            </p>
            <p className="text-gray-400">{COMPANY_INFO.serviceAreas}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="flex space-x-3 pt-4">
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary hover:text-white text-gray-400 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary hover:text-white text-gray-400 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={SOCIAL_LINKS.yelp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary hover:text-white text-gray-400 transition-all"
                  aria-label="Yelp"
                >
                  <YelpIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
