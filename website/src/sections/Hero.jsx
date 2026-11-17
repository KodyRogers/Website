
import {
    ArrowDown,
    ArrowDownRight,
    ArrowUpRight,
    MapPin,
} from "lucide-react";

import SocialLinks from "../components/SocialLinks";
import "../styles/hero.css";

function Hero() {
    return (
        <section className="hero" id="home">

            <div className="hero__grid-background" />

            <div className="hero__container">

                {/* Introduction */}

                <div className="hero__content">

                    <div className="hero__eyebrow">
                        <span>{"{"}</span>
                        SOFTWARE DEVELOPER
                        <span>{"}"}</span>
                    </div>

                    <h1 className="hero__title">
                        Building
                        <span className="hero__gradient-text">
                            digital
                        </span>
                        experiences<span className="hero__accent">.</span>
                    </h1>

                    <p className="hero__description">
                        I create thoughtful, scalable applications,
                        solve complex problems, and bring ideas to
                        life through code.
                    </p>

                    <div className="hero__actions">
                        <a href="#projects" className="hero__button hero__button--primary">
                            View Projects
                            <ArrowUpRight size={18} />
                        </a>

                        <a href="#about" className="hero__button hero__button--secondary">
                            About Me
                        </a>
                    </div>

                    <div className="hero__status">

                        <div className="hero__availability">
                            <span className="hero__status-dot" />
                            Available for opportunities
                        </div>

                        <div className="hero__location">
                            <MapPin size={18} />
                            Houston, TX
                        </div>

                    </div>

                    <SocialLinks />

                </div>

                {/* Technical visual */}

                <div className="hero__visual" aria-label="Abstract technical illustration">

                    <div className="hero__orb" />

                    <div className="hero__process">
                        <span>01 / DEVELOP</span>
                        <span>02 / BUILD</span>
                        <span>03 / DEPLOY</span>
                    </div>

                    <div className="hero__code-window">

                        <div className="hero__window-header">
                            <div className="hero__window-dots">
                                <span />
                                <span />
                                <span />
                            </div>

                            <span className="hero__window-title">
                                kody.dev
                            </span>
                        </div>

                        <div className="hero__code-content">
                            <div>
                                <span className="code-line-number">1</span>
                                <code>
                                    <span className="code-keyword">const</span>{" "}
                                    developer = {"{"}
                                </code>
                            </div>

                            <div>
                                <span className="code-line-number">2</span>
                                <code>
                                    name: <span className="code-string">"Kody"</span>,
                                </code>
                            </div>

                            <div>
                                <span className="code-line-number">3</span>
                                <code>
                                    focus: <span className="code-string">"software"</span>,
                                </code>
                            </div>

                            <div>
                                <span className="code-line-number">4</span>
                                <code>
                                    passion: <span className="code-string">"building"</span>,
                                </code>
                            </div>

                            <div>
                                <span className="code-line-number">5</span>
                                <code>
                                    available: <span className="code-keyword">true</span>
                                </code>
                            </div>

                            <div>
                                <span className="code-line-number">6</span>
                                <code>{"};"}</code>
                            </div>
                        </div>

                    </div>

                    <div className="hero__scroll">
                        SCROLL TO EXPLORE
                        <ArrowDown size={19} />
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;
