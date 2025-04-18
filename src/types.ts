export interface IPieData {
    name: string;
    value: number;
}

export interface ITransaction {
    id: number;
    category: string;
    amount: number;
    date: string;
    description?: string;  
    type: 'income' | 'expense';
};

export interface IFilter {
    categoryFilter: string;
    dateFilter: string;
}
