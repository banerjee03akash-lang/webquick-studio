import { motion } from "framer-motion";
import {
  MessageSquare, DollarSign, Zap, Target, HeartHandshake,
  MessageCircle, Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WA_LINK =
  "https://wa.me/917029711560?text=Hello%20WebQuick%2C%20I'm%20looking%20to%20create%20a%20professional%20website.%20Please%20guide%20me%20with%20the%20next%20steps.";

const fadeUpProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6 },
};

const trustPoints = [
  { icon: MessageSquare, label: "Professional Communication" },
  { icon: DollarSign, label: "Transparent Pricing" },
  { icon: Zap, label: "Fast Delivery" },
  { icon: Target, label: "Results-Oriented Approach" },
  { icon: HeartHandshake, label: "Long-Term Support" },
];

export default function About() {
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
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-5">
              About <span className="text-blue-500">WebQuick</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Avatar card */}
            <motion.div {...fadeUpProps} className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center shadow-[0_30px_80px_-15px_rgba(37,99,235,0.4)]">
                  <span className="text-8xl font-black text-white/10 select-none">A</span>
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                    <span className="text-white text-2xl font-black block">Akash</span>
                    <span className="text-blue-300 text-sm font-medium">Founder, WebQuick</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 rounded-2xl px-4 py-3 shadow-xl">
                  <span className="text-white text-sm font-bold">✦ Premium Agency</span>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Meet the Founder</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-black text-brand-black leading-tight mb-6">
                Hi, I'm <span className="text-blue-600">Akash</span>
              </h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  I started WebQuick with a simple mission — to help businesses across India build
                  premium-looking websites without paying expensive agency fees.
                </p>
                <p>
                  Over time, I have worked with many clients from different industries, helping them
                  establish a strong and professional online presence. My focus is clean design,
                  fast delivery, and websites that generate real inquiries.
                </p>
                <p className="font-semibold text-brand-black">
                  WebQuick is built on trust, transparency, and quality service.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 md:py-24 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div {...fadeUpProps}>
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Where We're Headed</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-black text-white leading-tight mb-6">
                Our Vision
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                To empower growing businesses with powerful online presence at affordable pricing —
                making premium web design accessible to every entrepreneur and business owner in India.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: "100+", label: "Happy Clients" },
                { num: "₹999", label: "Starting Price" },
                { num: "7 Days", label: "Avg. Delivery" },
                { num: "24/7", label: "Support" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="text-3xl font-black text-blue-400 mb-1">{stat.num}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Clients Trust */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUpProps} className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Our Values</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-black text-brand-black leading-tight">
              Why Clients Trust Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {trustPoints.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-premium p-7 flex items-center gap-5 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <item.icon size={22} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-bold text-brand-black text-base">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 section-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUpProps}>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
              Let's Build Something{" "}
              <span className="text-blue-500">Great Together.</span>
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Reach out and let's create a website that truly represents your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4 gap-2">
                <MessageCircle size={20} />
                Book Now
              </a>
              <a href="tel:7029711560" className="btn-secondary text-base px-8 py-4 gap-2">
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
