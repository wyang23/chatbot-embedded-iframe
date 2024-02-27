import React, { useState, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Header } from "./Header";
import "./Chatbot.css";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import ReactMarkdown from "react-markdown";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function ChatBot() {
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      text: "Hello! I can help you find the computer that is right for you. Can you let me know what you will be using it for or what you are after?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [suggestedReplies, setSuggestedReplies] = useState([
    "Yes",
    "No",
    "Maybe",
  ]);

  const chatContainerRef = useRef(null);

  const handleSend = async () => {
    if (!userInput) return;

    // Add user message to chat history
    setChatHistory((prevMessages) => [
      ...prevMessages,
      {
        text: userInput,
        sender: "user",
        timestamp: new Date(),
      },
    ]);

    try {
      setLoading(true);

      const result = await model.generateContent(userInput);
      const aiResponse = result.response.text();

      setChatHistory((prevMessages) => [
        ...prevMessages,
        {
          text: aiResponse,
          sender: "ai",
          timestamp: new Date(),
        },
      ]);

      // Show suggested replies if the AI response contains them
      if (result.response.suggested_replies) {
        setSuggestedReplies(result.response.suggested_replies);
      } else {
        setSuggestedReplies([]);
      }

      setUserInput("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Scroll to bottom of chat history when chat history updates

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestedReplyClick = (reply) => {
    setUserInput(reply);
    handleSend();
  };

  return (
    <div className="App">
      {/* <Header /> */}
      <div className="chat-history" ref={chatContainerRef}>
        {chatHistory.map((message, index) => (
          <div key={index} className={`chat-box ${message.sender}`}>
            {message.sender === "user" ? null : (
              <SmartToyOutlinedIcon
                className="avatar ai-avatar"
                fontSize="large"
                style={{ color: "#001080" }}
              />
            )}
            <ReactMarkdown>{message.text}</ReactMarkdown>
            {/* <span className="time-stamp">{message.timestamp.toString()}</span> */}
          </div>
        ))}
      </div>
      {loading && <div className="loader"></div>}

      {suggestedReplies.length > 0 && (
        <div className="suggested-replies">
          {suggestedReplies.map((reply, index) => (
            <button
              key={index}
              className="suggested-reply-button"
              onClick={() => handleSuggestedReplyClick(reply)}
            >
              {reply}
            </button>
          ))}
        </div>
      )}

      <div className="input-container">
        <input
          className="input-text"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          onSubmit={handleSend}
          onKeyDown={handleKeyDown}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon onClick={handleSend} />
            </InputAdornment>
          }
        />
        <span class="icon">
          <SearchIcon onClick={handleSend} />
        </span>
      </div>
    </div>
  );
}

export default ChatBot;