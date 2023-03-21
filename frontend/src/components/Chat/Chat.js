import React, { useState } from "react";
// import "./Chat.css";
import ChatHistory from "../ChatHistory/ChatHistory";
import { Box, TextField, Button } from '@mui/material';

function Chat() {
  const [userInput, setUserInput] = useState("");
  const [conversations, setConversations] = useState([]);
  const [aiOutput, setAiOutput] = useState('');
  const [image, setImage] = useState(null);
  const [generatedImagePath, setGeneratedImagePath] = useState(null);

  const handleChange = (event) => {
    if (event.shiftKey && event.key === "Enter") {
        setUserInput(userInput + "\n");
      } else if (event.key === "Enter") {
        event.preventDefault();
        handleSubmit();
      } else {
        setUserInput(event.target.value);
      }
  };
//   const handleImageChange = (event) => {
//     setImage(event.target.files[0]);
//   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/api/generate-response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ user_input: userInput }),
    });
//     if (image) {
//       const formData = new FormData();
//       formData.append('image', image);

//       const response = await fetch('http://localhost:8000/api/upload-image', {
//         method: 'POST',
//         body: formData,
//       });

    const data = await response.json();
    const aiOutput = data.ai_output;
    // Add AI response to the conversation history
    setConversations([
      ...conversations,
      { type: "user", content: userInput },
      { type: "ai", content: aiOutput },
    ]);

    setUserInput("");
  };


  return (
    <Box>
      <ChatHistory conversations={conversations} />
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your message"
          multiline
          rows={4}
          value={userInput}
          onChange={handleChange}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
    </Box>
  );
}

export default Chat;
