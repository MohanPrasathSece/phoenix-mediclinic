import { Link } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { CLINIC, whatsappLink } from "@/lib/clinic";

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2 space-y-4">
          <Logo />
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Advanced skin, hair, and holistic care in Sector 46, Gurugram. Modern medicine meets
            natural healing — delivered with warmth and expertise.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/" className="transition-smooth hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="transition-smooth hover:text-primary">About</Link></li>
            <li><Link to="/services" className="transition-smooth hover:text-primary">Services</Link></li>
            <li><Link to="/appointment" className="transition-smooth hover:text-primary">Appointment</Link></li>
            <li><Link to="/contact" className="transition-smooth hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-foreground">Reach Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{CLINIC.address}</span>
            </li>
            <li>
              <a href={`tel:${CLINIC.phone}`} className="flex items-center gap-2.5 transition-smooth hover:text-primary">
                <Phone className="h-4 w-4 text-primary" />
                {CLINIC.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 transition-smooth hover:text-primary">
                <MessageCircle className="h-4 w-4 text-primary" />
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p>Designed with care for your wellbeing.</p>
        </div>
      </div>
    </footer>
  );
}
