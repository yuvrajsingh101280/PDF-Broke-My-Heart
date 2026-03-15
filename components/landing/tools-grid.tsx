import { FileText, Scissors, Image, Shield } from "lucide-react";

const tools = [
  { title: "Merge PDF", icon: FileText },
  { title: "Split PDF", icon: Scissors },
  { title: "Compress PDF", icon: FileText },
  { title: "Image to PDF", icon: Image },
  { title: "PDF to Image", icon: Image },
  { title: "Rotate PDF", icon: FileText },
  { title: "Add Watermark", icon: FileText },
  { title: "Protect PDF", icon: Shield },
];

export default function ToolsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-16">Popular Tools</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {tools.map((tool, i) => {
          const Icon = tool.icon;

          return (
            <div
              key={i}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <Icon size={32} />

              <h3 className="mt-4 font-semibold">{tool.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
