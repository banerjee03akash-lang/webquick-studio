import { motion } from "framer-motion";
import { Palette, Globe, RefreshCw, LifeBuoy, ArrowRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WA_LINK =
  "https://wa.me/917029711560?text=Hello%20Weboo%2C%20I'm%20looking%20to%20create%20a%20professional%20website.%20Please%20guide%20me%20with%20the%20next%20steps.";

const fadeUpProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6 },
};

const services = [
  {
    icon: Palette,
    title: "Website Design & Development",
    desc: "We create clean, high-converting websites tailored to your business goals. Every pixel is crafted to build trust and drive real results.",
    tags: ["Landing Pages", "Business Sites", "Portfolio", "E-Commerce"],
  },
  {
    icon: Globe,
    title: "Domain & Hosting Setup",
    desc: "We assist in setting up domain and hosting so your website runs smoothly and securely — no technical headaches for you.",
    tags: ["Domain Registration", "SSL Certificate", "Hosting Setup", "DNS Config"],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Transform outdated websites into modern premium platforms that attract customers and reflect your brand's true value.",
    tags: ["UI Overhaul", "Speed Boost", "Mobile Upgrade", "Brand Refresh"],
  },
  {
    icon: LifeBuoy,
    title: "Support & Guidance",
    desc: "Ongoing support to keep your website functional and effective. We're always just a WhatsApp message away.",
    tags: ["Bug Fixes", "Content Updates", "Performance", "Consultation"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 section-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(221_83%_53%/0.15)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-blue-600/20 text-blue-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-blue-600/30 mb-6">
              What We Offer
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-5">
              Our <span className="text-blue-500">Services</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
              Complete website solutions for modern businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-premium p-8 md:p-10 group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <svc.icon size={26} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-brand-black mb-3">{svc.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">{svc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Strip */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUpProps} className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-brand-black">Our Simple Process</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", label: "Discuss", desc: "Tell us your vision" },
              { step: "02", label: "Design", desc: "We craft the layout" },
              { step: "03", label: "Develop", desc: "Build & test everything" },
              { step: "04", label: "Deliver", desc: "Go live fast" },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-black text-brand-black leading-none mb-2">{s.step}</div>
                <h4 className="font-black text-brand-black text-lg mb-1">{s.label}</h4>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 section-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUpProps}>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
              Ready to Build Your <span className="text-blue-500">Website?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Let's turn your idea into a premium website that works.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-4 gap-2"
            >
              <MessageCircle size={20} />
              Start My Project
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
