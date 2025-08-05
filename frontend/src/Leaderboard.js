import React, { useEffect, useState } from 'react';

function Leaderboard({ goBack }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const leaderboard = JSON.parse(localStorage.getItem("leaderboardData") || "[]");

    // Optional: sort by amount descending
    leaderboard.sort((a, b) => b.amount - a.amount);

    setData(leaderboard);
  }, []);

  return (
    <div className="box">
      <h2>Leaderboard</h2>
      <ul>
        {data.map((user, index) => (
          <li key={index}>
            {index + 1}. <b>{user.name}</b> – ₹{user.amount}
          </li>
        ))}
      </ul>
      <br />
      <button className="secondary" onClick={goBack}> Back to Dashboard</button>
    </div>
  );
}

export default Leaderboard;
