import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IDiagramData, ISummary, ITransaction } from '../../types';

export const transactionsApi = createApi({
    reducerPath: 'transactionsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    tagTypes: ['Transaction'],
    endpoints: (builder) => ({
        getAllTransactions: builder.query<ITransaction[], void>({
            query: () => 'transactions',
            providesTags: ['Transaction'],
        }),
        getSummary: builder.query<ISummary, void>({
            query: () => 'summary',
            providesTags: ['Transaction'],
        }),
        getExpensesByCategory: builder.query<IDiagramData[], void>({
            query: () => 'expenses-by-category',
            providesTags: ['Transaction'],
        }),
        getLastTransactions: builder.query<ITransaction[], void>({
            query: () => 'transactions/last',
            providesTags: ['Transaction'],
        }),
        createTransaction: builder.mutation<ITransaction, Partial<ITransaction>>({
            query: (transaction) => ({
                url: 'transactions',
                method: 'POST',
                body: transaction
            }),
            invalidatesTags: ['Transaction'],
        })
    })
});

export const { 
    useGetAllTransactionsQuery,
    useGetSummaryQuery,
    useGetExpensesByCategoryQuery,
    useGetLastTransactionsQuery,
    useCreateTransactionMutation,
} = transactionsApi;