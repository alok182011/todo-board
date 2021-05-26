import React from "react";
import { Header } from "semantic-ui-react";

import "./Navbar.css";

function Navbar() {
  return (
    <Header as="h1" icon textAlign="center" style={{ marginTop: 50 }}>
      <span className="navbar-flux">Todo-</span>
      <span className="navbar-neon">-Board</span>
    </Header>
  );
}

export default Navbar;
