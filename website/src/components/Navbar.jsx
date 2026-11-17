
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import "../styles/navbar.css";

const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="navbar">
            <div className="navbar__container">

                <a
                    href="#home"
                    className="navbar__brand"
                    onClick={closeMenu}
                >
                    KODY<span>.</span>
                </a>

                <nav
                    className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
                    aria-label="Main navigation"
                >
                    {navigationLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    className="navbar__contact"
                >
                    Let's Talk
                    <ArrowUpRight size={16} />
                </a>

                <button
                    className="navbar__menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>

            </div>
        </header>
    );
}

export default Navbar;
