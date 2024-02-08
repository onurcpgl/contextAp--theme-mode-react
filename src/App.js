import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SwichTheme from "./components/SwichTheme";

import { MainContext } from "./context";
function App() {
  const localValue =
    localStorage.getItem("theme") === "light" ? "light" : "dark";
  const [theme, setTheme] = useState(localValue);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const data = {
    theme,
    setTheme,
  };

  return (
    <MainContext.Provider value={data}>
      <Header />
      <Footer />
      <SwichTheme />
    </MainContext.Provider>
  );
}

export default App;
