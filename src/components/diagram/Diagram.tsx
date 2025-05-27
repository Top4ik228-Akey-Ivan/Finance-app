import { Card, CardContent, Typography } from '@mui/material';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import React from 'react';
import { useGetExpensesByCategoryQuery } from '../../redux/services/transactionsApi';
import styles from './Diagram.module.css';

const COLORS: string[] = [
    '#64b5f6', '#ba68c8', '#81c784', '#e57373', '#ffb74d', '#4dd0e1',
];

const Diagram: React.FC = () => {
    const { data, error } = useGetExpensesByCategoryQuery();

    return (
        <Card className='card'>
            {error && <Typography className={styles.errorText}>Ошибка загрузки данных</Typography>}

            <CardContent>
                <Typography variant="h6">
                    Расходы по категориям
                </Typography>
                <ResponsiveContainer width="100%" height={250}>
                    {data && data.length > 0 ? (
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="amount"
                                nameKey="category"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                label
                            >
                                {data.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    ) : (
                        <Typography className={styles.noDataText}>Расходов пока нет</Typography>
                    )}
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default Diagram;
