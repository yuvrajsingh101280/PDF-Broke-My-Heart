export default function Security() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-bold">Your Files Stay Private</h2>

        <p className="text-zinc-400 mt-6">
          All processing happens directly in your browser. Your files never
          leave your device.
        </p>
      </div>

      <div className="p-12 border border-white/10 rounded-3xl bg-white/5 text-center">
        🔒 Secure Processing
      </div>
    </section>
  );
}
