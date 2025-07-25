const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Replace with your actual TMDB API key
const TMDB_API_KEY = 'YOUR_TMDB_API_KEY';

app.use(cors());

// Endpoint to get TMDB API key (for demonstration; in production, never expose secrets like this)
app.get('/api/tmdb-key', (req, res) => {
    res.json({ key: TMDB_API_KEY });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});