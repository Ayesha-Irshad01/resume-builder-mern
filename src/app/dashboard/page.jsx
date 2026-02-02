"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import ClassicTemplate from "@/components/templates/ClassicTemplate";
import ModernTemplate from "@/components/templates/ModernTemplate";
import CreativeTemplate from "@/components/templates/CreativeTemplate";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const selectedTemplate = searchParams.get("template");

  // Resume state
  const [resume, setResume] = useState({
    name: "",
    email: "",
    summary: "",
    education: [{ school: "", degree: "", year: "" }],
    experience: [{ company: "", role: "", year: "" }],
    skills: [""],
    template: selectedTemplate || "classic",
  });

  // Update template if URL changes
  useEffect(() => {
    setResume(prev => ({ ...prev, template: selectedTemplate || "classic" }));
  }, [selectedTemplate]);

  // Handle input changes
  const handleChange = (e, section, index) => {
    if (!section) {
      setResume({ ...resume, [e.target.name]: e.target.value });
    } else {
      const list = [...resume[section]];
      list[index][e.target.name] = e.target.value;
      setResume({ ...resume, [section]: list });
    }
  };

  // Add new row in Education / Experience / Skills
  const addItem = (section) => {
    if (section === "skills") {
      setResume({ ...resume, skills: [...resume.skills, ""] });
    } else {
      setResume({ ...resume, [section]: [...resume[section], {}] });
    }
  };

  // Render the selected template
  const renderTemplate = () => {
    if (resume.template === "classic") return <ClassicTemplate data={resume} />;
    if (resume.template === "modern") return <ModernTemplate data={resume} />;
    if (resume.template === "creative") return <CreativeTemplate data={resume} />;
    return null;
  };

  // Save resume to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) return alert("Login required");

    try {
      const res = await fetch("/api/resume/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(resume),
      });
      const data = await res.json();
      res.ok ? alert("Resume Saved!") : alert(data.error);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-gray-50">
      {/* FORM */}
      <div className="bg-white p-6 rounded shadow overflow-auto">
        <h2 className="text-2xl font-bold mb-4">Build Your Resume</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name & Email */}
          <input
            name="name"
            value={resume.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border p-2 rounded"
          />
          <input
            name="email"
            value={resume.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded"
          />

          {/* Summary */}
          <textarea
            name="summary"
            value={resume.summary}
            onChange={handleChange}
            placeholder="Summary"
            className="border p-2 rounded"
          />

          {/* Education */}
          <h3 className="font-semibold mt-2">Education</h3>
          {resume.education.map((edu, idx) => (
            <div key={idx} className="flex gap-2 mb-2">
              <input
                name="school"
                value={edu.school || ""}
                onChange={(e) => handleChange(e, "education", idx)}
                placeholder="School"
                className="border p-2 rounded flex-1"
              />
              <input
                name="degree"
                value={edu.degree || ""}
                onChange={(e) => handleChange(e, "education", idx)}
                placeholder="Degree"
                className="border p-2 rounded flex-1"
              />
              <input
                name="year"
                value={edu.year || ""}
                onChange={(e) => handleChange(e, "education", idx)}
                placeholder="Year"
                className="border p-2 rounded w-20"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => addItem("education")}
            className="bg-gray-200 p-2 rounded w-full"
          >
            + Add Education
          </button>

          {/* Experience */}
          <h3 className="font-semibold mt-4">Experience</h3>
          {resume.experience.map((exp, idx) => (
            <div key={idx} className="flex gap-2 mb-2">
              <input
                name="company"
                value={exp.company || ""}
                onChange={(e) => handleChange(e, "experience", idx)}
                placeholder="Company"
                className="border p-2 rounded flex-1"
              />
              <input
                name="role"
                value={exp.role || ""}
                onChange={(e) => handleChange(e, "experience", idx)}
                placeholder="Role"
                className="border p-2 rounded flex-1"
              />
              <input
                name="year"
                value={exp.year || ""}
                onChange={(e) => handleChange(e, "experience", idx)}
                placeholder="Year"
                className="border p-2 rounded w-20"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => addItem("experience")}
            className="bg-gray-200 p-2 rounded w-full"
          >
            + Add Experience
          </button>

          {/* Skills */}
          <h3 className="font-semibold mt-4">Skills</h3>
          {resume.skills.map((skill, idx) => (
            <input
              key={idx}
              value={skill}
              onChange={(e) => {
                const list = [...resume.skills];
                list[idx] = e.target.value;
                setResume({ ...resume, skills: list });
              }}
              placeholder="Skill"
              className="border p-2 rounded mb-1"
            />
          ))}
          <button
            type="button"
            onClick={() => addItem("skills")}
            className="bg-gray-200 p-2 rounded w-full mb-4"
          >
            + Add Skill
          </button>

          <button type="submit" className="bg-black text-white p-2 rounded">
            Save Resume
          </button>
        </form>
      </div>

      {/* LIVE TEMPLATE PREVIEW */}
      <div className="bg-gray-100 p-6 rounded shadow overflow-auto">
        {renderTemplate()}
      </div>
    </div>
  );
}
