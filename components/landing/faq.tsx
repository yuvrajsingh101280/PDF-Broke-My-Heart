const faqs = [
  {
    q: "Are my files uploaded?",
    a: "No. Everything runs locally in your browser.",
  },
  {
    q: "Is it free?",
    a: "Yes, it's completely open source.",
  },
];

export default function FAQ() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-16">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.map((f, i) => (
          <div key={i} className="p-6 border border-white/10 rounded-xl">
            <h3 className="font-semibold">{f.q}</h3>
            <p className="text-zinc-400 mt-2">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
