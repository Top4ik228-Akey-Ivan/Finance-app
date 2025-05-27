import { Paper, Typography } from '@mui/material';
import Balance from '../../components/balance/Balance';
import Diagram from '../../components/diagram/Diagram';
import React from 'react';
import LastTransaction from '../../components/lastTransactions/lastTransactions';

const Dashboard: React.FC = () => {
    return (
        <Paper className='sectionPaper'>
            <Typography variant="h4" gutterBottom>
                Финансовый трекер
            </Typography>
            <Balance />
            <Diagram />
            <LastTransaction />
        </Paper>
    );
};

export default Dashboard;
