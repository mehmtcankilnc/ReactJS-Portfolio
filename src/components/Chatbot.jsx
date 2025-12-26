import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaCommentDots, FaTimes, FaRobot, FaRedo } from "react-icons/fa";
import { botScript } from "../utils/botScript";

const Chatbot = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [history, setHistory] = useState([]);
  const [currentStep, setCurrentStep] = useState("start");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, isOpen, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShowNotification(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (history.length === 0) {
      const startStep = botScript["start"];
      if (startStep) {
        setHistory([{ type: "bot", message: startStep.message }]);
      }
    }
  }, [history.length]);

  const handleOptionClick = (nextId, label, url) => {
    setHistory((prev) => [...prev, { type: "user", message: label }]);
    setIsTyping(true);

    if (url) {
      navigate(url);
    }

    const nextStep = botScript[nextId];
    if (nextStep) {
      setTimeout(() => {
        setHistory((prev) => [
          ...prev,
          { type: "bot", message: nextStep.message },
        ]);
        setCurrentStep(nextId);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleReset = () => {
    setHistory([]);
    setCurrentStep("start");
    setIsTyping(false);
  };

  const renderMessage = (text, type) => {
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        return (
          <a
            key={index}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className={`underline ${
              type === "user"
                ? "text-white"
                : "text-blue-600 hover:text-blue-800"
            }`}
          >
            {linkMatch[1]}
          </a>
        );
      }
      return part;
    });
  };

  const currentStepData = botScript[currentStep];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end font-sans">
      {!isOpen && showNotification && (
        <div className="mb-3 mr-1 bg-white p-3 rounded-xl shadow-xl border border-gray-100 relative animate-bounce">
          <p className="text-sm font-medium text-gray-700">
            Hello! How can I help you? 👋
          </p>
          <button
            onClick={() => setShowNotification(false)}
            className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
          >
            <FaTimes size={10} className="text-gray-600" />
          </button>
          <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white transform rotate-45 border-r border-b border-gray-100"></div>
        </div>
      )}
      {isOpen && (
        <div className="bg-white w-[calc(100vw-2rem)] sm:w-80 h-[60vh] sm:h-[512px] rounded-2xl shadow-2xl flex flex-col mb-4 border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-[#d3191c] to-[#b31518] p-4 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <FaRobot size={18} />
              </div>
              <span className="font-semibold tracking-wide">Assistant</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                className="hover:bg-white/20 p-1 rounded transition-colors"
                title="Reset Chat"
              >
                <FaRedo size={14} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1 rounded transition-colors"
              >
                <FaTimes />
              </button>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
            {history.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 text-sm leading-relaxed shadow-sm ${
                    msg.type === "user"
                      ? "bg-[#d3191c] text-white rounded-2xl rounded-br-sm"
                      : "bg-white text-gray-800 border border-gray-100 rounded-2xl rounded-bl-sm"
                  }`}
                >
                  {renderMessage(msg.message, msg.type)}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-bl-sm border border-gray-100 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex flex-wrap gap-2 justify-end">
              {currentStepData?.options?.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    handleOptionClick(opt.next, opt.label, opt.url)
                  }
                  disabled={isTyping}
                  className={`text-xs font-medium px-4 py-2 rounded-full transition-colors border ${
                    isTyping
                      ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                      : "bg-red-50 text-[#d3191c] border-red-100 hover:bg-red-100 active:scale-95"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center ${
          isOpen ? "bg-gray-600 rotate-90" : "bg-[#d3191c] hover:bg-[#b31518]"
        } text-white`}
      >
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
      </button>
    </div>
  );
};

export default Chatbot;
