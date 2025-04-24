import chatResponse from "../services/mistral";
import { useEffect, useRef, useState, useTransition } from "react";
import { Message } from "../libs/types";
import { FaRegWindowClose } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { motion } from "motion/react";
import Markdown from "react-markdown";
import ZenithAI from "../assets/zenithai.gif";

export default function Chatbot() {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [streamingMessage, setStreamingMessage] = useState<string>("");

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    try {
      if (!message.trim()) return;
      setMessages((prev) => [...prev, { text: message, sender: "user" }]);
      setMessage("");
      setLoading(true);
      setStreamingMessage("");

      startTransition(async () => {
        let fullResponse = "";

        await chatResponse(message, true, (chunk) => {
          fullResponse += chunk;
          setStreamingMessage((prev) => prev + chunk);
        });

        setMessages((prev) => [
          ...prev,
          { text: fullResponse, sender: "assistant" },
        ]);
        setStreamingMessage("");
        setLoading(false);
      });
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
      chatContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [messages, streamingMessage, loading]);

  if (!isOpen) {
    return (
      <motion.div
        className="fixed bottom-4 right-4 z-50 p-2 bg-slate-800 rounded-full shadow-lg cursor-pointer"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
      >
        <img src={ZenithAI} alt="Zenith AI" className="w-20 h-20" />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="fixed bottom-0 right-0 p-4 w-[90%] md:w-[40%] lg:w-[600px] lg:h-[500px] bg-slate-800 ring-2 ring-blue-400 rounded-lg m-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold border-b-3 border-blue-400 w-fit">
          ZenithAI
        </h1>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => setIsOpen(false)}
        >
          <FaRegWindowClose size={24} />
        </button>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-1 md:space-x-2 w-full">
          <motion.input
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
            whileHover={{ scale: 1.02 }}
          />
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white disabled:gray-400"
            onClick={handleSend}
            disabled={isPending}
          >
            <IoSend size={24} />
          </button>
        </div>
        <div
          ref={chatContainerRef}
          className="flex h-80 flex-col space-y-2 overflow-y-auto rounded border border-gray-300 p-2"
        >
          {messages.map((msg, index) => (
            <div
              className={`flex flex-col p-2 ${
                msg.sender === "user"
                  ? "bg-slate-950 items-end"
                  : "bg-slate-700 items-start"
              }`}
              key={index}
            >
              <Markdown>{msg.text}</Markdown>
            </div>
          ))}

          {streamingMessage && (
            <p className="rounded p-2 break-all bg-slate-700">
              {streamingMessage}
              <span className="animate-pulse">|</span>
            </p>
          )}
          {loading && !streamingMessage && (
            <div className="text-white p-2">Zenith is typing...</div>
          )}
          {error && <div className="text-red-500">{error}</div>}
        </div>
      </div>
    </motion.div>
  );
}
