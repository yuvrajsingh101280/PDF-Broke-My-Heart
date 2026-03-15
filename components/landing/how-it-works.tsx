const steps = [
  { title: "Upload PDF", desc: "Drag and drop your file." },
  { title: "Choose Tool", desc: "Select merge, split or convert." },
  { title: "Download Result", desc: "Instantly download processed file." },
];

export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {steps.map((step, i) => (
          <div
            key={i}
            className="p-8 border border-white/10 rounded-2xl bg-white/5 text-center"
          >
            <h3 className="text-xl font-semibold">{step.title}</h3>

            <p className="text-zinc-400 mt-3">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
