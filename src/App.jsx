import { useState } from "react";
import "./App.css";
import Login from "./Component/Login";
import Welcome_Dashboard from "./Component/Welcome_Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUser(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Welcome_Dashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
