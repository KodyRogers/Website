
import { Code2, BriefcaseBusiness, Mail } from "lucide-react";

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/",
        icon: Code2,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: BriefcaseBusiness,
    },
    {
        label: "Email",
        href: "mailto:your-email@example.com",
        icon: Mail,
    },
];

function SocialLinks() {
    return (
        <div className="social-links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={label === "Email" ? undefined : "_blank"}
                    rel={label === "Email" ? undefined : "noopener noreferrer"}
                >
                    <Icon size={21} />
                </a>
            ))}
        </div>
    );
}

export default SocialLinks;
