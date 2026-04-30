import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-900 shadow-lg">
      <h1 className="text-xl font-bold text-cyan-400">
        AR/VR Anatomy
      </h1>

      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/demo">Demo</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}