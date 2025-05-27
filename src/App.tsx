import { Container } from '@mui/material';
import AppRouter from './components/appRouter/AppRouter';
import NavigationBar from './components/navigationBar/NavigationBar';
import { HashRouter } from 'react-router-dom';

const App = () => {
    return (
        <HashRouter>
            <NavigationBar />
            <Container maxWidth="sm">
                <AppRouter />
            </Container>
        </HashRouter>
    );
};

export default App;
