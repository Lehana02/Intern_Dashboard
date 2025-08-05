const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());

app.get('/api/user', (req, res) => {
  res.json({
    name: "Siya",
    referralCode: "siya2025",
    donationsRaised: 1234,
    rewards: ["Bronze Badge", "Free T-Shirt", "Amazon Voucher"]
  });
});

app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: "Riya", amount: 2200 },
    { name: "Jiya", amount: 2000 },
    { name: "Siya", amount: 1234 }
  ]);
});

app.listen(PORT, () =>
  console.log(`Backend running at http://localhost:${PORT}`)
);
