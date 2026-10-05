import React, { useEffect, useState } from "react";

import {
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* =========================================
     NAVBAR SCROLL EFFECT
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     MOBILE BODY LOCK
  ========================================= */

  useEffect(() => {
    document.body.style.overflow =
      isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =========================================
     MOBILE MENU
  ========================================= */

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* =========================================
          HEADER
      ========================================= */}

      <header
        className={`navbar-header ${
          isScrolled || isOpen
            ? "scrolled"
            : ""
        }`}
      >
        <div className="navbar-container">

          {/* =====================================
              LOGO
          ===================================== */}

          <a
            href="#home"
            className="navbar-brand"
            onClick={closeMenu}
          >
            <img
              className="navbar-brand-logo"
              src="/logo/mealmatchlogo.png"
              alt="Meal Match"
            />
          </a>


          {/* =====================================
              DESKTOP NAVIGATION
          ===================================== */}

          <nav className="navbar-links desktop-nav">

            <a
              href="#home"
              onClick={closeMenu}
            >
              Home
            </a>

            <a
              href="#menu"
              onClick={closeMenu}
            >
              Menu
            </a>

            <a
              href="#meal-match-plans"
              onClick={closeMenu}
            >
              Meal Plans
            </a>

            <a
              href="#faq"
              onClick={closeMenu}
            >
              FAQ
            </a>

          </nav>


          {/* =====================================
              NAVBAR ACTIONS
          ===================================== */}

          <div className="navbar-actions">

            <a
              href="#meal-match-plans"
              className="navbar-cta-btn desktop-action"
              onClick={closeMenu}
            >
              Get Matched
            </a>


            <button
              type="button"
              className="navbar-profile-icon desktop-action"
              aria-label="User profile"
            >
              <FaUser />
            </button>


            <button
              type="button"
              className="navbar-hamburger"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}
            </button>

          </div>

        </div>
      </header>


      {/* =========================================
          MOBILE OVERLAY
      ========================================= */}

      <div
        className={`mobile-menu-overlay ${
          isOpen ? "active" : ""
        }`}
        onClick={closeMenu}
      />


      {/* =========================================
          MOBILE DRAWER
      ========================================= */}

      <div
        className={`mobile-menu-drawer ${
          isOpen ? "active" : ""
        }`}
      >

        <div className="mobile-drawer-header">

          <span>
            Menu
          </span>

          <button
            type="button"
            className="mobile-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

        </div>


        {/* =====================================
            MOBILE NAVIGATION
        ===================================== */}

        <nav className="mobile-nav-links">

          <a
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#menu"
            onClick={closeMenu}
          >
            Menu
          </a>

          <a
            href="#meal-match-plans"
            onClick={closeMenu}
          >
            Meal Plans
          </a>

          <a
            href="#faq"
            onClick={closeMenu}
          >
            FAQ
          </a>

        </nav>


        {/* =====================================
            MOBILE CTA
        ===================================== */}

        <div className="mobile-menu-actions">

          <a
            href="#meal-match-plans"
            className="mobile-get-matched"
            onClick={closeMenu}
          >
            Get Matched
          </a>

        </div>

      </div>
    </>
  );
};

export default Navbar;