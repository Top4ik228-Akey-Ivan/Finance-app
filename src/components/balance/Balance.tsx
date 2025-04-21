import { Card, CardContent, Divider, Typography } from '@mui/material';
import React from 'react';
import { useGetSummaryQuery } from '../../redux/services/transactionsApi';

const Balance: React.FC = () => {

    const {data, error} = useGetSummaryQuery();

    return (
        <Card>
            {error && <Typography>Ошибка загрузки данных</Typography>}

            <CardContent>
                <Typography variant="h6">Баланс</Typography>
                <Typography variant="h5" color="primary">
                    ${data?.balance}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body1" color='success'>Доходы: ${data?.income}</Typography>
                <Typography variant="body1" color="error">
                    Расходы: ${data?.expense}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Balance;