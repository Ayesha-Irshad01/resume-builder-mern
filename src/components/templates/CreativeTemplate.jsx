export default function CreativeTemplate({ data }) {
  return (
    <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-xl">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-extrabold">{data.name}</h1>
        <p className="opacity-90">{data.email}</p>
      </div>

      {/* Content */}
      <div className="mt-6 space-y-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold text-purple-600">Summary</h2>
          <p className="text-sm mt-2">{data.summary}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold text-purple-600">Experience</h2>
          {data.experience.map((exp, i) => (
            <p key={i} className="text-sm mt-1">
              <strong>{exp.role}</strong> — {exp.company}
            </p>
          ))}
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold text-purple-600">Education</h2>
          {data.education.map((edu, i) => (
            <p key={i} className="text-sm mt-1">
              {edu.degree}, {edu.school}
            </p>
          ))}
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold text-purple-600">Skills</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
