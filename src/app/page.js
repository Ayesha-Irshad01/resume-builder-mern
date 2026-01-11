export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900">
        Resume Builder Pro
      </h1>
      <p className="mt-4 text-gray-600">
        Build your professional resume in minutes.
      </p>
      <div className="mt-6 flex gap-4">
        <button className="px-6 py-2 rounded-lg bg-black text-white">
          Get Started
        </button>
        <button className="px-6 py-2 rounded-lg border border-gray-300">
          Login
        </button>
      </div>
    </main>
  );
}
