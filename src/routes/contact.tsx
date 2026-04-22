import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, MessageCircle, Mail, Clock, Send } from "lucide-react";
import { CLINIC, whatsappLink } from "@/lib/clinic";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Phoenix Mediclinic, Sector 46 Gurugram" },
      { name: "description", content: "Visit Phoenix Mediclinic at 1168, Sector 46, Gurugram. Call +91 83360 05000 or message us on WhatsApp to book." },
      { property: "og:title", content: "Contact Phoenix Mediclinic" },
      { property: "og:description", content: "Address, phone, WhatsApp and a quick contact form — get in touch with our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Phoenix Mediclinic,%0A%0AName: ${form.name}%0APhone: ${form.phone}%0A%0A${form.message}`;
    window.open(`https://wa.me/${CLINIC.whatsapp}?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute -top-20 left-1/3 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Get in touch
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            We're here to <span className="text-gradient">help you heal</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Reach us by phone, WhatsApp, or visit the clinic. We respond personally and quickly.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, label: "Visit", value: CLINIC.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC.mapsQuery)}` },
            { icon: Phone, label: "Call", value: CLINIC.phoneDisplay, href: `tel:${CLINIC.phone}` },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: whatsappLink() },
            { icon: Clock, label: "Hours", value: "Mon–Sat · 10am–8pm" },
          ].map((c) => {
            const inner = (
              <>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {c.label}
                </div>
                <div className="mt-1.5 text-sm font-medium text-foreground">{c.value}</div>
              </>
            );
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block rounded-2xl border border-border bg-background p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
              >
                {inner}
              </a>
            ) : (
              <div
                key={c.label}
                className="rounded-2xl border border-border bg-background p-6 shadow-soft"
              >
                {inner}
              </div>
            );
          })}
        </div>

        {/* Form + Map */}
        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="rounded-3xl border border-border bg-background p-8 shadow-card lg:col-span-2 lg:p-10">
            <h2 className="font-display text-2xl font-bold text-foreground">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill the form — we'll deliver it directly to our WhatsApp.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-primary-soft p-6 text-center">
                <Mail className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-3 font-semibold text-foreground">Thanks — we'll get back to you shortly.</p>
                <p className="mt-1 text-sm text-muted-foreground">Your WhatsApp should have opened.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-smooth placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-smooth placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-smooth placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-glow"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-3xl border border-border shadow-card lg:col-span-3">
            <iframe
              title="Phoenix Mediclinic location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(CLINIC.mapsQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
