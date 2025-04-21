import { MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import { IFilter } from '../../types';

interface filterProps {
    filter: IFilter;
    setFilter: (obj: IFilter) => void;
    uniqueCategories: string[];
};

const Filter: React.FC<filterProps> = ({filter, setFilter, uniqueCategories}) => {

    return (
        <>
            <TextField
                label="Фильтр по дате"
                type="date"
                value={filter.dateFilter}
                onChange={(e) => setFilter({ ...filter, dateFilter: e.target.value })}
                fullWidth
                InputLabelProps={{ shrink: true }}
            />

            <Select
                value={filter.categoryFilter}
                onChange={(e) => setFilter({ ...filter, categoryFilter: e.target.value })}
                displayEmpty
                fullWidth
            >
                <MenuItem value="">Все категории</MenuItem>
                {uniqueCategories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                        {cat}
                    </MenuItem>
                ))}
            </Select>
        </>
    );
};

export default Filter;