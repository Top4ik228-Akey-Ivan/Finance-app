import { Box, Typography } from '@mui/material';
import Balance from '../../components/balance/Balance';
import Diagram from '../../components/diagram/Diagram';
import LastTransactions from '../../components/lastTransactions/lastTransactions';
import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                Финансовый трекер
            </Typography>

            {/* Доходы/Расходы */}
            <Balance />
            {/* Круговая диаграмма */}
            <Diagram />
            {/* Последние операции */}
            <LastTransactions />
            {/* Кнопка добавления */}
        </Box>
    );
};

export default Dashboard;
