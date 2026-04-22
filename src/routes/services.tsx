import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { services } from "@/lib/services";
import { whatsappLink } from "@/lib/clinic";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Phoenix Mediclinic, Sector 46 Gurugram" },
      { name: "description", content: "Hair treatment (PRP/GFC), skin & aesthetic care, homeopathy, cupping (Hijama) and physiotherapy at Phoenix Mediclinic, Gurugram." },
      { property: "og:title", content: "Our Services — Phoenix Mediclinic" },
      { property: "og:description", content: "Hair, skin, homeopathy, physiotherapy and Hijama — modern + holistic care under one roof." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our specialities
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Care across every <span className="text-gradient">speciality</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From advanced aesthetic procedures to time-tested natural therapies — discover treatments
            designed around you.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="mx-auto max-w-7xl space-y-20 px-5 py-20 lg:px-8 lg:py-28">
        {services.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <motion.article
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                reverse ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-primary opacity-15 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-card">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary">
                  <s.icon className="h-3.5 w-3.5" />
                  {s.tagline}
                </div>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft">
                        <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`Hi, I'd like to know more about ${s.title} at Phoenix Mediclinic.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-glow"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enquire on WhatsApp
                </a>
              </div>
            </motion.article>
          );
        })}
      </section>
    </>
  );
}
