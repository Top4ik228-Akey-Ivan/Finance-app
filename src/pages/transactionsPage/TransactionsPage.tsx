import {
    Box,
    Typography,
    Button,
} from '@mui/material';
import { useState } from 'react';
import { IFilter } from '../../types';
import Filter from '../../components/filter/Filter';
import TransactionsTable from '../../components/transactionsTable/TransactionsTable';
import { useGetAllTransactionsQuery } from '../../redux/services/transactionsApi';
import { categoryOptions } from '../../constants/categories';
import AddTransactionModal from '../../components/addTransactionModal/AddTransactionModal';

const TransactionsPage = () => {

    const [filter, setFilter] = useState<IFilter>({ dateFilter: '', categoryFilter: '' });
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const { data, error } = useGetAllTransactionsQuery();

    const filtered = data?.filter((tx) => {
        return (
            (!filter?.categoryFilter || tx.category === filter?.categoryFilter) &&
            (!filter?.dateFilter || tx.date === filter?.dateFilter)
        );
    }) ?? [];

    const uniqueCategories = categoryOptions;

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                Все операции
            </Typography>

            {/*Фильтр по дате и категории*/}
            <Filter filter={filter} setFilter={setFilter} uniqueCategories={uniqueCategories} />
            {/*Тбалица транзакций*/}
            {error && <Typography>Ошибка загузки данных</Typography>}

            {data && data.length > 0 ? (
                <TransactionsTable filtered={filtered} />
            ) : (
                <Typography>Транзакций пока нет</Typography>
            )}

            <Box mt={3} textAlign="center">
                <Button onClick={toggleModal} variant="contained" size="large">
                    Добавить операцию
                </Button>
            </Box>

            <AddTransactionModal isModalOpen={isModalOpen} toggleModal={toggleModal}/>
        </Box>
    );
};

export default TransactionsPage;
