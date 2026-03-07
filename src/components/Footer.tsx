import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/917029711560?text=Hello%20Weboo%2C%20I'm%20looking%20to%20create%20a%20professional%20website.%20Please%20guide%20me%20with%20the%20next%20steps.";

export default function Footer() {
  return (
    <footer className="section-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-3">
            <span className="text-2xl font-black tracking-tight">
              Web<span className="text-blue-500">oo</span>
            </span>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium Websites Delivered Quick.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">Navigation</p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "About", to: "/about" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">Contact</p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:7029711560"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Phone size={16} className="text-blue-500" />
                7029711560
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <MessageCircle size={16} className="text-blue-500" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center">
            © 2026 Weboo. All Rights Reserved.
          </p>
          <p className="text-white/30 text-xs text-center">
            Premium Websites Delivered Quick.
          </p>
        </div>
      </div>
    </footer>
  );
}
