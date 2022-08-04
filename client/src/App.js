import './App.css';
import io from 'socket.io-client';
import {useState, useEffect} from 'react'

const socket = io.connect("http://localhost:5000");


function App() {

  const [send, setSend] = useState("");
  const [received, setReceived] = useState("");

  const sendMessage = () => {    
    socket.emit("send", {message: send})     
  }  
  

  useEffect(() => {
    socket.on("received", (data)=>{
      setReceived(data.message)
    })
  }, [socket]);
  
  return (
    <div className="App">      
      <h1 >Socket.io ChatApp</h1>
      <input type="text" placeholder="type your message here..." onChange={(e)=>{ setSend(e.target.value)}}/>
      <button onClick={sendMessage}>Send</button>
      <h3>Received Message:</h3>
      <p>{received}</p>
    </div>
  );
}

export default App;
