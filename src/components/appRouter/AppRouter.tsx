import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/dashboardPage/DashboardPage';
import TransactionsPage from '../../pages/transactionsPage/TransactionsPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/transactions' element={<TransactionsPage />} />
        </Routes>

    );
};

export default AppRouter;