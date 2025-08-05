import React, { useState } from 'react';

function Login({ onLogin }) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) return;

    let leaderboard = JSON.parse(localStorage.getItem("leaderboardData") || "[]");

    const alreadyExists = leaderboard.some(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyExists) {
      onLogin(name, true); // true = duplicate
    } else {
      const newUser = {
        name,
        amount: Math.floor(Math.random() * 2000 + 500),
      };
      leaderboard.push(newUser);
      localStorage.setItem("leaderboardData", JSON.stringify(leaderboard));
      onLogin(name, false); // false = not duplicate
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="box">
      <h2>Welcome Intern!</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="primary"
        disabled={!name.trim()}
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  );
}

export default Login;

