import {
  Banknote,
  Brain,
  HeartHandshake,
  Leaf,
  PersonStanding,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const calendlyUrl =
  "https://calendly.com/contact-xai/30min?month=2026-07";

export type Offer = {
  title: string;
  eyebrow: string;
  description: string;
  detail: string;
};

export const offers: Offer[] = [
  {
    eyebrow: "Programmes",
    title: "Bespoke workplace wellness",
    description:
      "Four, eight or twelve-part programmes shaped around your people, culture and wellbeing goals.",
    detail:
      "Combine practical masterclasses, movement, restorative sessions and meaningful team experiences across the year.",
  },
  {
    eyebrow: "Experiences",
    title: "One-off moments that matter",
    description:
      "Engaging talks, masterclasses and team activities for meetings, conferences and company events.",
    detail:
      "Every session is tailored to the room — useful, experiential and easy to bring back into everyday working life.",
  },
  {
    eyebrow: "Retreats",
    title: "Private retreats",
    description:
      "One-day or residential experiences curated for small teams and private groups of 6–20 people.",
    detail:
      "A thoughtful blend of rest, movement, nature, connection and specialist support, designed together with you.",
  },
];

export type ServiceCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  services: { name: string; summary: string }[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Mindset & resilience",
    description:
      "Practical ways to meet change with greater confidence, connection and clarity.",
    icon: Brain,
    services: [
      {
        name: "Building resilience & positive mindset",
        summary:
          "Yvonne Skelly weaves connection, movement and presence into an experiential session for navigating challenge and uncertainty.",
      },
      {
        name: "Self-care & stress relief",
        summary:
          "Immediate, usable strategies that help teams recognise stress, reduce overwhelm and create healthier working rhythms.",
      },
    ],
  },
  {
    title: "Calm & nervous-system support",
    description:
      "Simple restorative practices for focus, sleep, balance and everyday regulation.",
    icon: Sparkles,
    services: [
      {
        name: "Breathwork for nervous-system regulation",
        summary:
          "Accessible breathing practices for morning energy, better sleep and moments of overwhelm.",
      },
      {
        name: "Meditation for beginners",
        summary:
          "A practical introduction that demystifies meditation and supports focus, creativity, confidence and calm.",
      },
      {
        name: "Sound bath meditation",
        summary:
          "A deeply restful guided experience using gongs, bowls, bells and voice to invite stillness and restoration.",
      },
    ],
  },
  {
    title: "Movement & physical wellbeing",
    description:
      "Inclusive, energising sessions that help people release tension and reconnect with the body.",
    icon: PersonStanding,
    services: [
      {
        name: "Yoga & somatic movement",
        summary:
          "Gentle chair or mat-based movement, with optional breathwork and meditation, adapted to your team.",
      },
      {
        name: "Laughter yoga",
        summary:
          "A playful, inclusive experience designed to lift mood, reduce stress and strengthen connection.",
      },
    ],
  },
  {
    title: "Inclusive life-stage wellbeing",
    description:
      "Supportive conversations that make room for real experiences and healthier workplace cultures.",
    icon: HeartHandshake,
    services: [
      {
        name: "A holistic approach to menopause",
        summary:
          "Susannah Morrissey explores holistic and mindfulness tools that support emotional, mental and physical wellbeing.",
      },
      {
        name: "Wellbeing strategies for men",
        summary:
          "Warren Bowden shares practical tools for stress, emotional resilience, communication and high-pressure environments.",
      },
    ],
  },
  {
    title: "Nutrition & financial wellbeing",
    description:
      "Whole-person support for two important influences on confidence, energy and performance.",
    icon: Banknote,
    services: [
      {
        name: "Financial wellbeing",
        summary:
          "An interactive session with Shane O’Toole covering budgeting, money mindset, investment, retirement and debt management.",
      },
      {
        name: "Nutrition & mindset optimisation",
        summary:
          "Colman Power brings nutrition, nature connection and active living together to support focus and performance.",
      },
    ],
  },
  {
    title: "On-site treatments",
    description:
      "Quiet one-to-one moments of care, delivered in person in your workplace.",
    icon: Leaf,
    services: [
      {
        name: "Private one-to-one therapies",
        summary:
          "Options include neck, shoulder and back massage, Indian head massage, reflexology, acupuncture, energy and sound healing.",
      },
    ],
  },
];

export type Client = {
  name: string;
  logo?: string;
};

export const clients: Client[] = [
  { name: "Deloitte", logo: "/logos/deloitte.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "TU Dublin" },
  { name: "Tusla", logo: "/logos/tusla.png" },
  { name: "Fidelity Investments" },
  { name: "ISG" },
  { name: "Zest AI", logo: "/logos/zest-ai.png" },
];
