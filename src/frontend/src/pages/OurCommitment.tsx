import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Beaker,
  CheckCircle2,
  FlaskConical,
  HeartHandshake,
  Leaf,
  Microscope,
  Recycle,
  Shield,
  TreePine,
} from "lucide-react";
import { motion } from "motion/react";

const pillars = [
  {
    icon: FlaskConical,
    title: "Research & Development",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
    summary:
      "Pioneering pharmaceutical innovation through evidence-based research and cutting-edge technology.",
    details: [
      "400,000 sq. ft. R&D facility with 120+ dedicated scientists",
      "Annual R&D investment exceeding 15% of total revenue",
      "Collaboration with 18 universities and research institutes globally",
      "Pipeline of 12 new molecular entities currently in clinical trials",
      "Advanced computational drug design and AI-assisted formulation",
    ],
    subItems: [
      { icon: Microscope, label: "Preclinical Research" },
      { icon: Beaker, label: "Clinical Trials" },
      { icon: FlaskConical, label: "Drug Formulation" },
    ],
  },
  {
    icon: Award,
    title: "Quality & Safety",
    color: "bg-teal-50",
    iconColor: "text-teal-500",
    summary:
      "Every product undergoes rigorous multi-stage quality assurance, meeting the most stringent global regulatory standards.",
    details: [
      "ISO 9001:2015 and GMP certified manufacturing facilities",
      "Over 500 quality control checkpoints in production process",
      "Zero tolerance policy for deviations from established safety protocols",
      "Pharmacovigilance program monitoring 100,000+ patient outcomes annually",
      "FDA, EMA, and WHO pre-qualification for all marketed products",
    ],
    subItems: [
      { icon: Shield, label: "Regulatory Compliance" },
      { icon: Award, label: "Certifications" },
      { icon: HeartHandshake, label: "Patient Safety" },
    ],
  },
  {
    icon: Leaf,
    title: "Sustainability",
    color: "bg-green-50",
    iconColor: "text-green-600",
    summary:
      "Building a healthier planet alongside healthier patients — through responsible manufacturing and environmental stewardship.",
    details: [
      "Carbon-neutral manufacturing operations by 2030 commitment",
      "80% renewable energy usage across all production facilities",
      "Zero-waste-to-landfill initiative launched across 5 plants",
      "Sustainable packaging using 70% recycled or biodegradable materials",
      "Water recycling program saving 50 million liters annually",
    ],
    subItems: [
      { icon: Recycle, label: "Circular Economy" },
      { icon: TreePine, label: "Carbon Reduction" },
      { icon: Leaf, label: "Green Manufacturing" },
    ],
  },
];

export default function OurCommitment() {
  return (
    <div>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal text-sm font-semibold tracking-widest uppercase">
              Our Values
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mt-3 mb-4">
              Our Commitment
            </h1>
            <p className="text-[#C9D3D8] max-w-2xl mx-auto text-lg leading-relaxed">
              Three foundational pillars that define how we operate, innovate,
              and contribute to the world — today and in the future.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`commitment.item.${i + 1}`}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div
                    className={`w-16 h-16 rounded-2xl ${pillar.color} flex items-center justify-center mb-5`}
                  >
                    <pillar.icon className={`w-8 h-8 ${pillar.iconColor}`} />
                  </div>
                  <h2 className="text-3xl font-bold font-display text-heading mb-3">
                    {pillar.title}
                  </h2>
                  <p className="text-body leading-relaxed mb-5">
                    {pillar.summary}
                  </p>
                  <ul className="space-y-2.5">
                    {pillar.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2.5 text-body text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <Card className="shadow-card border-border">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 gap-5">
                        {pillar.subItems.map((sub) => (
                          <div
                            key={sub.label}
                            className="flex items-center gap-4 p-4 bg-muted rounded-xl"
                          >
                            <div
                              className={`w-10 h-10 rounded-lg ${pillar.color} flex items-center justify-center`}
                            >
                              <sub.icon
                                className={`w-5 h-5 ${pillar.iconColor}`}
                              />
                            </div>
                            <span className="font-semibold text-heading">
                              {sub.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              {i < pillars.length - 1 && (
                <div className="border-t border-border mt-16" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-mint">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display text-heading mb-4">
            Partner With a Company You Can Trust
          </h2>
          <p className="text-body mb-8">
            Our commitment is not just a statement — it's reflected in every
            product, every trial, and every patient we serve.
          </p>
        </div>
      </section>
    </div>
  );
}
