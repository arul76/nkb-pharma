import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Markets", to: "/markets" },
  { label: "Our Commitment", to: "/commitment" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const { location } = useRouterState();
  const pathname = location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white shadow-header"
      data-ocid="header.panel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0"
            data-ocid="header.link"
          >
            <img
              src="/assets/uploads/logo-nkb.png"
              alt="NKB Biopharma"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            data-ocid="header.panel"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid="nav.link"
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative group ${
                    isActive ? "text-teal" : "text-body hover:text-teal"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-teal rounded-full transition-all duration-200 ${
                      isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Button
              asChild
              className="rounded-full bg-teal text-white hover:bg-teal/90 font-semibold px-5"
              data-ocid="header.primary_button"
            >
              <Link to="/contact">Request Information</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="header.toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border overflow-hidden bg-white"
          >
            <nav className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  data-ocid="nav.link"
                  className={`px-3 py-2.5 text-sm font-medium rounded-md ${
                    pathname === link.to
                      ? "bg-mint text-teal"
                      : "text-body hover:bg-mint hover:text-teal"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-2 rounded-full bg-teal text-white hover:bg-teal/90"
                data-ocid="header.primary_button"
              >
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Request Information
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
