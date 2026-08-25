import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <Logo />
          <p>
            Thoughtful wellbeing experiences for people, teams and communities.
          </p>
        </div>
        <div className="footer-links">
          <strong>Explore</strong>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
        <div className="footer-links">
          <strong>Contact</strong>
          <a href="mailto:yvonne@workspacewellness.ie">
            <Mail size={16} /> yvonne@workspacewellness.ie
          </a>
          <a href="tel:+353870528191">
            <Phone size={16} /> +353 87 052 8192
          </a>
          <div className="socials">
            <a
              href="https://www.instagram.com/workspacewellness.ie/"
              target="_blank"
              rel="noreferrer"
              aria-label="Workspace Wellness on Instagram"
            >
              <Instagram />
            </a>
            <a
              href="https://www.linkedin.com/in/yvonne-skelly-1ba00b247/"
              target="_blank"
              rel="noreferrer"
              aria-label="Yvonne Skelly on LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Workspace Wellness</span>
        <span>West Wicklow, Ireland</span>
      </div>
    </footer>
  );
}
