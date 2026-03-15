"use client";

import Link from "next/link";

const sections = [
  {
    title: "Optimize",
    tools: [
      { name: "Compress PDF", link: "/tools/compress" },
      { name: "Split PDF", link: "/tools/split" },
      { name: "Merge PDF", link: "/tools/merge" },
    ],
  },
  {
    title: "Convert",
    tools: [
      { name: "PDF to Image", link: "/tools/pdf-to-image" },
      { name: "Image to PDF", link: "/tools/image-to-pdf" },
      { name: "HTML to PDF", link: "/tools/html-to-pdf" },
    ],
  },
  {
    title: "Edit",
    tools: [
      { name: "Rotate PDF", link: "/tools/rotate" },
      { name: "Watermark PDF", link: "/tools/watermark" },
      { name: "Remove Pages", link: "/tools/remove-pages" },
    ],
  },
];

export default function MegaMenu() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-[800px] rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl p-8 shadow-xl">
      <div className="grid grid-cols-3 gap-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold text-zinc-400 mb-4">
              {section.title}
            </h3>

            <ul className="space-y-3">
              {section.tools.map((tool) => (
                <li key={tool.name}>
                  <Link
                    href={tool.link}
                    className="text-sm hover:text-white transition"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
