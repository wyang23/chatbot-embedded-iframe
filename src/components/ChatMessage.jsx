import React from "react";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import ReactMarkdown from "react-markdown";
import "./Chatbot.css";
import ProductCard from "./ProductCard";

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-box ${message.sender}`}>
      {message.sender === "ai" && (
        <SmartToyOutlinedIcon className="avatar ai-avatar" fontSize="large" />
      )}
      <ReactMarkdown>{message.text}</ReactMarkdown>
      <div className="product-container">
        {message.suggested_items?.map((suggestedItem) => (
          <ProductCard key={suggestedItem.item_sku} item={suggestedItem} />
        ))}
      </div>
    </div>
  );
};

export default ChatMessage;
