"use client";

import { useState } from "react";

export default function Hero() {
  const [cliCopied, setCliCopied] = useState(false);

  const handleCopyCli = async () => {
    await navigator.clipboard.writeText("npm install -g rertcli@1.1.0");
    setCliCopied(true);
    setTimeout(() => setCliCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen pt-20 pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-100" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-sm text-orange-400 font-medium">RertX API 控制台</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
            一键接入所有顶尖 <span className="text-orange-500">AI 模型</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            统一 API 接口调用自研模型与全球主流大模型。Web 聊天或 CLI 命令行，自由选择。
          </p>
        </div>

        {/* Two main cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Web Chat Card */}
          <a
            href="https://rertchat.ruanftrix.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border border-orange-500/40 bg-gradient-to-b from-orange-500/8 to-surface-elevated p-8 hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center">
                <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-semibold text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                在线
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">Web 聊天</h2>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              在浏览器中即时体验所有模型，无需配置环境。支持多轮对话、代码高亮与历史记录。
            </p>

            <div className="flex items-center gap-2 text-orange-400 font-medium group-hover:text-orange-300 transition-colors">
              打开聊天界面
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </a>

          {/* CLI Card */}
          <div className="relative rounded-2xl border border-border bg-surface-elevated p-8 hover:border-zinc-600 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                <svg className="w-7 h-7 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-zinc-800 text-zinc-400 border border-zinc-700">
                v1.1.0
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">命令行工具</h2>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              全局安装 RertCLI，在终端中直接调用任意模型，支持流式输出与管道操作。
            </p>

            {/* Install command */}
            <div className="bg-black/50 rounded-xl border border-zinc-800 p-3 flex items-center justify-between gap-3 font-mono text-sm">
              <code className="text-zinc-300 truncate">
                <span className="text-zinc-500">$</span> npm install -g rertcli@1.1.0
              </code>
              <button
                onClick={handleCopyCli}
                className="flex-shrink-0 p-2 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 transition-colors"
                title="复制"
              >
                {cliCopied ? (
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-center">
          {[
            { value: "9+", label: "模型列表" },
            { value: "OpenAI 兼容", label: "API 格式" },
            { value: "<200ms", label: "首 Token 延迟" },
            { value: "99.9%", label: "SLA" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-zinc-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none" />
    </section>
  );
}
