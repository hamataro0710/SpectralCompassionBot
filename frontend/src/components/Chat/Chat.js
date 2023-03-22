import React, { useState } from "react";
import ChatHistory from "../ChatHistory/ChatHistory";
import { Box, TextField, IconButton } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";

function Chat() {
  const [userInput, setUserInput] = useState("");
  const [conversations, setConversations] = useState([]);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (!event.shiftKey) {
        handleSubmit();
      } else {
        setUserInput(userInput + "\n");
      }
    }
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:8000/api/generate-response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ user_input: userInput }),
    });

    const data = await response.json();
    const aiOutput = data.ai_output;

    setConversations([
      ...conversations,
      { type: "user", content: userInput },
      { type: "ai", content: aiOutput },
    ]);

    setUserInput("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "flex-end",
      }}
    >
      <Box
        className="chat-history"
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          p: 1,
        }}
      >
        <ChatHistory conversations={conversations} />
      </Box>
      <Box component="form" onSubmit={(e) => e.preventDefault()} sx={{ p: 1 }}>
        <TextField
          label="Your message"
          multiline
          rows={4}
          value={userInput}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          fullWidth
          variant="outlined"
          InputProps={{
            endAdornment: (
              <IconButton
                edge="end"
                color="primary"
                onClick={handleSubmit}
                aria-label="send"
                disabled={!userInput.trim()}
              >
                <SendIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
    </Box>
  );
}
export default Chat;
