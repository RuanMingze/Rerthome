export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="about" className="bg-[#080808] border-t border-border py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="https://luckycola.com.cn/public/imgs/luckycola_Imghub_forever_94qiNkBL17819450905245515.png"
              alt="RertX Logo"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-white font-bold text-xl tracking-tight">
              Rert<span className="text-orange-500">X</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a
              href="https://chat.rertx.ruanftrix.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              立即聊天
            </a>
            <a href="mailto:support@ruanftrix.cn" className="hover:text-white transition-colors">
              support@ruanftrix.cn
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-zinc-700">
            &copy; {currentYear} Ruanftrix
          </div>
        </div>
      </div>
    </footer>
  );
}
