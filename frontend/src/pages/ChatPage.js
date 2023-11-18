import React, { useState } from "react";

const ChatPage = () => {
  const [text, setText] = useState("");
  const fetchResponse = async () => {
    const response = await fetch(`http://localhost:8080/request/${text}`);
  };

  return <div>ChatPage</div>;
};

export default ChatPage;
