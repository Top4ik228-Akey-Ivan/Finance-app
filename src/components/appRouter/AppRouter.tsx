import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/dashboardPage/DashboardPage';
import TransactionsPage from '../../pages/transactionsPage/TransactionsPage';
import AnalyticsPage from '../../pages/analyticsPage/AnaliticsPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
    );
};

export default AppRouter;
