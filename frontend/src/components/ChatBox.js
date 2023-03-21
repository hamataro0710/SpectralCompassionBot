import React, { useState, useEffect } from 'react';
import Message from './Message';
import InputForm from './InputForm';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    setMessages([...messages, { type: 'user', text: message }]);
    const response = await fetch('http://localhost:8000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    setMessages([...messages, { type: 'user', text: message }, { type: 'bot', text: data.reply }]);
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <Message key={index} type={message.type} text={message.text} />
        ))}
      </div>
      <InputForm onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatBox;
