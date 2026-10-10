import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, Stethoscope, HeartPulse, Wallet, Cpu, Calendar, UserCheck, Award } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import doctorImg from "@/assets/Doctor.jpg";
import { whatsappLink } from "@/lib/clinic";
import { services } from "@/lib/services";
import { FAQs } from "@/components/FAQs";
import { TransformationsSection } from "@/components/TransformationsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Phoenix Mediclinic - Best Skin, Hair & Holistic Care in Sector 46 Gurugram" },
      { name: "description", content: "Top multi-specialty clinic in Sector 46 Gurugram. Hair PRP/GFC, Skin & Aesthetic treatments, Homeopathy, Physiotherapy & Hijama Cupping." },
      { property: "og:title", content: "Phoenix Mediclinic - Sector 46, Gurugram" },
      { property: "og:description", content: "Advanced skin & hair treatments, homeopathy, physiotherapy and cupping therapy. Personalised, holistic care." },
    ],
  }),
  component: HomePage,
});

const reasons = [
  { icon: Stethoscope, title: "Experienced Doctors", text: "Qualified medical professionals with years of clinical expertise." },
  { icon: Cpu, title: "Advanced Equipment", text: "Latest medical technology for precise, effective treatments." },
  { icon: HeartPulse, title: "Holistic Approach", text: "Modern medicine paired with natural therapies for whole-body wellness." },
  { icon: Sparkles, title: "Personalised Plans", text: "Treatment tailored to your body, history and goals." },
  { icon: Wallet, title: "Transparent Pricing", text: "Honest, upfront costs - no hidden surprises, ever." },
  { icon: ShieldCheck, title: "Safe & Hygienic", text: "Strict protocols and sterile environments at every step." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3.5 py-1.5 text-xs font-medium text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Now open in Sector 46, Gurugram
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Advanced care for your{" "}
              <span className="text-gradient">skin, hair & wellbeing</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Phoenix Mediclinic blends modern medical technology with natural healing -
              delivering safe, effective and personalised care under one roof.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-glow"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-smooth hover:border-primary hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp us
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-6">
              <div>
                <div className="font-display text-2xl font-bold text-foreground">5+</div>
                <div className="text-xs text-muted-foreground">Specialities</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs text-muted-foreground">Personalised</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-foreground">★ 4.9</div>
                <div className="text-xs text-muted-foreground">Patient rating</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px]"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-primary blur-2xl opacity-20" />
            <img
              src={doctorImg}
              alt="Lead Doctor at Phoenix Mediclinic, Sector 46 Gurugram"
              className="relative w-full h-auto rounded-[2rem] border border-border/60 shadow-card object-contain"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-background/95 p-3.5 shadow-card backdrop-blur sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Lead Doctor</div>
                  <div className="text-sm font-semibold text-foreground">Expert Personalised Care</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT & MEET DOCTOR */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              About the clinic & doctor
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Where modern medicine meets <span className="text-gradient">natural healing</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Phoenix Mediclinic is a leading multi-specialty clinic in Sector 46, Gurugram,
                offering advanced skin and hair treatments, modern aesthetic procedures, and
                holistic healing through homeopathy, physiotherapy, and cupping therapy (Hijama).
              </p>
              <p>
                Under expert doctor guidance, we are committed to providing safe, effective, and
                personalised medical care using state-of-the-art technology paired with integrative healing protocols.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-border/80 bg-gradient-soft p-5 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">Doctor-Led Consultations</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Every treatment starts with an in-depth consultation by our experienced doctor to build a safe, effective roadmap tailored to your health goals.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-smooth hover:gap-2.5"
            >
              See our services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-card aspect-[4/3]">
              <img
                src={heroImg}
                alt="Phoenix Mediclinic Interior"
                loading="lazy"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {[
                { n: "5+", l: "Specialities" },
                { n: "100%", l: "Doctor Supervised" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-border bg-background p-4 shadow-soft"
                >
                  <div className="font-display text-2xl font-bold text-gradient">{s.n}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-gradient-soft py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                What we offer
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Care across every speciality
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-smooth hover:gap-2.5"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((s) => (
              <Link
                key={s.slug}
                to="/services"
                className="group overflow-hidden rounded-2xl border border-border bg-background shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft">
                      <s.icon className="h-4.5 w-4.5 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATIONS (BEFORE & AFTER) */}
      <TransformationsSection />

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Why choose us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Care you can trust, results you can feel
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group rounded-2xl border border-border bg-background p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <FAQs />

      {/* CTA */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-primary p-10 text-center shadow-glow sm:p-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to feel better?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/85">
            Book your appointment online or contact us directly - we'll find a time that works.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary shadow-soft transition-smooth hover:-translate-y-0.5"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-smooth hover:bg-primary-foreground/20"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
