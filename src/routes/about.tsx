import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, HeartPulse, Sparkles, Users } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import { whatsappLink } from "@/lib/clinic";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Phoenix Mediclinic, Sector 46 Gurugram" },
      { name: "description", content: "Learn about Phoenix Mediclinic — a multi-specialty clinic in Gurugram blending modern medicine with holistic healing." },
      { property: "og:title", content: "About Phoenix Mediclinic" },
      { property: "og:description", content: "Multi-specialty clinic in Sector 46 Gurugram — skin, hair, homeopathy, physiotherapy & Hijama." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: HeartPulse, title: "Holistic Healing", text: "We treat the whole person — combining modern medicine with natural therapies." },
  { icon: ShieldCheck, title: "Safety First", text: "Sterile environments, certified protocols and the highest hygiene standards." },
  { icon: Sparkles, title: "Personalised Care", text: "Every treatment plan is tailored to your body, history and goals." },
  { icon: Users, title: "Patient-Centric", text: "We listen first. Your comfort and trust guide every decision we make." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About us</span>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              A trusted name in <span className="text-gradient">holistic healthcare</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Phoenix Mediclinic is a multi-specialty clinic in Sector 46, Gurugram — built on the belief that great medicine is both scientific and human.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-card">
            <img src={heroImg} alt="Phoenix Mediclinic interior" loading="lazy" width={1536} height={1024} className="h-full w-full object-cover" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our story
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Founded with a vision to bring world-class care to Gurugram, Phoenix Mediclinic
                offers advanced skin and hair treatments, modern aesthetic procedures, and natural
                healing through homeopathy, physiotherapy and Hijama cupping therapy.
              </p>
              <p>
                Our team blends years of medical expertise with the latest clinical technology — so
                every patient receives safe, effective and deeply personal care, all under one roof.
              </p>
              <p>
                We rise — like the phoenix in our name — to a higher standard of healing every day.
              </p>
            </div>
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-smooth hover:gap-2.5"
            >
              Explore our services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-soft py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our values</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What guides our care
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-background p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-primary p-10 text-center shadow-glow sm:p-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Visit Phoenix Mediclinic
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/85">
            Book a consultation with our specialists — we'd love to meet you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/appointment" className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary shadow-soft transition-smooth hover:-translate-y-0.5">
              Book appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-smooth hover:bg-primary-foreground/20">
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
