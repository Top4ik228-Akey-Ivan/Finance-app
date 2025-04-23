import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { IAnalytics } from '../../types';
import { Box, Typography } from '@mui/material';

interface BarsChartProps {
    data: IAnalytics;
}

const BarsChart: React.FC<BarsChartProps> = ({ data }) => {
    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Расходы по категориям
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data?.barChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#2196f3" name="Сумма" />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default BarsChart;
