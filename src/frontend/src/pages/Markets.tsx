import { Card, CardContent } from "@/components/ui/card";
import { Building2, Globe, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

const regions = [
  {
    name: "North America",
    countries: ["United States", "Canada", "Mexico"],
    highlights:
      "Largest revenue market. Direct hospital partnerships and retail pharmacy distribution chains.",
    flag: "🌎",
    partners: 45,
  },
  {
    name: "Europe",
    countries: ["Germany", "France", "United Kingdom", "Netherlands", "Spain"],
    highlights:
      "EMA-compliant product range. Strong presence in both hospital formularies and OTC retail.",
    flag: "🌍",
    partners: 38,
  },
  {
    name: "Middle East & Africa",
    countries: ["UAE", "Saudi Arabia", "Egypt", "South Africa", "Kenya"],
    highlights:
      "Rapid growth market with growing middle class driving demand for specialty pharma.",
    flag: "🌍",
    partners: 27,
  },
  {
    name: "South Asia",
    countries: ["India", "Sri Lanka", "Bangladesh", "Pakistan"],
    highlights:
      "High-volume generics market with strong institutional healthcare infrastructure.",
    flag: "🌏",
    partners: 31,
  },
  {
    name: "Southeast Asia & Pacific",
    countries: [
      "Malaysia",
      "Singapore",
      "Indonesia",
      "Philippines",
      "Australia",
    ],
    highlights:
      "Emerging private healthcare sector driving demand for premium pharmaceutical brands.",
    flag: "🌏",
    partners: 22,
  },
];

const stats = [
  { icon: Globe, value: "42+", label: "Countries" },
  { icon: Building2, value: "163", label: "Distribution Partners" },
  { icon: Users, value: "5M+", label: "Patients Reached" },
  { icon: TrendingUp, value: "18%", label: "Annual Growth" },
];

export default function Markets() {
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
              Where We Operate
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mt-3 mb-4">
              Our Markets
            </h1>
            <p className="text-[#C9D3D8] max-w-2xl mx-auto text-lg leading-relaxed">
              From established pharmaceutical markets to high-growth emerging
              economies, NKB Pharma delivers trusted medicines across five
              continents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-mint">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src="/assets/generated/nkb-world-map.dim_800x500.png"
              alt="NKB Pharma global market presence"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-mint rounded-xl flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-6 h-6 text-teal" />
                </div>
                <div className="text-3xl font-bold font-display text-navy mb-1">
                  {s.value}
                </div>
                <div className="text-body text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-16 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-heading mb-3">
              Regional Presence
            </h2>
            <p className="text-body">
              Our distribution network spans every major world region.
            </p>
          </div>
          <div className="space-y-5">
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                data-ocid={`markets.item.${i + 1}`}
              >
                <Card className="shadow-card border-border">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="text-4xl shrink-0">{region.flag}</div>
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-heading text-lg mb-1">
                          {region.name}
                        </h3>
                        <p className="text-body text-sm mb-2">
                          {region.highlights}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {region.countries.map((c) => (
                            <span
                              key={c}
                              className="bg-mint text-teal text-xs font-medium px-2.5 py-0.5 rounded-full"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-center shrink-0">
                        <div className="text-2xl font-bold font-display text-teal">
                          {region.partners}
                        </div>
                        <div className="text-body text-xs">Partners</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
