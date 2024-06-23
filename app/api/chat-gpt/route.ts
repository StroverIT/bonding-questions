"use server";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function GET() {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "Be more romantic and make me fall in love with you.",
      },
      {
        role: "user",
        content:
          "Write me one bonding question for my partner. And please return only one question.",
      },
    ],
  });

  return NextResponse.json({ message: response });
}
