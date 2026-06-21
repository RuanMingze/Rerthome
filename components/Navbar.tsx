"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <img
              src="https://luckycola.com.cn/public/imgs/luckycola_Imghub_forever_94qiNkBL17819450905245515.png"
              alt="RertX Logo"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-white font-bold text-lg tracking-tight">
              Rert<span className="text-orange-500">X</span>
            </span>
          </a>

          {/* Nav links */}
          <nav className="flex items-center gap-4">
            <a
              href="#models"
              className="text-sm text-zinc-400 hover:text-white transition-colors hidden sm:block"
            >
              模型列表
            </a>
            <a
              href="https://chat.rertx.ruanftrix.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium transition-colors"
            >
              立即聊天
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
