import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calendar, ChevronLeft, ChevronRight, Maximize2, X, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/clinic";
import { Link } from "@tanstack/react-router";

export interface TransformationItem {
  id: number;
  image: string;
  title: string;
  technique: string;
  category: string;
  highlights: string[];
  grafts?: string;
}

export const transformations: TransformationItem[] = [
  {
    id: 1,
    image: "/transformations/transformation-1.jpeg",
    title: "Hairline & Frontal Density Restoration",
    technique: "Sapphire FUE",
    category: "Hairline Design",
    highlights: ["Natural Hairline", "Improved Hair Density", "Minimal Scars"],
    grafts: "2,500+ Grafts",
  },
  {
    id: 2,
    image: "/transformations/transformation-2.jpeg",
    title: "Frontal Hairline Reconstruction & Crown Density",
    technique: "FUE Transplant",
    category: "High Density",
    highlights: ["Natural Hairline Designing", "High Density", "Long Lasting Results"],
    grafts: "3,000+ Grafts",
  },
  {
    id: 3,
    image: "/transformations/transformation-3.jpeg",
    title: "Receding Hairline Correction & High Density Fill",
    technique: "Advanced FUE",
    category: "Hairline Design",
    highlights: ["Natural Line", "Maximum Coverage", "Boosts Confidence"],
    grafts: "2,800+ Grafts",
  },
  {
    id: 4,
    image: "/transformations/transformation-4.jpeg",
    title: "Personalized Top Hairline & Density Treatment",
    technique: "Personalized Care",
    category: "Personalized",
    highlights: ["Individual Treatment Plan", "Hairline Assessment", "Post-Procedure Support"],
    grafts: "2,200+ Grafts",
  },
  {
    id: 5,
    image: "/transformations/transformation-5.jpeg",
    title: "Dense FUE Hair Transplant Transformation",
    technique: "High Density FUE",
    category: "High Density",
    highlights: ["Sapphire FUE", "Minimal Downtime", "Permanent Results"],
    grafts: "3,200+ Grafts",
  },
];

export function TransformationsSection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Hairline Design", "High Density", "Personalized"];

  const filteredItems = activeTab === "All"
    ? transformations
    : transformations.filter((item) => item.category === activeTab);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % transformations.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + transformations.length) % transformations.length
      );
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary-soft/30 to-background py-20 lg:py-28">
      {/* Background glowing shapes */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-primary-glow/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Real Patient Transformations
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Proven Hair Transplant <span className="text-gradient">Before & After Results</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore real hairline restorations achieved at Phoenix Mediclinic Gurugram using state-of-the-art FUE & Sapphire FUE techniques.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-gradient-primary text-primary-foreground shadow-soft scale-105"
                    : "border border-border bg-background/80 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => {
            const globalIndex = transformations.findIndex((t) => t.id === item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-glow"
              >
                {/* Image Container - Completely Clean Image without Text Overlays */}
                <div
                  className="relative cursor-pointer overflow-hidden bg-slate-900/5 group"
                  onClick={() => openLightbox(globalIndex)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Subtle hover overlay to view full size */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md shadow-lg transition-transform group-hover:scale-105">
                      <Maximize2 className="h-4 w-4" />
                      View Full Image
                    </span>
                  </div>
                </div>

                {/* Card Content Below the Image */}
                <div className="p-6 flex flex-col flex-1 justify-between bg-card">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {item.technique}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                        <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                        Verified Result
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-foreground leading-snug">
                      {item.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1 rounded-md bg-muted/80 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                        >
                          <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border/60 flex items-center justify-between">
                    <button
                      onClick={() => openLightbox(globalIndex)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-all group-hover:gap-2"
                    >
                      <span>Full Poster View</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                    <a
                      href={whatsappLink(
                        `Hi Phoenix Mediclinic, I am interested in Hair Transplant Result #${item.id} (${item.title}) and would like to book a consultation.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-whatsapp hover:underline"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      Inquire
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary-soft to-primary/10 p-8 text-center sm:flex-row sm:text-left lg:p-10 shadow-soft"
        >
          <div>
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Free Scalp & Hairline Consultation
              </span>
            </div>
            <h3 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">
              Want a hairline transformation tailored for you?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Book a consultation with our experienced doctor at Sector 46, Gurugram.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              <Calendar className="h-4 w-4" />
              Book Consultation
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:border-whatsapp hover:text-whatsapp"
            >
              <MessageCircle className="h-4 w-4 text-whatsapp" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-h-[95vh] max-w-4xl overflow-hidden rounded-2xl bg-card border border-border shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition-transform hover:scale-110"
                aria-label="Close Modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Prev / Next Nav Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition-transform hover:scale-110"
                aria-label="Previous Image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition-transform hover:scale-110"
                aria-label="Next Image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Display */}
              <div className="relative flex flex-1 max-h-[80vh] items-center justify-center overflow-auto bg-black/95 p-3">
                <img
                  src={transformations[selectedImageIndex].image}
                  alt={transformations[selectedImageIndex].title}
                  className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain"
                />
              </div>

              {/* Footer info in Modal */}
              <div className="flex flex-col gap-4 bg-card p-5 sm:flex-row sm:items-center sm:justify-between border-t border-border">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {transformations[selectedImageIndex].technique}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Result {selectedImageIndex + 1} of {transformations.length}
                    </span>
                  </div>
                  <h4 className="mt-1 font-display text-base font-bold text-foreground">
                    {transformations[selectedImageIndex].title}
                  </h4>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={whatsappLink(
                      `Hi Phoenix Mediclinic, I saw Transformation #${selectedImageIndex + 1} (${transformations[selectedImageIndex].title}) on your website and would like to consult with your doctor.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-soft transition-all hover:scale-105"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Inquire About This Result
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
