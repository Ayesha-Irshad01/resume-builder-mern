export default function ClassicTemplate({ data }) {
  return (
    <div className="max-w-3xl mx-auto bg-white text-black p-10 font-serif">
      <h1 className="text-4xl font-bold tracking-wide">{data.name}</h1>
      <p className="text-gray-600 mt-1">{data.email}</p>

      <hr className="my-6 border-gray-300" />

      <section>
        <h2 className="text-lg font-bold uppercase mb-2">Summary</h2>
        <p className="text-sm leading-relaxed">{data.summary}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-bold uppercase mb-2">Education</h2>
        {data.education.map((edu, i) => (
          <p key={i} className="text-sm">
            <strong>{edu.degree}</strong>, {edu.school} ({edu.year})
          </p>
        ))}
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-bold uppercase mb-2">Experience</h2>
        {data.experience.map((exp, i) => (
          <p key={i} className="text-sm">
            <strong>{exp.role}</strong> – {exp.company} ({exp.year})
          </p>
        ))}
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-bold uppercase mb-2">Skills</h2>
        <p className="text-sm">{data.skills.join(", ")}</p>
      </section>
    </div>
  );
}
