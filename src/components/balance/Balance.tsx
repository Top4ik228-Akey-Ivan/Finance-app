import { Paper, Typography, Divider } from '@mui/material';
import React from 'react';
import { useGetSummaryQuery } from '../../redux/services/transactionsApi';
import styles from './Balance.module.css';

const Balance: React.FC = () => {
    const { data, error } = useGetSummaryQuery();

    return (
        <Paper className={styles.card}>
            {error && <Typography className={styles.errorText}>Ошибка загрузки данных</Typography>}

            <Typography variant="h6" gutterBottom>
                Баланс
            </Typography>
            <Typography variant="h4" className={styles.balanceAmount}>
                ${data?.balance ?? 0}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="body1" className={styles.income}>
                Доходы: ${data?.income ?? 0}
            </Typography>
            <Typography variant="body1" className={styles.expense}>
                Расходы: ${data?.expense ?? 0}
            </Typography>
        </Paper>
    );
};

export default Balance;
