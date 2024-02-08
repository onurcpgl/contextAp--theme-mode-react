import React from "react";
import { MainContext, useContext } from "../context";
function Header() {
  const { theme, setTheme } = useContext(MainContext);

  return <div>Current Theme : {theme}</div>;
}

export default Header;
