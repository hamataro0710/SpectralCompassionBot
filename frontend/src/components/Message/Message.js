import React from "react";
import "./Message.css";

const Message = ({ type, content }) => {
  const icon = type === "user" ? "🙂" : "🤖";
  const messageClass = type === "user" ? "user-message" : "ai-message";

  return (
    <div className={`message ${messageClass}`}>
      <span className="icon">{icon}</span>
      <p className="content">{content}</p>
    </div>
  );
};

export default Message;
