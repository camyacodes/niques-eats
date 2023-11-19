import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Nique's Eats</h1>
        </Link>

        <nav className="text-center">
          <Link to="/Menu">Menu</Link>
          <Link to="/Login">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
