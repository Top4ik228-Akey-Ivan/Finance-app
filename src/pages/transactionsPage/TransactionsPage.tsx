import {
    Box,
    Typography,
    Button,
} from '@mui/material';
import { useState } from 'react';
import { IFilter, ITransaction } from '../../types';
import Filter from '../../components/filter/Filter';
import TransactionsTable from '../../components/transactionsTable/TransactionsTable';

const mockData: ITransaction[] = [
    { id: 1, date: '2024-05-12', category: 'Еда', amount: 50, type: 'expense', description: 'Супермаркет' },
    { id: 2, date: '2024-05-10', category: 'Зарплата', amount: 2000, type: 'income' },
];

const TransactionsPage = () => {
    const [filter, setFilter] = useState<IFilter>({ dateFilter: '', categoryFilter: '' });

    const filtered = mockData.filter((tx) => {
        return (
            (!filter?.categoryFilter || tx.category === filter?.categoryFilter) &&
            (!filter?.dateFilter || tx.date === filter?.dateFilter)
        );
    });

    const uniqueCategories = [...new Set(mockData.map(tx => tx.category))];

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                Все операции
            </Typography>

            {/*Фильтр по дате и категории*/}
            <Filter filter={filter} setFilter={setFilter} uniqueCategories={uniqueCategories}/>
            {/*Тбалица транзакций*/}
            <TransactionsTable filtered={filtered}/>

            <Box mt={3} textAlign="center">
                <Button variant="contained" size="large">
                    Добавить операцию
                </Button>
            </Box>
        </Box>
    );
};

export default TransactionsPage;
