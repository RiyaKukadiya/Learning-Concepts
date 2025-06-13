import React from "react";
import Link from "next/link";

const Header = () => (
  <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
    <div className="text-xl font-bold">Learning Concepts</div>
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
  </header>
);

export default Header;