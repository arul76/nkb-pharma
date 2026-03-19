import { Card, CardContent } from "@/components/ui/card";
import { Award, Eye, Target, Users } from "lucide-react";
import { motion } from "motion/react";

const team = [
  {
    name: "Dr. Nadia K. Bautista",
    role: "Chief Executive Officer",
    initials: "NB",
    bio: "25+ years in pharmaceutical leadership, formerly VP of Global Medicines at PharmaBridge International.",
  },
  {
    name: "Dr. Kumar Rajan",
    role: "Chief Scientific Officer",
    initials: "KR",
    bio: "PhD in Medicinal Chemistry from MIT, pioneer in targeted drug delivery systems with 40+ patents.",
  },
  {
    name: "Ms. Beatrice Okonkwo",
    role: "VP of Global Markets",
    initials: "BO",
    bio: "Expanded NKB into 35+ countries through strategic partnerships and regulatory excellence.",
  },
  {
    name: "Dr. James Whitfield",
    role: "Head of Clinical Affairs",
    initials: "JW",
    bio: "Led 12 successful Phase III clinical trials, ensuring highest standards of patient safety and efficacy.",
  },
];

const milestones = [
  {
    year: "2008",
    event:
      "NKB Pharma founded with a mission to make advanced medicines accessible worldwide.",
  },
  {
    year: "2012",
    event:
      "Received ISO 9001 certification and launched first product line: CardioMax.",
  },
  {
    year: "2015",
    event:
      "Expanded to European and Middle Eastern markets; surpassed 1M patients served.",
  },
  {
    year: "2018",
    event:
      "Opened state-of-the-art R&D facility; launched NeuroCare Plus and ImmunShield.",
  },
  {
    year: "2021",
    event:
      "OsteoFlex and RespiClear launched; entered Asian and African markets.",
  },
  {
    year: "2024",
    event:
      "Operating in 42 countries; recognized as top 50 global pharma innovator.",
  },
];

export default function AboutUs() {
  return (
    <div>
      {/* Page Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal text-sm font-semibold tracking-widest uppercase">
              Who We Are
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mt-3 mb-4">
              About NKB Pharma
            </h1>
            <p className="text-[#C9D3D8] max-w-2xl mx-auto text-lg leading-relaxed">
              A global pharmaceutical company dedicated to developing
              innovative, accessible, and effective medicines for conditions
              that affect millions worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-border shadow-card h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-mint rounded-xl flex items-center justify-center mb-5">
                    <Target className="w-6 h-6 text-teal" />
                  </div>
                  <h2 className="text-2xl font-bold font-display text-heading mb-3">
                    Our Mission
                  </h2>
                  <p className="text-body leading-relaxed">
                    To advance human health by delivering scientifically
                    rigorous, affordable pharmaceutical products that improve
                    the quality of life for patients across every region of the
                    world — without compromise on safety or efficacy.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-border shadow-card h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-mint rounded-xl flex items-center justify-center mb-5">
                    <Eye className="w-6 h-6 text-teal" />
                  </div>
                  <h2 className="text-2xl font-bold font-display text-heading mb-3">
                    Our Vision
                  </h2>
                  <p className="text-body leading-relaxed">
                    To be the most trusted global pharmaceutical partner —
                    recognized for breakthrough research, exceptional product
                    quality, and a genuine commitment to patients, communities,
                    and the planet.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-mint">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal text-sm font-semibold tracking-widest uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-heading mt-2 mb-3">
              Company History
            </h2>
          </div>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-6 items-start"
                data-ocid={`history.item.${i + 1}`}
              >
                <div className="w-20 shrink-0 text-right">
                  <span className="font-bold font-display text-teal text-lg">
                    {m.year}
                  </span>
                </div>
                <div className="w-px bg-teal/30 self-stretch relative">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-teal" />
                </div>
                <div className="pb-4">
                  <p className="text-body leading-relaxed">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal text-sm font-semibold tracking-widest uppercase">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-heading mt-2 mb-3">
              Meet Our Team
            </h2>
            <p className="text-body max-w-xl mx-auto">
              Visionary leaders with deep expertise driving NKB Pharma's global
              impact.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`team.item.${i + 1}`}
              >
                <Card className="shadow-card border-border text-center hover:shadow-card-hover transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-teal text-white flex items-center justify-center text-xl font-bold font-display mx-auto mb-4">
                      {member.initials}
                    </div>
                    <h3 className="font-display font-bold text-heading mb-1">
                      {member.name}
                    </h3>
                    <p className="text-teal text-sm font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-body text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "42+", label: "Countries" },
              { value: "5M+", label: "Patients Served" },
              { value: "16", label: "Years of Excellence" },
              { value: "200+", label: "Team Members" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold font-display text-teal mb-1">
                  {stat.value}
                </div>
                <div className="text-[#C9D3D8] text-sm font-semibold tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
