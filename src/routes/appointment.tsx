import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MessageCircle, CheckCircle2, User, Phone } from "lucide-react";
import { CLINIC, whatsappLink } from "@/lib/clinic";
import { services } from "@/lib/services";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Phoenix Mediclinic, Gurugram" },
      { name: "description", content: "Book your appointment at Phoenix Mediclinic, Sector 46 Gurugram. Choose a service, date and time — we confirm via WhatsApp." },
      { property: "og:title", content: "Book Appointment — Phoenix Mediclinic" },
      { property: "og:description", content: "Schedule your visit online for skin, hair, homeopathy, physiotherapy or Hijama." },
    ],
  }),
  component: AppointmentPage,
});

const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM",
  "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM",
];

function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: services[0]?.title ?? "",
    date: "",
    time: "",
    notes: "",
  });

  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = `Hi ${CLINIC.name}, I'd like to book an appointment.

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Preferred date: ${form.date}
Preferred time: ${form.time}
${form.notes ? `Notes: ${form.notes}` : ""}`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-16 lg:px-8 lg:pb-16 lg:pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Appointments</span>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Book your <span className="text-gradient">appointment</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Pick a service, date and time. We'll confirm your slot personally on WhatsApp within minutes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-8 lg:py-20">
        <div className="lg:col-span-2">
          {submitted ? (
            <div className="rounded-3xl border border-border bg-background p-10 text-center shadow-card">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold text-foreground">Request sent!</h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                We've opened WhatsApp with your appointment details. Please send the message to confirm your slot — our team will respond shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-smooth hover:border-primary hover:text-primary"
              >
                Book another appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-background p-6 shadow-card sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" icon={User}>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="input-style" />
                </Field>
                <Field label="Phone number" icon={Phone}>
                  <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 ..." className="input-style" />
                </Field>
                <Field label="Service" icon={CheckCircle2}>
                  <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="input-style">
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                    <option value="General consultation">General consultation</option>
                  </select>
                </Field>
                <Field label="Preferred date" icon={Calendar}>
                  <input required type="date" min={today} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="input-style" />
                </Field>
              </div>

              <div className="mt-6">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Clock className="h-4 w-4 text-primary" /> Preferred time
                </label>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setForm({ ...form, time: slot })}
                      className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-smooth ${
                        form.time === slot
                          ? "border-primary bg-primary text-primary-foreground shadow-soft"
                          : "border-border bg-background text-foreground hover:border-primary hover:text-primary"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label className="text-sm font-semibold text-foreground">Notes (optional)</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={3}
                  placeholder="Anything you'd like us to know..."
                  className="input-style mt-2 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={!form.time}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Confirm via WhatsApp
              </button>
            </form>
          )}
        </div>

        <aside className="mt-10 space-y-5 lg:mt-0">
          <div className="rounded-3xl border border-border bg-gradient-soft p-6 shadow-soft">
            <h3 className="font-display text-lg font-semibold text-foreground">Clinic hours</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between"><span>Mon — Sat</span><span className="font-medium text-foreground">10 AM — 8 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="font-medium text-foreground">By appointment</span></li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-background p-6 shadow-soft">
            <h3 className="font-display text-lg font-semibold text-foreground">Need help?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Call us directly or message on WhatsApp — we respond fast.</p>
            <a href={`tel:${CLINIC.phone}`} className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
              <Phone className="h-4 w-4" /> {CLINIC.phoneDisplay}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center gap-2 text-sm font-semibold text-primary">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({ label, icon: Icon, children }: { label: string; icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Icon className="h-4 w-4 text-primary" /> {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
