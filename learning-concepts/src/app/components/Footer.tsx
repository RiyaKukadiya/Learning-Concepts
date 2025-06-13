import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-4 px-6 mt-10">
    <div className="flex justify-between items-center">
      <span>&copy; {new Date().getFullYear()} Learning Concepts</span>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/http-status-code">HTTP Status Code</Link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;