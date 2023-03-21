import React from "react";
// import "./App.css";
import Chat from "./components/Chat/Chat";
import { Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md">
      <Chat />
    </Container>
  );
}
export default App;


// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [userInput, setUserInput] = useState('');
//   const [aiOutput, setAiOutput] = useState('');
//   const [image, setImage] = useState(null);
//   const [generatedImagePath, setGeneratedImagePath] = useState(null);
//   const [conversations, setConversations] = useState([]);

//   const handleChange = (event) => {
//     setUserInput(event.target.value);
//   };

//   const handleImageChange = (event) => {
//     setImage(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // Add user input to the conversation history
//     setConversations([...conversations, { role: "user", content: userInput }]);
    
//     const response = await fetch('http://localhost:8000/api/generate-response', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       mode: 'cors', // 追加
//       body: JSON.stringify({ user_input: userInput, conversation_history: conversations }),
//     });
//     if (image) {
//       const formData = new FormData();
//       formData.append('image', image);

//       const response = await fetch('http://localhost:8000/api/upload-image', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();
//       setGeneratedImagePath(data.generated_image_path);
//     }
//     const data = await response.json();
//     setAiOutput(data.ai_output);
//     // Add AI response to the conversation history
//     setConversations([...conversations, { role: "ai", content: data.ai_output }]);

//   };

//   return (
//     <div className="App">
//       <h1>My AI Partner</h1>
//       <form onSubmit={handleSubmit} className="form">
//         <label>
//           Your message:
//           <input type="text" value={userInput} onChange={handleChange} />
//         </label>
//         <label>
//           Upload an image:
//           <input type="file" onChange={handleImageChange} />
//         </label>
//         <input type="submit" value="Send" />
//       </form>
//       <div>
//         <h2>AI's response:</h2>
//         <p>{aiOutput}</p>
//       </div>
//       {generatedImagePath && (
//         <div>
//           <h2>Generated image:</h2>
//           <img src={`http://localhost:8000/api/get-image/${generatedImagePath}`} alt="Generated" />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
