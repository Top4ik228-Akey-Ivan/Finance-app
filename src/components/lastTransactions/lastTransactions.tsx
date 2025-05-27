import { Paper, Typography, List, ListItem, ListItemText, Chip, Box } from '@mui/material';
import React from 'react';
import { useGetLastTransactionsQuery } from '../../redux/services/transactionsApi';

const LastTransactions: React.FC = () => {
    const { data, error } = useGetLastTransactionsQuery();

    return (
        <Paper className='card'>
            <Typography variant="h6">
                Последние операции
            </Typography>

            {error && <Typography>Ошибка загрузки данных</Typography>}

            <List>
                {data && data.length > 0 ? (
                    data.map((tx, idx) => (
                        <ListItem key={idx} disableGutters>
                            <ListItemText
                                primary={
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography variant="body1" fontWeight={500}>
                                            {tx.category}
                                        </Typography>
                                        <Chip
                                            label={`${tx.type === 'income' ? '+' : ''}$${tx.amount}`}
                                            color={tx.type === 'income' ? 'success' : 'error'}
                                            variant="outlined"
                                            size="small"
                                        />
                                    </Box>
                                }
                                secondary={
                                    <Typography variant='caption' color="text.secondary">
                                        {new Date(tx.date).toLocaleDateString('ru-RU')}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))
                ) : (
                    <Typography>Транзакций пока нет</Typography>
                )}
            </List>
        </Paper>
    );
};

export default LastTransactions;
