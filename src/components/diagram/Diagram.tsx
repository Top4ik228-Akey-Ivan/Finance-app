import { Card, CardContent, Typography } from '@mui/material';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import React from 'react';
import { useGetExpensesByCategoryQuery } from '../../redux/services/transactionsApi';

const Diagram: React.FC = () => {
    const { data, error } = useGetExpensesByCategoryQuery();

    const COLORS: string[] = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <Card sx={{ height: '100%' }}>
            {error && <Typography>Ошбика загрузки данных</Typography>}

            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Расходы по категориям
                </Typography>
                <ResponsiveContainer width="100%" height={200}>
                    {data && data.length > 0 ? (
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="amount"
                                nameKey="category"
                                cx="50%"
                                cy="50%"
                                outerRadius={70}
                                label
                            >
                                {data?.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    ) : (
                        <Typography>Расходов пока нет</Typography>
                    )}
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default Diagram;
