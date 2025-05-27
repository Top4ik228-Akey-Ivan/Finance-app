import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { IAnalytics } from '../../types';
import { Box, Typography } from '@mui/material';

interface LinesChartProps {
    data: IAnalytics;
}

const LinesChart: React.FC<LinesChartProps> = ({ data }) => {
    return (
        <Box className='card'>
            <Typography variant="h6" gutterBottom>
                Доходы и расходы по дням
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data?.lineChartData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="income" stroke="#4caf50" name="Доход" />
                    <Line type="monotone" dataKey="expense" stroke="#f44336" name="Расход" />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default LinesChart;
