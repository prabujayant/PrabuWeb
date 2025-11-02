import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ThemeContext from "./context/ThemeContext";
import "./style.css";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    const stored = window.localStorage.getItem("prefers-theme");
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    if (typeof window.matchMedia === "function") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
      if (mediaQuery && typeof mediaQuery.matches === "boolean") {
        return mediaQuery.matches ? "light" : "dark";
      }
    }
    return "dark";
  });

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem("prefers-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const themeValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={themeValue}>
      <Router>
        <div className="app-shell">
          <Navbar />
          <ScrollToTop />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
