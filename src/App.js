import React, { useState } from "react";
import "./App.css";

import menu from "./data/menu.json";

import Menu from "./components/Menu";
import ShoppingCart from "./components/ShoppingCart";
import Items from "./components/Items";

function App() {
  const [cartView, setCartView] = useState(false);

  return (
    <React.Fragment>
      <div id="sidemenu">
        <Menu menu={menu} />
      </div>

      <main>
        <Items />

        <ShoppingCart cartView={cartView} setCartView={setCartView} />
      </main>
    </React.Fragment>
  );
}

export default App;
