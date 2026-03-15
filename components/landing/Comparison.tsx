export default function Comparison() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>

      <table className="w-full text-left border border-white/10 rounded-xl overflow-hidden">
        <thead className="bg-white/5">
          <tr>
            <th className="p-4">Feature</th>
            <th className="p-4">PDF Broke My Heart</th>
            <th className="p-4">Other Tools</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t border-white/10">
            <td className="p-4">Open Source</td>
            <td className="p-4">✅</td>
            <td className="p-4">❌</td>
          </tr>

          <tr className="border-t border-white/10">
            <td className="p-4">Free</td>
            <td className="p-4">✅</td>
            <td className="p-4">Limited</td>
          </tr>

          <tr className="border-t border-white/10">
            <td className="p-4">Local Processing</td>
            <td className="p-4">✅</td>
            <td className="p-4">❌</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
