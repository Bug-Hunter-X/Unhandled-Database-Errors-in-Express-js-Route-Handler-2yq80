const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUserById(userId, (err, user) => {
    if (err) {
      console.error('Error fetching user:', err);
      res.status(500).send('Internal Server Error'); // or a more specific error code
      return; // Crucial to stop further execution
    }
    if (!user) {
      res.status(404).send('User not found');
      return; // Crucial to stop further execution
    }
    res.json(user);
  });
});
