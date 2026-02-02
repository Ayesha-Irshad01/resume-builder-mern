export default function ModernTemplate({ data }) {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-3 shadow-lg">
      
      {/* Sidebar */}
      <div className="col-span-1 bg-indigo-700 text-white p-8">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-sm mt-2">{data.email}</p>

        <div className="mt-8">
          <h2 className="uppercase text-sm font-semibold mb-2">Skills</h2>
          <ul className="text-sm space-y-1">
            {data.skills.map((skill, i) => (
              <li key={i}>• {skill}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main */}
      <div className="col-span-2 bg-white p-8">
        <section>
          <h2 className="text-xl font-semibold text-indigo-700">Summary</h2>
          <p className="text-sm mt-2">{data.summary}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-indigo-700">Experience</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mt-3">
              <p className="font-semibold">{exp.role}</p>
              <p className="text-sm text-gray-600">
                {exp.company} • {exp.year}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-indigo-700">Education</h2>
          {data.education.map((edu, i) => (
            <p key={i} className="text-sm mt-2">
              {edu.degree} – {edu.school} ({edu.year})
            </p>
          ))}
        </section>
      </div>
    </div>
  );
}
