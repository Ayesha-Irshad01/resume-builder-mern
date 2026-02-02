import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Resume from "@/models/Resume";
import { verifyToken } from "@/lib/auth";

export async function POST(req) {
  try {
    await connectDB();

    const decoded = verifyToken(req);
    const userId = decoded.userId;

    const resumeData = await req.json();

    const resume = await Resume.create({
      ...resumeData,
      userId: userId,
    });

    return NextResponse.json({ message: "Resume created", resume });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
