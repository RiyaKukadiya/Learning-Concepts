import React from "react";
import Link from "next/link";

const Header = () => (
  <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
    <div>
      <Link href="/" className="text-xl font-bold">
        Learning
      </Link>
    </div>
    <nav>
      <ul className="flex space-x-6">
        <li>
          <Link href="/http-status-code">HTTP Status Code</Link>
        </li>
         <li>
          <Link href="/http-status-code">React Hooks</Link>
        </li>
         <li>
          <Link href="/http-status-code">DNS System</Link>
        </li>
         <li>
          <Link href="/http-status-code">ES6</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;