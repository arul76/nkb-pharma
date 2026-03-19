import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Bone,
  Brain,
  CheckCircle2,
  FlaskConical,
  Globe,
  Heart,
  Leaf,
  Shield,
  Wind,
} from "lucide-react";
import { motion } from "motion/react";

const products = [
  {
    icon: Heart,
    name: "CardioMax 10mg",
    category: "Cardiovascular",
    desc: "Advanced cardiovascular health tablet supporting healthy heart function and blood pressure management.",
  },
  {
    icon: Brain,
    name: "NeuroCare Plus",
    category: "Neurology",
    desc: "Neurological support capsule formulated to enhance cognitive function and nervous system health.",
  },
  {
    icon: Shield,
    name: "ImmunShield",
    category: "Immunology",
    desc: "Powerful immunity booster syrup blending natural extracts and vitamins for robust immune defense.",
  },
  {
    icon: Bone,
    name: "OsteoFlex",
    category: "Orthopedics",
    desc: "Bone and joint health supplement combining calcium, vitamin D3, and collagen for lasting mobility.",
  },
  {
    icon: Wind,
    name: "RespiClear",
    category: "Respiratory",
    desc: "Respiratory health solution providing relief and support for clear airways and optimal lung function.",
  },
];

const commitments = [
  {
    icon: FlaskConical,
    title: "Research & Development",
    desc: "State-of-the-art R&D labs driving continuous innovation in evidence-based pharmaceutical solutions.",
  },
  {
    icon: Award,
    title: "Quality & Safety",
    desc: "ISO-certified manufacturing with rigorous clinical testing to ensure every product meets global safety standards.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Committed to eco-friendly production processes and responsible sourcing for a healthier planet.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/nkb-hero-lab.dim_1600x900.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, oklch(22% 0.055 220 / 0.95) 0%, oklch(22% 0.055 220 / 0.85) 45%, oklch(22% 0.055 220 / 0.3) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-teal text-sm font-semibold tracking-widest uppercase mb-4 bg-teal/20 px-3 py-1 rounded-full">
              Advancing Human Health
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6">
              Precision Medicine
              <br />
              <span className="text-teal">For a Healthier</span>
              <br />
              Tomorrow
            </h1>
            <p className="text-lg text-[#C9D3D8] mb-8 leading-relaxed">
              NKB Pharma develops science-backed pharmaceutical solutions that
              empower patients and healthcare providers to achieve better
              outcomes worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="rounded-full bg-teal hover:bg-teal/90 text-white font-semibold px-7 py-3 h-auto"
                data-ocid="hero.primary_button"
              >
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/40 text-white hover:bg-white/10 font-semibold px-7 py-3 h-auto"
                data-ocid="hero.secondary_button"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="text-teal text-sm font-semibold tracking-widest uppercase">
              Our Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-heading mt-2 mb-3">
              Pharmaceutical Products
            </h2>
            <p className="text-body max-w-xl mx-auto">
              Five expertly formulated products spanning critical therapeutic
              areas, each developed with patient wellbeing at the center.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Card
                  className="group shadow-card hover:shadow-card-hover transition-shadow duration-300 border-border h-full flex flex-col"
                  data-ocid={`products.item.${i + 1}`}
                >
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="w-12 h-12 rounded-xl bg-mint flex items-center justify-center mb-4 group-hover:bg-teal transition-colors">
                      <p.icon className="w-6 h-6 text-teal group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-semibold text-teal uppercase tracking-wider mb-1">
                      {p.category}
                    </span>
                    <h3 className="font-display font-bold text-heading text-base mb-2">
                      {p.name}
                    </h3>
                    <p className="text-body text-sm leading-relaxed flex-1">
                      {p.desc}
                    </p>
                    <Button
                      asChild
                      variant="ghost"
                      className="mt-4 text-teal hover:text-teal hover:bg-mint px-0 justify-start text-sm"
                      data-ocid={`products.secondary_button.${i + 1}`}
                    >
                      <Link to="/products">
                        Learn More <ArrowRight className="ml-1 w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Reach */}
      <section className="py-20 bg-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-teal text-sm font-semibold tracking-widest uppercase">
                Global Presence
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-heading mt-2 mb-4">
                Markets We Serve
              </h2>
              <p className="text-body leading-relaxed mb-6">
                NKB Pharma distributes life-changing medicines across five
                continents, partnering with healthcare systems to improve
                patient outcomes in both developed and emerging markets.
              </p>
              <ul className="space-y-3">
                {[
                  "North America & Canada",
                  "Europe & United Kingdom",
                  "Middle East & North Africa",
                  "South & Southeast Asia",
                  "Sub-Saharan Africa",
                ].map((region) => (
                  <li
                    key={region}
                    className="flex items-center gap-2 text-body"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                    {region}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-8 rounded-full bg-navy hover:bg-navy/90 text-white font-semibold px-6"
                data-ocid="markets.primary_button"
              >
                <Link to="/markets">
                  View All Markets <Globe className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-card"
            >
              <img
                src="/assets/generated/nkb-world-map.dim_800x500.png"
                alt="NKB Pharma global market reach world map"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-teal text-sm font-semibold tracking-widest uppercase">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-heading mt-2 mb-3">
              Our Commitment
            </h2>
            <p className="text-body max-w-xl mx-auto">
              Guided by science and driven by purpose, we uphold three pillars
              that define every decision we make.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-mint flex items-center justify-center mx-auto mb-5">
                  <c.icon className="w-8 h-8 text-teal" />
                </div>
                <h3 className="font-display font-bold text-heading text-xl mb-3">
                  {c.title}
                </h3>
                <p className="text-body leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
