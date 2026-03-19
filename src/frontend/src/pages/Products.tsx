import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bone,
  Brain,
  ChevronDown,
  ChevronUp,
  Heart,
  Shield,
  Wind,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const products = [
  {
    icon: Heart,
    name: "CardioMax 10mg",
    category: "Cardiovascular",
    form: "Tablet",
    color: "bg-rose-50",
    iconColor: "text-rose-500",
    desc: "CardioMax 10mg is a precision-formulated cardiovascular tablet containing a proprietary blend of CoQ10, Omega-3 fatty acids, and a patented vasodilatory compound. It supports healthy blood pressure levels, improves lipid profiles, and protects cardiac muscle function.",
    indications: [
      "Hypertension management",
      "Hyperlipidemia",
      "Post-cardiac event recovery",
      "Preventive cardiovascular care",
    ],
    dosage:
      "One tablet daily with meals, or as prescribed by a healthcare professional.",
    storage: "Store below 25°C in a dry place, away from direct sunlight.",
  },
  {
    icon: Brain,
    name: "NeuroCare Plus",
    category: "Neurology",
    form: "Capsule",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
    desc: "NeuroCare Plus is a neurological support capsule engineered to promote cognitive clarity, reduce neuroinflammation, and support the peripheral nervous system. It combines phosphatidylserine, lion's mane extract, and B-complex vitamins.",
    indications: [
      "Cognitive decline support",
      "Peripheral neuropathy",
      "Memory enhancement",
      "Stress-induced neural fatigue",
    ],
    dosage: "Two capsules twice daily after meals for optimal absorption.",
    storage: "Store in a cool, dry place below 30°C. Keep sealed.",
  },
  {
    icon: Shield,
    name: "ImmunShield",
    category: "Immunology",
    form: "Syrup",
    color: "bg-amber-50",
    iconColor: "text-amber-500",
    desc: "ImmunShield is a comprehensive immunity booster syrup combining elderberry extract, zinc, vitamin C, echinacea, and selenium. Clinically tested to reduce the frequency and severity of infections while accelerating recovery time.",
    indications: [
      "Recurrent infections",
      "Post-illness recovery",
      "Seasonal immunity boost",
      "Chemotherapy support care",
    ],
    dosage:
      "10ml twice daily. Shake well before use. Refrigerate after opening.",
    storage:
      "Store between 2–8°C after opening. Use within 30 days of opening.",
  },
  {
    icon: Bone,
    name: "OsteoFlex",
    category: "Orthopedics",
    form: "Supplement",
    color: "bg-green-50",
    iconColor: "text-green-600",
    desc: "OsteoFlex is a next-generation bone and joint health supplement delivering bioavailable calcium carbonate, vitamin D3 (5000 IU), magnesium, and marine collagen peptides. Designed to strengthen bone density and restore joint flexibility.",
    indications: [
      "Osteoporosis prevention",
      "Osteoarthritis management",
      "Post-fracture bone healing",
      "Athletic joint support",
    ],
    dosage:
      "Two tablets daily with water, preferably with a meal containing fats to aid vitamin D absorption.",
    storage: "Store at room temperature, protected from moisture and light.",
  },
  {
    icon: Wind,
    name: "RespiClear",
    category: "Respiratory",
    form: "Solution",
    color: "bg-sky-50",
    iconColor: "text-sky-500",
    desc: "RespiClear is an advanced respiratory health solution combining N-acetylcysteine, bromhexine, and eucalyptus essential oil complex. It provides mucolytic, bronchodilatory, and anti-inflammatory benefits for a full spectrum of respiratory conditions.",
    indications: [
      "Chronic bronchitis",
      "COPD management",
      "Asthma-related mucus clearance",
      "Post-respiratory infection recovery",
    ],
    dosage:
      "5ml in 200ml warm water, inhaled or ingested as directed by physician.",
    storage: "Keep in a cool, ventilated area below 25°C. Avoid freezing.",
  },
];

function ProductCard({
  product,
  index,
}: { product: (typeof products)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      data-ocid={`products.item.${index + 1}`}
    >
      <Card className="shadow-card border-border hover:shadow-card-hover transition-shadow">
        <CardContent className="p-8">
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <div
              className={`w-16 h-16 rounded-2xl ${product.color} flex items-center justify-center shrink-0`}
            >
              <product.icon className={`w-8 h-8 ${product.iconColor}`} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="font-display font-bold text-heading text-xl">
                  {product.name}
                </h3>
                <Badge
                  variant="outline"
                  className="border-teal text-teal text-xs"
                >
                  {product.form}
                </Badge>
                <Badge className="bg-mint text-teal border-0 text-xs">
                  {product.category}
                </Badge>
              </div>
              <p className="text-body leading-relaxed mb-4">{product.desc}</p>

              <button
                type="button"
                className="flex items-center gap-1 text-teal text-sm font-semibold hover:text-teal/80 transition-colors"
                onClick={() => setExpanded(!expanded)}
                data-ocid={`products.toggle.${index + 1}`}
              >
                {expanded ? "Hide details" : "View details"}
                {expanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border pt-4"
                >
                  <div>
                    <h4 className="font-semibold text-heading text-sm mb-2">
                      Indications
                    </h4>
                    <ul className="space-y-1">
                      {product.indications.map((ind) => (
                        <li
                          key={ind}
                          className="text-body text-sm flex items-start gap-1.5"
                        >
                          <span className="text-teal mt-0.5">•</span> {ind}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-heading text-sm mb-2">
                      Dosage
                    </h4>
                    <p className="text-body text-sm">{product.dosage}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-heading text-sm mb-2">
                      Storage
                    </h4>
                    <p className="text-body text-sm">{product.storage}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Products() {
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
              Our Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mt-3 mb-4">
              Our Products
            </h1>
            <p className="text-[#C9D3D8] max-w-2xl mx-auto text-lg leading-relaxed">
              Five evidence-based pharmaceutical products developed across
              critical therapeutic areas to address prevalent global health
              challenges.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {products.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
