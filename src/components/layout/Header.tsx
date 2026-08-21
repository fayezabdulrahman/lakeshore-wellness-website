import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router";
import { BookingLink } from "../shared/BookingLink";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.hash, location.pathname]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Logo />
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          className={open ? "site-nav is-open" : "site-nav"}
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive && !location.hash ? "active" : ""
            }
          >
            Home
          </NavLink>
          <Link
            to="/#about"
            className={
              location.pathname === "/" && location.hash === "#about"
                ? "active"
                : undefined
            }
          >
            About
          </Link>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <BookingLink className="button button-small" />
        </nav>
      </div>
    </header>
  );
}
