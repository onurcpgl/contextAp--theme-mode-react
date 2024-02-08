import { useContext, MainContext } from "../context";
function SwichTheme() {
  const { theme, setTheme } = useContext(MainContext);

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };
  return <div onClick={switchTheme}>change</div>;
}

export default SwichTheme;
