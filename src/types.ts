export interface ITransaction {
    id: number;
    category: string;
    type: 'income' | 'expense';
    amount: number;
    date: string;
    description?: string;
}

export interface IFilter {
    categoryFilter: string;
    dateFilter: string;
}

// RTK-query

export interface ISummary {
    income: number;
    expense: number;
    balance: number;
}

export interface IDiagramData {
    category: string;
    amount: number;
}

export interface ILineChartData extends IDiagramData {
    date: string;
}

export interface IAnalytics {
    barChartData: IDiagramData[];
    lineChartData: ILineChartData[];
}

export interface ISelectedMonth {
    label: string;
    year: number;
    month: number;
}
