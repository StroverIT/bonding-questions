"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState(null);

  const generateQuestionHandler = async () => {
    const response = await fetch("/api/chat-gpt", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("data", data);
    setQuestion(data?.message.choices[0].message.content);
  };
  return (
    <>
      <div className="h-screen w-screen relative z-10">
        <Image
          src="/background3.jpg"
          fill
          alt="test"
          className="object-cover bg-right bg-no-repeat bg-cover "
        />
      </div>
      <div className="fixed h-screen w-screen bg-black opacity-30 z-20 top-0 left-0" />
      <main className="fixed top-0 left-0 h-full container z-30 text-white ">
        <div className="h-full flex items-center justify-center flex-col">
          <h1 className="text-4xl font-bold mb-10 text-center">
            Welcome to the Bonding questions
          </h1>

          <div className="flex flex-col items-center justify-center space-y-4">
            <button
              className="p-2 bg-blue-500 text-white rounded"
              onClick={generateQuestionHandler}
            >
              Generate a question
            </button>
          </div>
          {true && (
            <div className="mt-10 text-red-600 font-bold bg-[#ffebe9] p-10 rounded-xl">
              BLa bla{question}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
