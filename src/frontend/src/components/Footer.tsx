import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import { ArrowRight, FlaskConical, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      toast.success("You've subscribed to our newsletter!");
      setEmail("");
    }
  }

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-teal flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <div className="leading-none">
                <span className="text-xl font-bold font-display">NKB</span>
                <span className="block text-[10px] font-semibold tracking-[0.2em] text-teal uppercase">
                  Pharma
                </span>
              </div>
            </div>
            <p className="text-sm text-[#C9D3D8] leading-relaxed">
              Advancing human health through science, innovation, and an
              unwavering commitment to quality pharmaceutical solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest mb-4 text-teal">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Products", to: "/products" },
                { label: "Markets", to: "/markets" },
                { label: "Our Commitment", to: "/commitment" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-ocid="footer.link"
                    className="text-sm text-[#C9D3D8] hover:text-teal transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest mb-4 text-teal">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-[#C9D3D8]">
                <MapPin className="w-4 h-4 mt-0.5 text-teal shrink-0" />
                <span>12 Pharma Boulevard, Health City, HC 10024</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#C9D3D8]">
                <Phone className="w-4 h-4 text-teal shrink-0" />
                <span>+1 (800) 625-7462</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#C9D3D8]">
                <Mail className="w-4 h-4 text-teal shrink-0" />
                <span>info@nkbpharma.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest mb-4 text-teal">
              Newsletter
            </h4>
            <p className="text-sm text-[#C9D3D8] mb-3">
              Stay updated on product launches and pharma insights.
            </p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 text-sm"
                data-ocid="footer.input"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-teal hover:bg-teal/90 shrink-0"
                data-ocid="footer.submit_button"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#C9D3D8]">
            © {year} NKB Pharma. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-[#C9D3D8]">
            <Link to="/" className="hover:text-teal transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-teal transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="text-center py-2">
          <p className="text-xs text-[#C9D3D8]/60">
            © {year}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
