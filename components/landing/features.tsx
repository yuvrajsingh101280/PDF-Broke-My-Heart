export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12 text-center">
      <div>
        <h3 className="text-xl font-semibold">⚡ Lightning Fast</h3>

        <p className="text-zinc-400 mt-3">Runs entirely in your browser</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">🔒 Privacy First</h3>

        <p className="text-zinc-400 mt-3">Your files never leave your device</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">🌍 Open Source</h3>

        <p className="text-zinc-400 mt-3">Community driven development</p>
      </div>
    </section>
  );
}
