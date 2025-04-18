import express from 'express';
import cors from 'cors';
import { transactions } from './data.js';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let nextId = transactions.length + 1;

// GET /transactions
app.get('/transactions', (req, res) => {
    res.json(transactions);
});

// POST /transactions
app.post('/transactions', (req, res) => {
    const { category, amount, date, description, type } = req.body;

    if (!category || !amount || !date || !type) {
        return res.status(400).json({ error: 'Некорректные данные' });
    }

    const newTransaction = {
        id: nextId++,
        category,
        amount,
        date,
        description,
        type,
    };

    transactions.push(newTransaction);
    res.status(201).json(newTransaction);
});

// DELETE /transactions/:id
app.delete('/transactions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = transactions.findIndex((tx) => tx.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Транзакция не найдена' });
    }
    transactions.splice(index, 1);
    res.status(200).json({success: 'Запись успешно удалена'});
});

// GET /summary — общий баланс, доходы, расходы
app.get('/summary', (req, res) => {
    const income = transactions
        .filter(tx => tx.type === 'income')
        .reduce((sum, tx) => sum + tx.amount, 0);

    const expense = transactions
        .filter(tx => tx.type === 'expense')
        .reduce((sum, tx) => sum + tx.amount, 0);

    const balance = income - expense;

    res.json({ income, expense, balance });
});

// GET /expenses-by-category — расходы по категориям (для диаграммы)
app.get('/expenses-by-category', (req, res) => {
    const expenses = transactions.filter(tx => tx.type === 'expense');

    const categoryTotals = expenses.reduce((acc, tx) => {
        if (!acc[tx.category]) {
            acc[tx.category] = 0;
        }
        acc[tx.category] += tx.amount;
        return acc;
    }, {});

    // Для графика Recharts лучше отдавать массив вида [{ category: "Еда", amount: 120 }, ...]
    const chartData = Object.entries(categoryTotals).map(([category, amount]) => ({
        category,
        amount,
    }));

    res.json(chartData);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
