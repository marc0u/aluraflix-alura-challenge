"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./Nav.css";

const Nav = () => {
  const [showNav, handleShowNav] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShowNav(true);
    } else {
      handleShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${showNav && "nav_black"}`}>
      <div className="nav_contents">
        <Link href="/">
          <img className="nav_logo" src="logo.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
