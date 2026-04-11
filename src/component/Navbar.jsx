import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const linkBase = {
  color: "inherit",
  textDecoration: "none",
  opacity: 0.9,
  fontSize: "15px",
  cursor: "pointer",
};

const MOBILE_MAX = 900;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onResize = () => {
      if (window.innerWidth > MOBILE_MAX) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navRoot">
        <style>{css}</style>
        <div className="navBar">
          <Link to="/" className="navBrand" onClick={closeMenu}>
            <h2 className="navLogo">
              MER<span className="navLogoAccent">A</span>KII
            </h2>
            <p className="navTagline">KEY TO INNOVATION</p>
          </Link>

          <nav className="navDesktop" aria-label="Main">
            <Link to="/" style={linkBase}>
              Home
            </Link>
            <span className="navMenuText">About</span>
            <span className="navMenuText">Services</span>
            <span className="navMenuText">Portfolio</span>
            <span className="navMenuText">Clients</span>
            <Link to="/contact" style={{ ...linkBase, fontWeight: 600 }}>
              Contact
            </Link>
          </nav>

          <button
            type="button"
            className="navHamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className={menuOpen ? "navHamburgerLine navHamburgerLine--open1" : "navHamburgerLine"} />
            <span className={menuOpen ? "navHamburgerLine navHamburgerLine--open2" : "navHamburgerLine"} />
            <span className={menuOpen ? "navHamburgerLine navHamburgerLine--open3" : "navHamburgerLine"} />
          </button>
        </div>

        {menuOpen ? (
          <div className="navDrawer" role="dialog" aria-modal="true" aria-label="Mobile menu">
            <button type="button" className="navDrawerBackdrop" aria-label="Close menu" onClick={closeMenu} />
            <div className="navDrawerPanel">
              <Link to="/" className="navDrawerLink" onClick={closeMenu}>
                Home
              </Link>
              <span className="navDrawerMuted">About</span>
              <span className="navDrawerMuted">Services</span>
              <span className="navDrawerMuted">Portfolio</span>
              <span className="navDrawerMuted">Clients</span>
              <Link to="/contact" className="navDrawerLink navDrawerLink--emphasis" onClick={closeMenu}>
                Contact
              </Link>
            </div>
          </div>
        ) : null}
      </header>
      <div className="navRootSpacer" aria-hidden="true" />
    </>
  );
}

const css = `
.navRoot{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  width: 100%;
  box-sizing: border-box;
}
.navRootSpacer{
  height: calc(36px + 1.45rem + 4px + 11px);
  min-height: 72px;
  flex-shrink: 0;
  pointer-events: none;
}
.navBar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px clamp(16px, 4vw, 40px);
  background: #000;
  color: #fff;
  gap: 16px;
}
.navBrand{
  text-decoration: none;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 4px;
  line-height: 1.1;
  flex-shrink: 0;
  min-width: 0;
}
/* Override global h2 color (var(--text-h)) so logo stays readable on black */
.navLogo{
  margin: 0;
  padding: 0;
  color: #ffffff;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  font-weight: 800;
  font-size: clamp(1.15rem, 2.8vw, 1.45rem);
  letter-spacing: 0.2em;
  line-height: 1.05;
  text-transform: uppercase;
  text-shadow: 0 1px 2px rgba(0,0,0,0.45);
}
.navLogoAccent{
  color: #3eb4bd;
  text-shadow: 0 1px 2px rgba(0,0,0,0.35);
}
.navTagline{
  margin: 0;
  font-size: 10px;
  letter-spacing: 0.26em;
  color: rgba(255,255,255,0.92);
  font-weight: 500;
  text-transform: uppercase;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}
.navDesktop{
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
}
.navMenuText{
  opacity: 0.9;
  font-size: 15px;
  cursor: default;
}
.navHamburger{
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 44px;
  height: 44px;
  padding: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 8px;
}
.navHamburger:hover{
  background: rgba(255,255,255,0.08);
}
.navHamburgerLine{
  display: block;
  width: 22px;
  height: 2px;
  background: #fff;
  border-radius: 1px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.navHamburgerLine--open1{
  transform: translateY(8px) rotate(45deg);
}
.navHamburgerLine--open2{
  opacity: 0;
}
.navHamburgerLine--open3{
  transform: translateY(-8px) rotate(-45deg);
}
@media (max-width: 900px){
  .navDesktop{
    display: none;
  }
  .navHamburger{
    display: flex;
  }
}
.navDrawer{
  position: fixed;
  inset: 0;
  z-index: 250;
  pointer-events: auto;
}
.navDrawerBackdrop{
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.45);
  border: none;
  cursor: pointer;
}
.navDrawerPanel{
  position: absolute;
  top: 0;
  right: 0;
  width: min(300px, 88vw);
  height: 100%;
  background: #0a0a0a;
  border-left: 1px solid rgba(255,255,255,0.1);
  padding: 88px 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  box-shadow: -12px 0 40px rgba(0,0,0,0.4);
  animation: navDrawerIn 0.22s ease-out;
}
@keyframes navDrawerIn{
  from{ transform: translateX(100%); opacity: 0.9; }
  to{ transform: translateX(0); opacity: 1; }
}
.navDrawerLink{
  color: #fff;
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 500;
}
.navDrawerLink--emphasis{
  font-weight: 700;
}
.navDrawerMuted{
  color: rgba(255,255,255,0.65);
  font-size: 1.02rem;
  cursor: default;
}
`;

export default Navbar;
