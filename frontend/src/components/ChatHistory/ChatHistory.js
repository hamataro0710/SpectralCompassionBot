import React from "react";
import "./ChatHistory.css";
import Message from "../Message/Message";

const ChatHistory = ({ conversations }) => {
  return (
    <div className="chat-history">
      {conversations.map((conversation, index) => (
        <Message key={index} type={conversation.type} content={conversation.content} />
      ))}
    </div>
  );
};

export default ChatHistory;
