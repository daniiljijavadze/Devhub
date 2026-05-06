const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const users = [
  { id: 1, name: "Daniil" },
  { id: 2, name: "Polina" },
  { id: 3, name: "Alex" }
];

app.get('/api/users', (req, res) => {
  const query = req.query.name;

  if (!query) {
    return res.json(users);
  }

  const result = users.filter(u =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );

  res.json(result);
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});