import { Box, Typography, Button} from '@mui/material';
import Balance from '../../components/balance/Balance';
import Diagram from '../../components/diagram/Diagram';
import LastTransaction from '../../components/lastTransactions/lastTransactions';

;

const Dashboard = () => {
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
            <LastTransaction/>
            {/* Кнопка добавления */}
            
            <Box textAlign="center">
                <Button variant="contained" size="large">
                    Добавить операцию
                </Button>
            </Box>
        </Box>
    );
};

export default Dashboard;
