"use client";
import { useRouter } from "next/navigation";

const templates = [
  { id: "classic", name: "Classic" },
  { id: "modern", name: "Modern" },
  { id: "creative", name: "Creative" },
];

export default function TemplatesPage() {
  const router = useRouter();

  const handleSelect = (templateId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    } else {
      router.push(`/dashboard?template=${templateId}`);
    }
  };

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Choose a Template</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((t) => (
          <div
            key={t.id}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <div className="w-full h-40 bg-gray-200 rounded mb-4 flex items-center justify-center">
              Preview
            </div>

            <h2 className="text-xl font-semibold mb-3">{t.name}</h2>

            <button
              onClick={() => handleSelect(t.id)}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Use this template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
