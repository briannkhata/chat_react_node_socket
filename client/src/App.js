import "./App.css";
import io from "socket.io-client";
import {useState} from "react"

const socket = io.connect("http://localhost:5000");

function App() {
  const [username,setUsername] = useState("");
  const [room,setRoom] = useState("");

  return (
    <div className="App">
      <h3>Join A Chat</h3>
      <input type="text" placeholder="Brian..." />
      <input type="text" placeholder="Room Id" />
      <button type=""> Join A Room</button>
    </div>
  );
}

export default App;
