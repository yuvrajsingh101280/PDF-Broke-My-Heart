"use client";

import Link from "next/link";

interface Props {
  open: boolean;
}

export default function MobileMenu({ open }: Props) {
  if (!open) return null;

  return (
    <div className="md:hidden fixed top-16 left-0 w-full bg-black/90 backdrop-blur-xl border-t border-white/10 p-6 space-y-4">
      <Link href="/tools/compress" className="block">
        Compress PDF
      </Link>

      <Link href="/tools/merge" className="block">
        Merge PDF
      </Link>

      <Link href="/tools/split" className="block">
        Split PDF
      </Link>

      <Link href="/tools/pdf-to-image" className="block">
        PDF → Image
      </Link>

      <div className="border-t border-white/10 pt-4">
        <Link href="/login" className="block">
          Login
        </Link>

        <Link
          href="/signup"
          className="block mt-2 px-4 py-2 bg-purple-600 rounded"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
