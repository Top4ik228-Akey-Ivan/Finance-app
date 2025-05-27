import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
    const location = useLocation();

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Container className={styles.navbarContainer} maxWidth="sm">
                    <Typography variant="h6" component="div">
                        Финансы
                    </Typography>

                    <Box>
                        <Button 
                            component={Link} to="/" 
                            color={location.pathname === '/' ? 'secondary' : 'inherit'}>
                            Главная
                        </Button>
                        <Button
                            component={Link}
                            to="/transactions"
                            color={location.pathname === '/transactions' ? 'secondary' : 'inherit'}
                        >
                            Операции
                        </Button>
                        <Button
                            component={Link}
                            to="/analytics"
                            color={location.pathname === '/analytics' ? 'secondary' : 'inherit'}
                        >
                            Аналитика
                        </Button>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;
