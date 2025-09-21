import React, { useEffect, useState } from "react";
import { getWelcomeMessage } from "./services/api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getWelcomeMessage()
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>{message || "Loading..."}</h1>
    </div>
  );
}

export default App;
