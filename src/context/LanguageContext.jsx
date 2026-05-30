import { createContext, useContext, useEffect, useState } from "react";

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
      eyebrow: "Frontend Developer & AI Engineer \u2014 Tashkent, Uzbekistan",
      roles: [
        "Frontend Developer",
        "AI Engineer",
        "React Developer",
        "TypeScript Developer",
        "Next.js Developer",
      ],
      btn1: "Download CV",
      btn2: "View Projects",
      stat1: { num: "1+", label: "Years of Experience" },
      stat2: { num: "5+", label: "Projects Shipped" },
      stat3: { num: "\u221E", label: "Passion for Code" },
    },
    about: {
      eyebrow: "About Me",
      title: ["Building interfaces", "people love to use"],
      bio: "I\u2019m a frontend developer and AI engineer from Tashkent, passionate about crafting fast, elegant web experiences and building intelligent, AI-powered applications. Clean code and thoughtful design are my priorities.",
      bioHighlights: ["frontend developer and AI engineer", "Tashkent"],
      focus: "Frontend & AI Engineering",
      location: "Tashkent, Uzbekistan",
      status: "Open to opportunities",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind",
        "Supabase",
        "Framer",
        "AI Integration",
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
      soon: "New projects coming soon — stay tuned.",
      soonLink: "Live link coming soon",
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
      eyebrow: "Frontend Dasturchi & AI Muhandis \u2014 Toshkent, O\u2018zbekiston",
      roles: [
        "Frontend Dasturchi",
        "AI Muhandis",
        "React Dasturchi",
        "TypeScript Dasturchi",
        "Next.js Dasturchi",
      ],
      btn1: "CV Yuklab olish",
      btn2: "Loyihalar",
      stat1: { num: "1+", label: "Yillik tajriba" },
      stat2: { num: "5+", label: "Tayyor loyiha" },
      stat3: { num: "\u221E", label: "Kod ishqi" },
    },
    about: {
      eyebrow: "Men Haqimda",
      title: ["Insonlar sevadigan", "interfeyslar yarataman"],
      bio: "Men Toshkentlik frontend dasturchi va AI muhandisiman. Tez, nafis veb-tajribalar yaratish va aqlli, sun\u2019iy intellektga asoslangan ilovalar qurishga ixtisoslashganman. Toza kod va o\u2018ylab ishlangan dizayn mening ustuvorligim.",
      bioHighlights: ["frontend dasturchi va AI muhandisiman", "Toshkentlik"],
      focus: "Frontend va AI Muhandisligi",
      location: "Toshkent, O\u2018zbekiston",
      status: "Ish takliflariga ochiqman",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind",
        "Supabase",
        "Framer",
        "AI Integration",
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
      soon: "Yangi loyihalar tez orada.",
      soonLink: "Havola tez orada",
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
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      contact: "Контакты",
    },
    hero: {
      eyebrow: "Frontend-разработчик и AI-инженер — Ташкент, Узбекистан",
      roles: [
        "Frontend-разработчик",
        "AI-инженер",
        "React-разработчик",
        "TypeScript-разработчик",
        "Next.js-разработчик",
      ],
      btn1: "Скачать резюме",
      btn2: "Проекты",
      stat1: { num: "1+", label: "Год опыта" },
      stat2: { num: "5+", label: "Проектов сдано" },
      stat3: { num: "∞", label: "Страсть к коду" },
    },
    about: {
      eyebrow: "Обо мне",
      title: ["Создаю интерфейсы,", "которые любят"],
      bio: "Я frontend-разработчик и AI-инженер из Ташкента. Увлечён созданием быстрых, элегантных веб-интерфейсов и умных приложений на основе ИИ. Чистый код и продуманный дизайн — мои приоритеты.",
      bioHighlights: ["frontend-разработчик и AI-инженер", "Ташкента"],
      focus: "Frontend и AI-инженерия",
      location: "Ташкент, Узбекистан",
      status: "Открыт к предложениям",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind",
        "Supabase",
        "Framer",
        "AI Integration",
      ],
    },
    skills: {
      eyebrow: "Технические навыки",
      title: ["Технологии,", "с которыми работаю"],
      toolsTitle: "Инструменты",
    },
    projects: {
      eyebrow: "Избранные работы",
      title: ["Мои последние", "проекты"],
      liveDemo: "Открыть",
      featured: "Избранное",
      soon: "Скоро новые проекты.",
      soonLink: "Ссылка скоро",
    },
    contact: {
      eyebrow: "Связаться",
      title: ["Давайте создадим", "что-то вместе"],
      sub: "Я всегда открыт к новым возможностям, сотрудничеству или просто дружеской беседе.",
    },
    footer: {
      credit: "Разработано Саидазимовым Саидисломом",
    },
  },
};

const LANGS = ["en", "uz", "ru"];

const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

const getInitialLang = () => {
  try {
    const saved = localStorage.getItem("lang");
    if (saved && LANGS.includes(saved)) return saved;
  } catch {
    // ignore storage failures
  }
  return "en";
};

// eslint-disable-next-line react/prop-types
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);
  const setLanguage = (code) => setLang(code);
  const toggle = () =>
    setLang((l) => LANGS[(LANGS.indexOf(l) + 1) % LANGS.length]);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // ignore storage failures
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];
  return (
    <LanguageContext.Provider
      value={{ lang, langs: LANGS, setLanguage, toggle, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
