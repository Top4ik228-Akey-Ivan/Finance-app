import { Box, Card, CardContent, Chip, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useGetLastTransactionsQuery } from '../../redux/services/transactionsApi';

const LastTransaction: React.FC = () => {
    const { data, error } = useGetLastTransactionsQuery();

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Последние операции
                </Typography>

                {error && <Typography>Ошибка зугрзки данных</Typography>}

                <List>
                    {data && data.length > 0 ? (
                        data?.map((tx, idx) => (
                            <ListItem key={idx} disableGutters>
                                <ListItemText
                                    primary={
                                        <Box display="flex" justifyContent="space-between" alignItems="center">
                                            <Typography variant="body1">{tx.category}</Typography>
                                            <Chip
                                                label={`${tx.type === 'income' ? '+' : ''}$${tx.amount}`}
                                                color={tx.type === 'income' ? 'success' : 'error'}
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
                        ))
                    ) : (
                        <Typography>Транзакций пока нет</Typography>
                    )}
                </List>
            </CardContent>
        </Card>
    );
};

export default LastTransaction;
