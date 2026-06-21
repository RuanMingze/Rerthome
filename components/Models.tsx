"use client";

import { useState } from "react";

interface Model {
  id: string;
  name: string;
  provider: string;
  description: string;
  contextLength: string;
  pricing: { input: string; output: string };
  capabilities: string[];
  selfHosted: boolean;
  available: boolean;
  color: string;
  abbr: string;
}

const models: Model[] = [
  // Self-hosted models (available)
  {
    id: "rert-minix",
    name: "RertMiniX",
    provider: "Ruanftrix",
    description: "轻量级高速模型，适合日常文本生成、代码辅助与高频调用场景",
    contextLength: "32K",
    pricing: { input: "免费", output: "免费" },
    capabilities: ["文本生成", "代码辅助", "低延迟"],
    selfHosted: true,
    available: false,
    color: "bg-orange-500/15 border-orange-500/30",
    abbr: "MX",
  },
  {
    id: "rert-max",
    name: "RertMaX",
    provider: "Ruanftrix",
    description: "旗舰推理模型，深度分析、长文档理解与复杂任务处理",
    contextLength: "128K",
    pricing: { input: "免费", output: "免费" },
    capabilities: ["深度推理", "长文档", "复杂分析"],
    selfHosted: true,
    available: false,
    color: "bg-orange-500/20 border-orange-500/40",
    abbr: "AX",
  },
  {
    id: "rert-mvx",
    name: "RertMvX",
    provider: "Ruanftrix",
    description: "多模态视觉模型，图像理解、OCR 识别与图文混合推理",
    contextLength: "64K",
    pricing: { input: "免费", output: "免费" },
    capabilities: ["图像理解", "OCR", "视觉问答"],
    selfHosted: true,
    available: false,
    color: "bg-orange-500/15 border-orange-500/30",
    abbr: "MV",
  },
  // Third-party models (coming soon)
  {
    id: "claude-3.5-sonnet",
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    description: "Anthropic 最新旗舰模型，强大的推理与创意写作能力",
    contextLength: "200K",
    pricing: { input: "$0.003/1K", output: "$0.015/1K" },
    capabilities: ["推理", "代码", "多语言"],
    selfHosted: false,
    available: false,
    color: "bg-amber-500/10 border-amber-500/20",
    abbr: "CL",
  },
  {
    id: "deepseek-chat",
    name: "DeepSeek Chat",
    provider: "DeepSeek AI",
    description: "国产顶尖模型，数学与代码能力卓越",
    contextLength: "64K",
    pricing: { input: "$0.0005/1K", output: "$0.002/1K" },
    capabilities: ["数学", "代码", "推理"],
    selfHosted: false,
    available: false,
    color: "bg-blue-500/10 border-blue-500/20",
    abbr: "DS",
  },
  {
    id: "qwen-plus",
    name: "Qwen Plus",
    provider: "Alibaba Cloud",
    description: "通义千问，中英双语理解深厚，企业应用全面",
    contextLength: "128K",
    pricing: { input: "$0.0008/1K", output: "$0.002/1K" },
    capabilities: ["双语", "长上下文", "企业级"],
    selfHosted: false,
    available: false,
    color: "bg-cyan-500/10 border-cyan-500/20",
    abbr: "QW",
  },
  {
    id: "gpt-4o",
    name: "GPT-4o",
    provider: "OpenAI",
    description: "OpenAI 旗舰多模态模型，全球使用最广泛",
    contextLength: "128K",
    pricing: { input: "$0.0025/1K", output: "$0.01/1K" },
    capabilities: ["多模态", "通用", "工具调用"],
    selfHosted: false,
    available: false,
    color: "bg-emerald-500/10 border-emerald-500/20",
    abbr: "GP",
  },
  {
    id: "gemini-pro",
    name: "Gemini Pro",
    provider: "Google DeepMind",
    description: "Google 多模态旗舰，原生支持文本、图像与代码",
    contextLength: "1M",
    pricing: { input: "$0.001/1K", output: "$0.003/1K" },
    capabilities: ["超长上下文", "多模态", "代码"],
    selfHosted: false,
    available: false,
    color: "bg-indigo-500/10 border-indigo-500/20",
    abbr: "GM",
  },
  {
    id: "llama-3.1-70b",
    name: "Llama 3.1 70B",
    provider: "Meta AI",
    description: "Meta 开源旗舰，可私有化部署",
    contextLength: "128K",
    pricing: { input: "$0.0007/1K", output: "$0.0009/1K" },
    capabilities: ["开源", "可私有部署", "自定义"],
    selfHosted: false,
    available: false,
    color: "bg-violet-500/10 border-violet-500/20",
    abbr: "LL",
  },
];

function ModelCard({ model, onClick }: { model: Model; onClick: () => void }) {
  return (
    <div
      onClick={model.available ? onClick : undefined}
      className={`relative group rounded-xl border p-5 transition-all duration-300 ${
        model.available
          ? `${model.color} hover:-translate-y-1 cursor-pointer hover:shadow-lg hover:shadow-orange-500/5`
          : "border-zinc-800 bg-zinc-900/30 cursor-not-allowed opacity-60"
      }`}
    >
      {!model.available && (
        <div className="absolute inset-0 rounded-xl bg-black/30 backdrop-blur-[1px] z-10 flex items-center justify-center">
          <span className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-400">
            敬请期待
          </span>
        </div>
      )}

      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl ${model.color} flex items-center justify-center flex-shrink-0 font-bold text-white/70 text-sm`}>
          {model.abbr}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-base font-bold text-white truncate">{model.name}</h3>
            {model.selfHosted && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                自研
              </span>
            )}
          </div>
          <p className="text-xs text-zinc-500 mb-2">{model.provider}</p>
          <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">{model.description}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-1.5">
          {model.capabilities.slice(0, 2).map((cap) => (
            <span key={cap} className="px-2 py-0.5 rounded text-[10px] text-zinc-500 bg-zinc-800/50 border border-zinc-700">
              {cap}
            </span>
          ))}
        </div>
        {model.available && (
          <span className="text-xs text-orange-400 font-medium group-hover:text-orange-300 flex items-center gap-1">
            查看 API
            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );
}

function ModelModal({ model, onClose }: { model: Model; onClose: () => void }) {
  const [tab, setTab] = useState<"curl" | "node" | "python">("curl");

  const examples = {
    curl: `curl https://api.rertx.ruanftrix.cn/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${model.id}",
    "messages": [{"role": "user", "content": "Hello!"}],
    "stream": true
  }'`,
    node: `import { RertX } from 'rertx-sdk';

const client = new RertX({ apiKey: 'YOUR_API_KEY' });

const stream = await client.chat.completions.create({
  model: '${model.id}',
  messages: [{ role: 'user', content: 'Hello!' }],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || '');
}`,
    python: `from rertx import RertX

client = RertX(api_key="YOUR_API_KEY")

stream = client.chat.completions.create(
    model="${model.id}",
    messages=[{"role": "user", "content": "Hello!"}],
    stream=True
)

for chunk in stream:
    print(chunk.choices[0].delta.content, end="")`,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-border bg-surface-elevated shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-border">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl ${model.color} flex items-center justify-center font-bold text-white/70`}>
              {model.abbr}
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{model.name}</h2>
              <p className="text-sm text-zinc-500">{model.provider}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-sm text-zinc-400 mb-6">{model.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-3 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <div className="text-xs text-zinc-600 mb-1">上下文长度</div>
              <div className="text-base font-semibold text-white">{model.contextLength}</div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <div className="text-xs text-zinc-600 mb-1">输入/输出定价</div>
              <div className="text-base font-semibold text-white">{model.pricing.input} / {model.pricing.output}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {model.capabilities.map((cap) => (
              <span key={cap} className="px-3 py-1 rounded-md text-xs text-zinc-400 bg-zinc-800 border border-zinc-700">
                {cap}
              </span>
            ))}
          </div>

          {/* API example */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              {(["curl", "node", "python"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    tab === t
                      ? "bg-orange-500/15 text-orange-400 border border-orange-500/30"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {t === "node" ? "Node.js" : t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
            <pre className="bg-black/60 border border-zinc-800 rounded-xl p-4 overflow-x-auto">
              <code className="text-xs sm:text-sm text-zinc-300 font-mono whitespace-pre">{examples[tab]}</code>
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-0 flex justify-between items-center">
          <a
            href="https://rertx.ruanftrix.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-orange-400 text-sm transition-colors"
          >
            获取 API Key →
          </a>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium transition-colors"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Models() {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [filter, setFilter] = useState<"all" | "available">("all");

  const filteredModels = filter === "all" ? models : models.filter((m) => m.available);

  return (
    <section id="models" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">模型列表</h2>
            <p className="text-sm text-zinc-500">点击模型卡片查看调用示例与 API 参数</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-orange-500/15 text-orange-400 border border-orange-500/30"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              全部模型
            </button>
            <button
              onClick={() => setFilter("available")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filter === "available"
                  ? "bg-orange-500/15 text-orange-400 border border-orange-500/30"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              已上线
            </button>
          </div>
        </div>

        {/* Models grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredModels.map((model) => (
            <ModelCard key={model.id} model={model} onClick={() => setSelectedModel(model)} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-zinc-700">
          OpenAI 兼容 API 格式 — 无需修改代码即可迁移 | 模型接入中，最终以正式上线为准
        </p>
      </div>

      {/* Modal */}
      {selectedModel && <ModelModal model={selectedModel} onClose={() => setSelectedModel(null)} />}
    </section>
  );
}
