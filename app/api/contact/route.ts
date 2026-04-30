import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("Contact Form Data:", body);

  return NextResponse.json({ message: "Success" });
}