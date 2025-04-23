import { Box, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import React from 'react';
import { ISelectedMonth } from '../../types';
import { months } from '../../constants/categories';

interface MonthSelectProps {
    handleMonthChange: (e: SelectChangeEvent) => void;
    selected: ISelectedMonth;
}

const MonthSelect: React.FC<MonthSelectProps> = ({ handleMonthChange, selected }) => {
    return (
        <Box mb={3} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Период:</Typography>
            <Select value={selected.label} onChange={handleMonthChange} size="small">
                {/* Например: от мая 2023 до текущего месяца */}
                {Array.from({ length: 12 }, (_, i) => {
                    const date = new Date();
                    date.setMonth(date.getMonth() - i);
                    const label = `${months[date.getMonth()]} ${date.getFullYear()}`;
                    return (
                        <MenuItem key={label} value={label}>
                            {label}
                        </MenuItem>
                    );
                })}
            </Select>
        </Box>
    );
};

export default MonthSelect;
