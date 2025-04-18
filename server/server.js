import express from 'express';
import cors from 'cors';
import { transactions } from './data.js';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// GET /transactions
app.get('/transactions', (req, res) => {
    res.json(transactions);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
