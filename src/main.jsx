import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
