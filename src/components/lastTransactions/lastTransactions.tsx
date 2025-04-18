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
import { ILastTransaction } from '../../types';

const LastTransaction: React.FC = () => {
    const transactions: ILastTransaction[] = [
        { title: 'Еда', amount: -50, date: new Date('12.05.2024') },
        { title: 'Зарплата', amount: 2000, date: new Date('10.05.2024') },
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
                                        <Typography variant="body1">{tx.title}</Typography>
                                        <Chip
                                            label={`${tx.amount > 0 ? '+' : ''}$${Math.abs(tx.amount)}`}
                                            color={tx.amount > 0 ? 'success' : 'error'}
                                            variant="outlined"
                                            size="small"
                                        />
                                    </Box>
                                }
                                secondary={
                                    <Typography variant="body2" color="text.secondary">
                                        {tx.date.toLocaleDateString()}
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
