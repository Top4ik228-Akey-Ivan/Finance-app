import React, { useState } from 'react';
import { Typography, SelectChangeEvent, Paper } from '@mui/material';
import { useGetAnalyticsByPeriodQuery } from '../../redux/services/transactionsApi';
import LinesChart from '../../components/lineChart/LineChart';
import BarsChart from '../../components/barChart/BarChart';
import { ISelectedMonth } from '../../types';
import { months } from '../../constants/categories';
import MonthSelect from '../../components/monthSelect/MonthSelect';

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;

const AnalyticsPage: React.FC = () => {
    const [selected, setSelected] = useState<ISelectedMonth>({
        label: `${months[currentMonth - 1]} ${currentYear}`,
        year: currentYear,
        month: currentMonth,
    });

    const { data } = useGetAnalyticsByPeriodQuery({
        year: selected.year,
        month: selected.month,
    });

    const handleMonthChange = (e: SelectChangeEvent) => {
        const [monthName, yearStr] = e.target.value.split(' ');
        const monthIndex = months.indexOf(monthName) + 1;
        setSelected({ label: e.target.value, year: parseInt(yearStr), month: monthIndex });
    };

    return (
        <Paper sx={{ p: 2, m: 2 }}>
            <MonthSelect handleMonthChange={handleMonthChange} selected={selected} />

            {!data?.lineChartData?.length && !data?.barChartData?.length ? (
                <Typography>Нет данных за выбранный период</Typography>
            ) : (
                <>
                    {/*График доходов и расходов*/}
                    <LinesChart data={data}></LinesChart>

                    {/*Диаграмма расходов*/}
                    <BarsChart data={data} />
                </>
            )}
        </Paper>
    );
};

export default AnalyticsPage;
