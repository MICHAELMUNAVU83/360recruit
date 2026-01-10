import { Youtube, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/" },
  { label: "Products", href: "/" },
  { label: "Contact", href: "/" },
  { label: "About", href: "/" },
];

const socialLinks = [
  { icon: <Youtube size={20} />, url: "#" },
  { icon: <Facebook size={20} />, url: "#" },
  { icon: <Twitter size={20} />, url: "#" },
  { icon: <Instagram size={20} />, url: "#" },
  { icon: <Linkedin size={20} />, url: "#" },
];

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t-[6px] border-[#0092E4] py-16 px-4 flex flex-col items-center">
      <div className="max-w-7xl w-full flex flex-col items-center gap-10">
        <nav>
          <ul className="flex flex-row items-center justify-center gap-6 md:gap-10 text-white">
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="text-[15px] md:text-base hover:text-gray-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex flex-row items-center justify-center gap-6 text-white">
          {socialLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.url}
                className="hover:opacity-80 transition-opacity"
                aria-label="Social Link"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>

        <div className="text-white/90 text-center mt-2">
          <p className="text-[13px] md:text-[14px] tracking-wide font-light">
            360Recruit @ {year}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
