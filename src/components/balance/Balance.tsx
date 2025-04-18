import { Card, CardContent, Divider, Typography } from '@mui/material';

const Balance = () => {

    const balance = 5000;
    const income = 7000;
    const expenses = 2000;

    return (
        <Card>
            <CardContent>
                <Typography variant="h6">Баланс</Typography>
                <Typography variant="h5" color="primary">
                    ${balance}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body1" color='success'>Доходы: ${income}</Typography>
                <Typography variant="body1" color="error">
                    Расходы: ${expenses}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Balance;