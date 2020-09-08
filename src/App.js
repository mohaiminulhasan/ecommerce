import React from 'react';
import './App.css'

import menu from './menu.json'
import Menu from './Menu'

function App() {
  return (
    <React.Fragment>
      <div id="sidemenu">
        <Menu menu={menu} />
      </div>

      <main>
        Content here
      </main>
    </React.Fragment>
  );
}

export default App;
