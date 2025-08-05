import React, { useState, useEffect } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';


function App() {
  // Clear localStorage on initial app load (refresh)
  useEffect(() => {
    localStorage.removeItem("internName");
    localStorage.removeItem("leaderboardData");
  }, []);

  // rest of your state and handlers here
  const [page, setPage] = useState("login");
  const [user, setUser] = useState(null);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleLogin = (name, duplicate) => {
    setUser(name);
    setIsDuplicate(duplicate);
    localStorage.setItem("internName", name);
    setPage("dashboard");
  };

  const handleLogout = () => {
    setUser(null);
    setIsDuplicate(false);
    localStorage.removeItem("internName");
    setPage("login");
  };

  const goLeaderboard = () => setPage("leaderboard");
  const goDashboard = () => setPage("dashboard");

  return (
    <>
      {page === "login" && <Login onLogin={handleLogin} />}
      {page === "dashboard" && (
        <Dashboard
          user={user}
          isDuplicate={isDuplicate}
          goLeaderboard={goLeaderboard}
          logout={handleLogout}
        />
      )}
      {page === "leaderboard" && <Leaderboard goBack={goDashboard} />}
    </>
  );
}

export default App;
