import React, { useEffect, useState } from 'react';

function Dashboard({ user, isDuplicate, goLeaderboard, logout }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const rewards = ["Bronze Badge", "Free T-Shirt", "Amazon Voucher"];
    const leaderboard = JSON.parse(localStorage.getItem("leaderboardData") || "[]");
    const currentUser = leaderboard.find((u) => u.name === user);

    setData({
      name: user,
      referralCode: `${user.toLowerCase().replace(/\s/g, '')}2025`,
      donationsRaised: currentUser?.amount || 0,
      rewards
    });
  }, [user]);

  return (
    <div className="box">
      <h1>{data?.name}</h1>

      {isDuplicate && (
        <p style={{ color: "green", marginBottom: "10px" }}>
          ✅ You are already logged in
        </p>
      )}


      <p>Referral Code: <b>{data?.referralCode}</b></p>
      <p>Total Donations Raised: ₹{data?.donationsRaised}</p>

      <h3>Rewards & Unlockables:</h3>
      <ul>
        {data?.rewards.map((r, i) => <li key={i}>{r}</li>)}
      </ul>

      <button className="primary" onClick={goLeaderboard}> View Leaderboard</button>
      <br /><br />
      <button className="secondary" onClick={logout}> Login as Someone Else</button>
    </div>
  );
}

export default Dashboard;
