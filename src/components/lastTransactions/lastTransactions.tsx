import {
    Box,
    Card,
    CardContent,
    Chip,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material';
import React from 'react';
import { ITransaction } from '../../types';

const LastTransaction: React.FC = () => {

    const transactions: ITransaction[] = [
        { id: 1, type: 'expense', category: 'Еда', amount: 50, date: '2024-12-04T21:00:00.000Z' },
        { id: 2, type: 'income', category: 'Зарплата', amount: 2000, date: '2024-10-04T21:00:00.000Z' },
    ];

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Последние операции
                </Typography>
                <List>
                    {transactions.map((tx, idx) => (
                        <ListItem key={idx} disableGutters>
                            <ListItemText
                                primary={
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography variant="body1">{tx.category}</Typography>
                                        <Chip
                                            label={`${tx.type==='income' ? '+' : ''}$${tx.amount}`}
                                            color={tx.type==='income' ? 'success' : 'error'}
                                            variant="outlined"
                                            size="small"
                                        />
                                    </Box>
                                }
                                secondary={
                                    <Typography variant="body2" color="text.secondary">
                                        {new Date(tx.date).toLocaleString('ru-RU', {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: 'numeric',
                                        })}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default LastTransaction;
