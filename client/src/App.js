import "./App.css";
import { io } from "socket.io-client";
import logo from "./assets/logo.png";
// import sendIcon from "./assets/send.png";
// import attachment from "./assets/paper-clip.png";
// import userPic from "./users/1.png";
import { useEffect, useState } from "react";
import CreateUser from "./components/CreateUser";
import OnlineUsers from "./components/OnlineUsers";
import MessagesControl from "./components/MessagesControl";
const socket = io(`http://localhost:8080`);
function App() {
  const [step, setStep] = useState(0);
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState({});
  const [message, setMessage] = useState("");

  const onCreateUser = () => {
    console.log(username);
    socket.emit("new_user", username);

    setStep((prevStep) => prevStep + 1);
  };

  const onUserSelect = (key) => {
    setStep((prevStep) => prevStep + 1);
  };

  const sendMessage = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    socket.on("all_users", (users) => {
      console.log({ users });
      setUsers(users);
    });
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <img src={logo} alt="img" />
        <div className="app-name b-500 primaryColor">Chat App</div>
      </header>
      <div className="chat-system">
        <div className="chat-box">
          {/* STEP1: Ask Name or Username */}
          {step === 0 ? (
            <CreateUser
              onCreateUser={onCreateUser}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          ) : null}
          {/* STEP2: Show All available Users */}
          {step === 1 ? (
            <OnlineUsers
              onUserSelect={onUserSelect}
              users={users}
              username={username}
            />
          ) : null}
          {/* STEP3: Select user and switch to chat window */}
          {step === 2 ? (
            <MessagesControl
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sendMessage={sendMessage}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
