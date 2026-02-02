import Link from 'next/link'
export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-20 px-4">
      <h1 className="text-5xl font-extrabold text-gray-900">
        Build Your Professional Resume
      </h1>
      <p className="mt-4 text-gray-600 text-lg max-w-xl">
        Create, preview, and download your resume in minutes. 
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/templates">
        <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Get Started
        </button>
        </Link>
        <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>
    </section>
  );
}
