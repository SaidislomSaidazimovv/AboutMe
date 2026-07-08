import { createContext, useContext, useEffect, useState } from "react";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Frontend Developer & AI Engineer \u00b7 Tashkent",
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
      labels: { focus: "Focus", location: "Location", status: "Status" },
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
      categories: {
        frontend: "Frontend",
        craft: "Styling & Motion",
        platform: "Backend & AI",
      },
    },
    projects: {
      eyebrow: "Selected Work",
      title: ["My Recent", "Projects"],
      liveDemo: "Live Demo",
      featured: "Featured",
      soon: "New projects coming soon. Stay tuned.",
      soonLink: "Live link coming soon",
    },
    contact: {
      eyebrow: "Get in Touch",
      title: ["Let\u2019s build", "something together"],
      sub: "I\u2019m always open to new opportunities, collaborations, or just a friendly chat.",
    },
    experience: {
      title: ["Experience &", "education"],
      now: "Now",
      items: [
        {
          period: "Aug 2025 - Present",
          role: "Frontend Developer & AI Engineer",
          org: "Freelance / Self-employed",
          location: "Tashkent",
          current: true,
          desc: "Shipped 5+ production web apps with React, Next.js, TypeScript and Tailwind. Built AI-powered features with Claude, Gemini and Groq, plus full-stack apps on Supabase and Vercel.",
        },
        {
          period: "Feb 2026 - Present",
          role: "Volunteer, Web & Design",
          org: "One Humanity Foundation",
          location: "Remote",
          current: true,
          desc: "Supporting a global 501(c)(3) humanitarian foundation with web and design work.",
        },
        {
          period: "Nov 2023 - Oct 2024",
          role: "Computer Software Engineering",
          org: "Najot Ta'lim",
          location: "Tashkent",
          current: false,
          desc: "Frontend-focused program: HTML, CSS, JavaScript, TypeScript, React, Git, and UI/UX. Completed with a Frontend Development Certificate (2024).",
        },
      ],
    },
    press: {
      title: "Featured in",
    },
    footer: {
      credit: "Designed & developed by Saidazimov Saidislom",
    },
  },
  uz: {
    nav: {
      home: "Bosh sahifa",
      about: "Men haqimda",
      experience: "Tajriba",
      skills: "Ko\u2018nikmalar",
      projects: "Loyihalar",
      contact: "Aloqa",
    },
    hero: {
      eyebrow: "Frontend Dasturchi & AI Muhandis \u00b7 Toshkent",
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
      labels: { focus: "Yo\u2018nalish", location: "Manzil", status: "Holat" },
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
      categories: {
        frontend: "Frontend",
        craft: "Dizayn & Animatsiya",
        platform: "Backend & AI",
      },
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
    experience: {
      title: ["Tajriba va", "ta'lim"],
      now: "Hozir",
      items: [
        {
          period: "Aug 2025 - Hozir",
          role: "Frontend Dasturchi & AI Muhandis",
          org: "Frilanser / O‘z ishi",
          location: "Toshkent",
          current: true,
          desc: "React, Next.js, TypeScript va Tailwind bilan 5+ ishlab chiqarish darajasidagi veb-ilova yaratdim. Claude, Gemini va Groq bilan AI funksiyalar, Supabase va Vercel’da full-stack ilovalar qurdim.",
        },
        {
          period: "Feb 2026 - Hozir",
          role: "Ko‘ngilli, Veb & Dizayn",
          org: "One Humanity Foundation",
          location: "Masofaviy",
          current: true,
          desc: "Global 501(c)(3) insonparvarlik jamg‘armasiga veb va dizayn ishlarida yordam beraman.",
        },
        {
          period: "Nov 2023 - Oct 2024",
          role: "Kompyuter Dasturiy Injiniringi",
          org: "Najot Ta'lim",
          location: "Toshkent",
          current: false,
          desc: "Frontend yo‘nalishiga ixtisoslashgan dastur: HTML, CSS, JavaScript, TypeScript, React, Git va UI/UX. Frontend Development sertifikati bilan yakunlandi (2024).",
        },
      ],
    },
    press: {
      title: "Matbuotda yoritilgan",
    },
    footer: {
      credit: "Saidazimov Saidislom tomonidan ishlab chiqilgan",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      experience: "Опыт",
      skills: "Навыки",
      projects: "Проекты",
      contact: "Контакты",
    },
    hero: {
      eyebrow: "Frontend-разработчик и AI-инженер · Ташкент",
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
      bio: "Я frontend-разработчик и AI-инженер из Ташкента. Увлечён созданием быстрых, элегантных веб-интерфейсов и умных приложений на основе ИИ. Для меня в приоритете чистый код и продуманный дизайн.",
      bioHighlights: ["frontend-разработчик и AI-инженер", "Ташкента"],
      focus: "Frontend и AI-инженерия",
      location: "Ташкент, Узбекистан",
      status: "Открыт к предложениям",
      labels: { focus: "Направление", location: "Локация", status: "Статус" },
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
      categories: {
        frontend: "Frontend",
        craft: "Стили и анимация",
        platform: "Backend и AI",
      },
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
    experience: {
      title: ["Опыт и", "образование"],
      now: "Сейчас",
      items: [
        {
          period: "Aug 2025 - н.в.",
          role: "Frontend-разработчик и AI-инженер",
          org: "Фриланс / Самозанятость",
          location: "Ташкент",
          current: true,
          desc: "Выпустил 5+ производственных веб-приложений на React, Next.js, TypeScript и Tailwind. Создавал AI-функции с Claude, Gemini и Groq, а также full-stack приложения на Supabase и Vercel.",
        },
        {
          period: "Feb 2026 - н.в.",
          role: "Волонтёр, веб и дизайн",
          org: "One Humanity Foundation",
          location: "Удалённо",
          current: true,
          desc: "Помогаю глобальному гуманитарному фонду 501(c)(3) в веб-разработке и дизайне.",
        },
        {
          period: "Nov 2023 - Oct 2024",
          role: "Разработка программного обеспечения",
          org: "Najot Ta'lim",
          location: "Ташкент",
          current: false,
          desc: "Программа со специализацией на frontend: HTML, CSS, JavaScript, TypeScript, React, Git и UI/UX. Завершена с сертификатом Frontend Development (2024).",
        },
      ],
    },
    press: {
      title: "Упоминания в прессе",
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
