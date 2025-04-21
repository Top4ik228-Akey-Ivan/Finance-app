import React, { useState } from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    TextField
} from '@mui/material';
import { categoryOptions } from '../../constants/categories';
import { useCreateTransactionMutation } from '../../redux/services/transactionsApi';

interface AddTransactionModalProps {
    isModalOpen: boolean;
    toggleModal: () => void;
}

type FormState = {
    category: string;
    type: 'income' | 'expense';
    amount: string;
    date: string;
    description: string;
};


const AddTransactionModal: React.FC<AddTransactionModalProps> = ({ isModalOpen, toggleModal }) => {
    const today = new Date().toISOString().split('T')[0];

    const [createTransaction] = useCreateTransactionMutation();

    const initialForm: FormState = {
        category: '',
        type: 'expense',
        amount: '',
        date: today,
        description: '',
    };

    const [form, setForm] = useState(initialForm);

    const [errors, setErrors] = useState({
        category: false,
        type: false,
        amount: false,
        date: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: false }));
    };

    const handleSubmit = () => {
        const newErrors = {
            category: !form.category,
            type: !form.type,
            amount: !form.amount || Number(form.amount) <= 0,
            date: !form.date,
        };

        setErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);
        if (hasError) return;

        const currentTime = new Date().toTimeString();
        const fullDateTime = new Date(`${form.date}T${currentTime.split(' ')[0]}`);

        createTransaction({
            ...form,
            amount: Number(form.amount),
            date: fullDateTime.toISOString()
        });
        toggleModal();
        setForm(initialForm);
    };


    return (
        <Dialog
            open={isModalOpen}
            onClose={toggleModal}
            fullWidth
            maxWidth='xs'
        >
            <DialogTitle>Добавить транзакцию</DialogTitle>
            <DialogContent>
                <Box display="flex" flexDirection="column" gap={2} mt={1}>
                    <TextField
                        autoFocus
                        select
                        label="Тип"
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        error={errors.type}
                        helperText={errors.type && 'Обязательное поле'}
                        fullWidth
                    >
                        <MenuItem value="income">Доход</MenuItem>
                        <MenuItem value="expense">Расход</MenuItem>
                    </TextField>

                    <TextField
                        select
                        label="Категория"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        error={errors.category}
                        helperText={errors.category && 'Обязательное поле'}
                        fullWidth
                    >
                        {categoryOptions.map((cat) => (
                            <MenuItem key={cat} value={cat}>
                                {cat}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        label="Сумма"
                        name="amount"
                        type="number"
                        value={form.amount}
                        onChange={handleChange}
                        error={errors.amount}
                        helperText={errors.amount && 'Введите положительное число'}
                        fullWidth
                    />

                    <TextField
                        label="Дата"
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                        error={errors.date}
                        helperText={errors.date && 'Обязательное поле'}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                    />

                    <TextField
                        label="Описание"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        fullWidth
                    />
                </Box>
            </DialogContent>

            <DialogActions>
                <Button onClick={toggleModal}>Отмена</Button>
                <Button variant="contained" onClick={handleSubmit}>
                    Добавить
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddTransactionModal;
