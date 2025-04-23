import { Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { ITransaction } from '../../types';

import styles from './TransactionsTable.module.css';

interface TransactionsTableProps {
    filtered: ITransaction[];
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({ filtered }) => {
    return (
        <Card>
            <CardContent className={styles.tableContent}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Дата</TableCell>
                            <TableCell>Категория</TableCell>
                            <TableCell>Сумма</TableCell>
                            <TableCell>Описание</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filtered.map((tx) => (
                            <TableRow key={tx.id}>
                                <TableCell>
                                    {new Date(tx.date).toLocaleString('ru-RU', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                    })}
                                </TableCell>
                                <TableCell>{tx.category}</TableCell>
                                <TableCell style={{ color: tx.type === 'expense' ? 'red' : 'green' }}>
                                    {tx.amount}$
                                </TableCell>
                                <TableCell>{tx?.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default TransactionsTable;
