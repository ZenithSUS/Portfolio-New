import chatResponse from "../services/mistral";
import { useEffect, useRef, useState } from "react";
import { AiFillRobot } from "react-icons/ai";
import { MistralChatResponse, Message } from "../libs/types";
import ZenithAI from "../assets/zenithai.gif";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    try {
      if (!message.trim()) return;
      setMessages((prev) => [...prev, { text: message, sender: "user" }]);
      setMessage("");
      setLoading(true);

      const response: MistralChatResponse = await chatResponse(message);
      console.log("Response:", response);

      if (!response) {
        setLoading(false);
        setError("No response from the server.");
        return;
      }

      setMessages((prev) => [
        ...prev,
        { text: response.content, sender: "assistant" },
      ]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("An error occurred while fetching the response.");
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  if (!isOpen) {
    return (
      <div
        className="fixed bottom-4 right-4 z-50 p-2 bg-slate-800 rounded-full shadow-lg cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img src={ZenithAI} alt="Zenith AI" className="w-20 h-20" />
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 right-0 p-4 w-[90%] md:w-[40%] lg:w-[500px] lg:h-[500px] bg-slate-800 shadow-lg rounded-lg m-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold border-b-3 border-blue-400 w-fit">
          ZenithAI
        </h1>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            className="flex-grow rounded border border-gray-300 p-2"
          />
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
        <div
          ref={chatContainerRef}
          className="flex h-80 flex-col space-y-2 overflow-y-auto rounded border border-gray-300 p-2"
        >
          {messages.map((msg, index) => (
            <p
              key={index}
              className={`rounded p-2 ${
                msg.sender === "user" ? "bg-slate-950" : "bg-slate-700"
              }`}
            >
              {msg.text}
            </p>
          ))}
          {loading && <div className="text-white">Zenith is typing...</div>}
          {error && <div className="text-red-500">{error}</div>}
        </div>
      </div>
    </div>
  );
}
