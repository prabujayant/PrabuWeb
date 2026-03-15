import React from "react";
import { Github, Linkedin, MessageCircle } from "lucide-react";
import { contact, profile } from "../data/profile";

const linkMap = Object.fromEntries(profile.links.map((item) => [item.label, item.url]));

const footerLinks = [
  linkMap.GitHub && { label: "GitHub", url: linkMap.GitHub, icon: Github },
  linkMap.LinkedIn && { label: "LinkedIn", url: linkMap.LinkedIn, icon: Linkedin },
  { label: "Email", url: contact.email, icon: MessageCircle },
].filter(Boolean);

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__copy">
          <strong>Prabu Jayant</strong>
          <span>&copy; {year} Crafted for thoughtful teams, practical AI, and reliable systems.</span>
        </div>
        <div className="footer__links" aria-label="Social links">
          {footerLinks.map(({ label, url, icon: Icon }) => (
            <a key={label} href={url} target="_blank" rel="noreferrer">
              <span className="visually-hidden">{label}</span>
              <Icon size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
