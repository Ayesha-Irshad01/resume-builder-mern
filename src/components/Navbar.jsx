import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center bg-white shadow-sm">
      <Link href="/" className="text-xl font-bold">
        ResumePro
      </Link>

      <div className="flex gap-6">
        <Link href="/login" className="text-gray-600 hover:text-black">
          Login
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
