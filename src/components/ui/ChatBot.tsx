"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi there! I'm the VibeForge assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content }))
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
      } else {
        console.error("OpenRouter API Failed:", data);
        let errorMsg = "Sorry, I am having trouble connecting right now.";
        if (response.status === 401) errorMsg = "API Key is invalid or expired. Please check your OpenRouter dashboard.";
        else if (response.status === 429) errorMsg = "I'm receiving too many requests right now. Please try again in a moment.";
        else if (response.status >= 500) errorMsg = "OpenRouter services are currently experiencing issues. Please try again later.";
        else if (data.error) errorMsg = `Error: ${data.error}`;
        
        setMessages((prev) => [...prev, { role: "assistant", content: errorMsg }]);
      }
    } catch (error) {
      console.error("ChatBot Frontend Error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, a network error occurred while sending your message." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-primary text-white shadow-lg shadow-primary/20 hover:scale-110 transition-transform z-50 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[calc(100%-3rem)] max-w-[380px] h-[550px] max-h-[80vh] bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">VibeForge Assistant</h3>
                  <p className="text-xs text-primary-light font-medium">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex items-end gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-neutral-300 mb-1 border border-white/5">
                      <Bot className="w-3 h-3" />
                    </div>
                  )}
                  <div 
                    className={`px-4 py-2.5 rounded-2xl max-w-[80%] text-[15px] leading-relaxed shadow-sm ${
                      msg.role === "user" 
                        ? "bg-primary text-white rounded-br-sm" 
                        : "bg-white/10 text-neutral-200 rounded-bl-sm border border-white/5"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-end gap-2 justify-start">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-neutral-300 mb-1">
                    <Bot className="w-3 h-3" />
                  </div>
                  <div className="px-4 py-3.5 rounded-2xl bg-white/10 text-neutral-200 rounded-bl-sm flex gap-1.5 items-center">
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-black/40 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-[15px] text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all shadow-inner"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 rounded-full bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-light transition-colors shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
