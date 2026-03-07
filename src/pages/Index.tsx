import { motion } from "framer-motion";
import {
  Zap, Shield, DollarSign, Smartphone, MessageCircle, Headphones,
  Rocket, Store, User, Wrench, Building, TrendingUp, Check, Phone,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WA_LINK =
  "https://wa.me/917029711560?text=Hello%20WebQuick%2C%20I'm%20looking%20to%20create%20a%20professional%20website.%20Please%20guide%20me%20with%20the%20next%20steps.";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const clientTypes = [
  { icon: Rocket, label: "Startups", desc: "Launch with impact" },
  { icon: Store, label: "Local Businesses", desc: "Get found locally" },
  { icon: User, label: "Personal Brands", desc: "Own your presence" },
  { icon: Wrench, label: "Service Providers", desc: "Convert visitors" },
  { icon: Building, label: "Agencies", desc: "Impress clients" },
  { icon: TrendingUp, label: "Small & Medium Businesses", desc: "Scale online" },
];

const whyUs = [
  { icon: Shield, label: "Premium Design That Builds Trust" },
  { icon: Zap, label: "Fast Turnaround" },
  { icon: DollarSign, label: "Affordable Pricing" },
  { icon: Smartphone, label: "Mobile Optimized" },
  { icon: MessageCircle, label: "WhatsApp Integration" },
  { icon: Headphones, label: "Personal Support" },
];

const plans = [
  {
    name: "Starter",
    price: "₹999",
    highlight: false,
    features: [
      "1 Premium Landing Page",
      "Mobile Friendly",
      "WhatsApp Button",
      "Contact Form",
      "7-Day Delivery",
    ],
  },
  {
    name: "Growth",
    price: "₹4,999",
    highlight: true,
    features: [
      "Up to 5 Pages",
      "Gallery Section",
      "Testimonials",
      "Inquiry Forms",
      "Basic SEO Setup",
    ],
  },
  {
    name: "Premium",
    price: "Custom",
    highlight: false,
    features: [
      "Fully Custom Website",
      "Advanced Features",
      "Speed Optimization",
      "Design Customization",
    ],
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-black pt-16">
        {/* Blue glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(221_83%_53%/0.15)_0%,transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="inline-block bg-blue-600/20 text-blue-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-blue-600/30 mb-6">
              Premium Web Design Agency
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Websites That Make Your{" "}
              <span className="text-blue-500">Business Look</span>{" "}
              Premium.
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              We design fast, modern, mobile-friendly websites for businesses across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4 gap-2">
                <MessageCircle size={20} />
                Book Now
              </a>
              <a href="tel:7029711560" className="btn-secondary text-base px-8 py-4 gap-2">
                <Phone size={20} />
                Call Now
              </a>
            </div>

            <p className="text-white/40 text-sm font-medium">
              Starting from ₹999 &nbsp;•&nbsp; Domain & Hosting Included
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Our Clients</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-black text-brand-black leading-tight">
              Built for Growing Businesses
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {clientTypes.map((item, i) => (
              <motion.div
                key={item.label}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="card-premium p-6 md:p-8 group cursor-default"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <item.icon size={22} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-brand-black text-base md:text-lg leading-tight mb-1">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WEBQUICK */}
      <section className="py-20 md:py-28 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Our Edge</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-black text-white leading-tight">
              Why WebQuick?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-14">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.label}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center">
                  <item.icon size={20} className="text-blue-400" />
                </div>
                <span className="text-white font-semibold text-sm md:text-base">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-4">
              Book Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Transparent Pricing</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-black text-brand-black leading-tight">
              Simple Transparent Pricing
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 ${
                  plan.highlight
                    ? "bg-blue-600 text-white shadow-[0_20px_60px_-10px_hsl(221_83%_53%/0.5)] scale-105"
                    : "card-premium"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-black text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className={`text-xl font-black mb-1 ${plan.highlight ? "text-white" : "text-brand-black"}`}>
                    {plan.name}
                  </h3>
                  <span className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-brand-black"}`}>
                    {plan.price}
                  </span>
                </div>
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <Check size={16} className={plan.highlight ? "text-white" : "text-blue-600"} />
                      <span className={plan.highlight ? "text-white/90" : "text-foreground/80"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center rounded-full font-semibold py-3.5 text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.highlight
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "btn-primary"
                  }`}
                >
                  Book Now <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
