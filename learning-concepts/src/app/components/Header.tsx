"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > 80) {
        headerRef.current.classList.remove("full-width-header");
        headerRef.current.classList.add("short-header");
      } else {
        headerRef.current.classList.add("full-width-header");
        headerRef.current.classList.remove("short-header");
      }
    };
    // Set initial state
    if (headerRef.current) {
      headerRef.current.classList.add("full-width-header");
      headerRef.current.classList.remove("short-header");
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="bg-gray-900 text-white py-4 px-6 shadow-lg transition-all duration-500"
    >
      <div className="container mx-auto flex flex-row justify-between items-center">
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
              <Link href="/react-hook">React Hooks</Link>
            </li>
            <li>
              <Link href="/dns-system">DNS System</Link>
            </li>
            <li>
              <Link href="/http-status-code">ES6</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;