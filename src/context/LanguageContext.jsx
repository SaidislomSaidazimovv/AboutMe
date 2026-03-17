import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Frontend Developer \u2014 Tashkent, Uzbekistan",
      roles: [
        "React Developer",
        "TypeScript Developer",
        "Next.js Developer",
        "UI Engineer",
      ],
      btn1: "Download CV",
      btn2: "View Projects",
      stat1: { num: "17", label: "Years of Age" },
      stat2: { num: "3+", label: "Projects Shipped" },
      stat3: { num: "\u221E", label: "Passion for Code" },
    },
    about: {
      eyebrow: "About Me",
      title: ["Building interfaces", "people love to use"],
      bio: "I\u2019m a frontend developer from Tashkent, passionate about crafting fast, elegant, and accessible web experiences. Clean code and thoughtful design are my priorities.",
      bioHighlights: ["frontend developer", "Tashkent"],
      focus: "Frontend Development",
      location: "Tashkent, Uzbekistan",
      status: "Open to opportunities",
      tags: [
        "HTML & CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind",
        "Redux",
        "Node.js",
      ],
    },
    skills: {
      eyebrow: "Technical Skills",
      title: ["Technologies I", "work with"],
      toolsTitle: "Tools",
    },
    projects: {
      eyebrow: "Selected Work",
      title: ["My Recent", "Projects"],
      liveDemo: "Live Demo",
      featured: "Featured",
    },
    contact: {
      eyebrow: "Get in Touch",
      title: ["Let\u2019s build", "something together"],
      sub: "I\u2019m always open to new opportunities, collaborations, or just a friendly chat.",
    },
    footer: {
      credit: "Designed & developed by Saidazimov Saidislom",
    },
  },
  uz: {
    nav: {
      home: "Bosh sahifa",
      about: "Men haqimda",
      skills: "Ko\u2018nikmalar",
      projects: "Loyihalar",
      contact: "Aloqa",
    },
    hero: {
      eyebrow: "Frontend Dasturchi \u2014 Toshkent, O\u2018zbekiston",
      roles: [
        "React Dasturchi",
        "TypeScript Dasturchi",
        "Next.js Dasturchi",
        "UI Muhandis",
      ],
      btn1: "CV Yuklab olish",
      btn2: "Loyihalar",
      stat1: { num: "17", label: "Yoshda" },
      stat2: { num: "3+", label: "Tayyor loyiha" },
      stat3: { num: "\u221E", label: "Kod ishqi" },
    },
    about: {
      eyebrow: "Men Haqimda",
      title: ["Insonlar sevadigan", "interfeyslar yarataman"],
      bio: "Men Toshkentlik frontend dasturchiman. Tez, nafis va qulay veb-ilovalar yaratishga ixtisoslashganman. Toza kod va o\u2018ylab ishlanadigan dizayn mening ustuvorligim.",
      bioHighlights: ["frontend dasturchiman", "Toshkentlik"],
      focus: "Frontend Dasturlash",
      location: "Toshkent, O\u2018zbekiston",
      status: "Ish takliflariga ochiqman",
      tags: [
        "HTML & CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind",
        "Redux",
        "Node.js",
      ],
    },
    skills: {
      eyebrow: "Texnik Ko\u2018nikmalar",
      title: ["Ishlatadigan", "Texnologiyalarim"],
      toolsTitle: "Asboblar",
    },
    projects: {
      eyebrow: "Tanlangan Ishlar",
      title: ["So\u2018nggi", "Loyihalarim"],
      liveDemo: "Ko\u2018rish",
      featured: "Tanlangan",
    },
    contact: {
      eyebrow: "Bog\u2018laning",
      title: ["Keling, birgalikda", "quraylik"],
      sub: "Yangi imkoniyatlar, hamkorlik yoki shunchaki suhbat uchun murojaat qiling.",
    },
    footer: {
      credit: "Saidazimov Saidislom tomonidan ishlab chiqilgan",
    },
  },
};

const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

// eslint-disable-next-line react/prop-types
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const toggle = () => setLang((l) => (l === "en" ? "uz" : "en"));
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
