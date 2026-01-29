import { useState } from "react";

function Login({setUser}) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, username);

   
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Write your mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Write your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
