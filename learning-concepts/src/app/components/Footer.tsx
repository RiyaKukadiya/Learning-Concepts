import React from "react";
import Link from "next/link";

const footerMenus = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Integrations", href: "/integrations" },
      { name: "API", href: "/api" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Press", href: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "Contact", href: "/contact" },
      { name: "Status", href: "/status" },
      { name: "Documentation", href: "/docs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
];

const Footer = () => (
  <footer className=" bg-gray-900 text-white py-16 px-8 mt-10">
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
      {footerMenus.map((menu, idx) => (
        <div key={idx}>
          <h3 className="text-lg font-semibold mb-4">{menu.title}</h3>
          <ul className="space-y-2">
            {menu.links.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="hover:underline text-gray-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-8 text-gray-400 text-sm">
      <span>&copy; {new Date().getFullYear()} Learning Concepts. All rights reserved.</span>
      <span>Made with ❤️ for learning.</span>
    </div>
  </footer>
);

export default Footer;