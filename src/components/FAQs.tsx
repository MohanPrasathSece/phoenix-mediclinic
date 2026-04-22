import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Where is Phoenix Mediclinic located?",
    a: "We are at 1168, Sector 46, Gurugram, Haryana — easily accessible from across the city with parking available.",
  },
  {
    q: "What are your clinic hours?",
    a: "We are open Monday to Saturday, 10 AM – 8 PM. Sunday consultations are available by prior appointment.",
  },
  {
    q: "How can I book an appointment?",
    a: "You can book directly via our online appointment page, message us on WhatsApp, or call +91 83360 05000. Walk-ins are also welcome subject to availability.",
  },
  {
    q: "Do you offer holistic and natural treatments?",
    a: "Yes. Alongside modern medical care, we offer homeopathy, physiotherapy and Hijama cupping therapy for a complete, natural approach to healing.",
  },
  {
    q: "Are your treatments safe and hygienic?",
    a: "Absolutely. We follow strict sterilisation and hygiene protocols, use certified equipment, and our team is fully qualified to deliver care safely.",
  },
  {
    q: "Is consultation required before a treatment?",
    a: "Yes — every treatment begins with a personalised consultation so our doctors can recommend the safest and most effective plan for you.",
  },
];

export function FAQs() {
  return (
    <section className="bg-gradient-soft py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">FAQs</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Questions, answered
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Everything you need to know before your visit. Still curious? We're a WhatsApp away.
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((item, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-2xl border border-border bg-background shadow-soft transition-smooth hover:border-primary/40"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-display text-base font-semibold text-foreground sm:text-lg">
                    {item.q}
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-sm leading-relaxed text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="px-6 pb-5">{item.a}</div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
