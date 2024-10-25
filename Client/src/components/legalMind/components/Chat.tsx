import React, { useState } from "react";
import Features from "./Features";

export default function Chat() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([inputMessage, ...messages]);
      setInputMessage("");
    }
  };

  return (
    <>
      {messages.length === 0 && <Features />}
      <div className="inputMessage lg:pr-72 lg:pl-72 p-5 sm:ml-64 text-left lg:text-center lg:mt-[350px] mt-52">
        {/* Tampilkan pesan yang dikirim di bagian atas */}
        <div className="mb-4">
          {messages.map((message, index) => (
            <div key={index} className="text-left p-2 bg-gray-200 rounded-lg mb-2">
              {message}
            </div>
          ))}
        </div>

        <div className={`flex flex-col bg-background rounded-2xl shadow-lg border-2 ${isFocused ? "border-red-600" : "border-gray-200"}`}>
          <div className="relative p-3 font-medium">
            <input
              type="text"
              placeholder="Tulis Pertanyaan Kamu Disini"
              className="w-full border border-white focus:border-transparent focus:ring-0"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <button onClick={sendMessage} className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2">
              <svg className="w-10 h-10 text-gray-800 rounded-full dark:text-white rotate-90 p-2 hover:bg-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5" />
              </svg>
            </button>
          </div>
          <div className="flex items-center p-5 justify-between font-medium text-muted-foreground border-2 border-t-gray-200 border-b-0 bg-gray-100 rounded-bl-xl rounded-br-xl">
            <div className="flex items-center space-x-6">
              <button className="flex items-center text-muted-foreground hover:text-muted-foreground/80 transition duration-200">
                <svg className="w-5 h-5 text-gray-800 dark:text-white rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8" />
                </svg>
                <span className="ml-2">File</span>
              </button>
              <button className="flex items-center text-muted-foreground hover:text-muted-foreground/80 transition duration-200">
                <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9v3a5.006 5.006 0 0 1-5 5h-4a5.006 5.006 0 0 1-5-5V9m7 9v3m-3 0h6M11 3h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"
                  />
                </svg>
                <span className="ml-2">Suara</span>
              </button>
            </div>
            <span className="text-muted-foreground font-medium text-md">0 / 3,000</span>
          </div>
        </div>
        <div className="warningAi mt-4 text-center">
          <h5 className="font-medium text-gray-400 font-md">LegalMind can make mistakes.</h5>
        </div>
      </div>
    </>
  );
}
