import { Container } from '@mui/material';
import AppRouter from './components/appRouter/AppRouter';
import NavigationBar from './components/navigationBar/NavigationBar';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Container maxWidth="sm">
                <AppRouter />
            </Container>
        </BrowserRouter>
    );
};

export default App;
