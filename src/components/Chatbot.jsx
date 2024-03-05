import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import ReactMarkdown from "react-markdown";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import { Header } from "./Header";

function ChatBot() {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      text: "Hello! I can help you find the computer that is right for you. Can you let me know what you will be using it for or what you are after?",
      suggested_items: null,
      next_question_suggestions: null,
      sender: "ai",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [suggestedReplies, setSuggestedReplies] = useState([
    "I am looking for a work laptop",
    "I want a laptop for gaming",
    "I am looking for a laptop for design purposes",
  ]);

  const chatHistoryRef = useRef(null);

  const scrollToBottom = () => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleSend = async () => {
    if (!userInput) return;

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
      setSuggestedReplies([]);
      const response = await fetch("http://localhost:3001/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: userInput }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const newMessage = await response.json();
      setChatHistory((prevMessages) => [...prevMessages, newMessage]);

      if (newMessage.next_question_suggestions) {
        const questions = newMessage.next_question_suggestions.map(
          ({ question_text }) => question_text
        );

        setSuggestedReplies(questions);
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
      <Header />
      <div className="chat-history" ref={chatHistoryRef}>
        {chatHistory.map((message, index) => (
          <div key={index} className={`chat-box ${message.sender}`}>
            {message.sender === "user" ? null : (
              <SmartToyOutlinedIcon
                className="avatar ai-avatar"
                fontSize="large"
              />
            )}
            <ReactMarkdown>{message.text}</ReactMarkdown>
            <div className="product-container">
              {message.suggested_items?.map((suggestedItem, idx) => (
                <div key={idx} className="product-card">
                  <h3>{suggestedItem.title}</h3>
                  <p>{suggestedItem.description}</p>
                  <p>{suggestedItem.item_sku}</p>
                  <h4>Pros:</h4>
                  <ul>
                    {suggestedItem.pros.map((pro, index) => (
                      <li key={index}>{pro}</li>
                    ))}
                  </ul>
                  <h4>Cons:</h4>
                  <ul>
                    {suggestedItem.cons.map((con, index) => (
                      <li key={index}>{con}</li>
                    ))}
                  </ul>
                  <img src={suggestedItem.image_url} alt={`product ${idx}`} />
                  <button className="cart-button">View product page</button>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div />
      </div>
      {loading && <div className="loader"></div>}

      {suggestedReplies.map((reply, index) => (
        <div className="suggested-replies">
          <button
            key={index}
            className="suggested-reply-button"
            onClick={() => handleSuggestedReplyClick(reply)}
          >
            {reply}
          </button>
        </div>
      ))}
      <div className="input-container">
        <input
          className="input-text"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          onSubmit={handleSend}
          onKeyDown={handleKeyDown}
        />
        <button className="send-button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
