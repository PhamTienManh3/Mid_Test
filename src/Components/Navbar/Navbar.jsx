import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <h1>Anonime</h1>
      <p>Home</p>
      <p>List anime</p>
      <form className="d-flex" role="search">
        <input
          id="formAnime"
          className="form-control me-2"
          type="search"
          placeholder="Search anime or movie"
          aria-label="Search"
        />
      </form>
    </div>
  );
};

export default Navbar;
