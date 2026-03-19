import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    inquiry: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    toast.success(
      "Your message has been sent! We'll respond within 2 business days.",
    );
    setForm({ name: "", email: "", company: "", inquiry: "", message: "" });
  }

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
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-white mt-3 mb-4">
              Contact Us
            </h1>
            <p className="text-[#C9D3D8] max-w-2xl mx-auto text-lg leading-relaxed">
              Have questions about our products or want to explore distribution
              partnerships? Our team is ready to assist.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold font-display text-heading mb-6">
                  Contact Information
                </h2>
              </div>
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value:
                    "12 Pharma Boulevard\nHealth City, HC 10024\nUnited States",
                },
                { icon: Phone, label: "Phone", value: "+1 (800) 625-7462" },
                { icon: Mail, label: "Email", value: "info@nkbpharma.com" },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Mon–Fri: 9:00 AM – 6:00 PM EST",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-mint rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <div className="font-semibold text-heading text-sm mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-body text-sm whitespace-pre-line">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden h-48 bg-navy/10 flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-teal mx-auto mb-2" />
                  <p className="text-body text-sm">
                    12 Pharma Boulevard
                    <br />
                    Health City, HC 10024
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 shadow-card border border-border">
                <h2 className="text-2xl font-bold font-display text-heading mb-6">
                  Send Us a Message
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="contact.panel"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-heading text-sm font-semibold mb-1.5 block"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Dr. Jane Smith"
                        className="border-border"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-heading text-sm font-semibold mb-1.5 block"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="jane@hospital.com"
                        className="border-border"
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor="company"
                      className="text-heading text-sm font-semibold mb-1.5 block"
                    >
                      Organization
                    </Label>
                    <Input
                      id="company"
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      placeholder="Healthcare Provider / Hospital / Distributor"
                      className="border-border"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="inquiry"
                      className="text-heading text-sm font-semibold mb-1.5 block"
                    >
                      Inquiry Type *
                    </Label>
                    <Select
                      value={form.inquiry}
                      onValueChange={(val) =>
                        setForm({ ...form, inquiry: val })
                      }
                      required
                    >
                      <SelectTrigger
                        className="border-border"
                        data-ocid="contact.select"
                      >
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product">
                          Product Information
                        </SelectItem>
                        <SelectItem value="distribution">
                          Distribution Partnership
                        </SelectItem>
                        <SelectItem value="clinical">
                          Clinical / Medical Affairs
                        </SelectItem>
                        <SelectItem value="investor">
                          Investor Relations
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label
                      htmlFor="message"
                      className="text-heading text-sm font-semibold mb-1.5 block"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Tell us how we can help..."
                      rows={5}
                      className="border-border resize-none"
                      data-ocid="contact.textarea"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full bg-teal hover:bg-teal/90 text-white font-semibold h-12"
                    data-ocid="contact.submit_button"
                  >
                    {submitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
