import serviceHair from "@/assets/service-hair.jpg";
import serviceSkin from "@/assets/service-skin.jpg";
import serviceHomeopathy from "@/assets/service-homeopathy.jpg";
import serviceCupping from "@/assets/service-cupping.jpg";
import servicePhysio from "@/assets/service-physio.jpg";
import {
  Sparkles,
  Scissors,
  Leaf,
  CircleDot,
  Activity,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  image: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "hair-treatment",
    title: "Hair Treatment",
    tagline: "PRP, GFC & Scalp Care",
    description:
      "Advanced regenerative therapies for hair fall, thinning, and scalp disorders — restoring growth at the root.",
    bullets: ["PRP & GFC Therapy", "Hair fall & scalp disorders", "Customised hair growth plans"],
    image: serviceHair,
    icon: Scissors,
  },
  {
    slug: "skin-aesthetics",
    title: "Skin & Aesthetics",
    tagline: "Radiance, Refined",
    description:
      "Modern aesthetic procedures for clearer, brighter, healthier skin — performed with the latest technology.",
    bullets: ["Laser Hair Removal", "Carbon Laser Facial", "Hydra Facial"],
    image: serviceSkin,
    icon: Sparkles,
  },
  {
    slug: "homeopathy",
    title: "Homeopathy",
    tagline: "Gentle, Natural Healing",
    description:
      "Time-tested homeopathic care for chronic and acute conditions — safe, individualised treatment plans.",
    bullets: ["Chronic disease management", "Acute illness care", "Lifestyle counselling"],
    image: serviceHomeopathy,
    icon: Leaf,
  },
  {
    slug: "cupping",
    title: "Cupping (Hijama)",
    tagline: "Detox & Pain Relief",
    description:
      "Traditional cupping therapy practised with modern hygiene standards — relief from pain and deep detoxification.",
    bullets: ["Pain relief therapy", "Detoxification", "Improved circulation"],
    image: serviceCupping,
    icon: CircleDot,
  },
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    tagline: "Move Without Limits",
    description:
      "Personalised rehabilitation and mobility programmes — recover strength, posture, and pain-free movement.",
    bullets: ["Rehabilitation", "Mobility & posture care", "Sports & injury recovery"],
    image: servicePhysio,
    icon: Activity,
  },
];
