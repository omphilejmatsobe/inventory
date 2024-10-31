import { UUID } from "crypto";
import { createApi, CreateApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import build from "next/dist/build";

export interface Product{
    productId: UUID;
    name: string;
    price: number;
    rating?: number;
    quantityInStock: number;
}

export interface SalesSummary{
    salesSummaryId: UUID;
    totalValue: number;
    changePercentage?: number;
    date: string;
}

export interface PurchaseSummary{
    purchaseSummaryId: UUID;
    totalPurchased: number;
    changePercentage?:number;
    data: string;
}

export interface ExpenseSummary{
    expenseSummaryId: UUID;
    totalExpenses: number;
    date: string;
}

export interface ExpenseByCategorySummary{
    expenseByCategorySummary: UUID;
    category: string;
    amount: string;
    date: string;
}

export interface DashboardMetric{
    popularProducts: Product[];
    salesSummary: SalesSummary[];
    purchaseSummary: PurchaseSummary[];
    expenseSummary: ExpenseSummary[];
    expenseByCategorySummary: ExpenseByCategorySummary[];
}

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL}),
    reducerPath: "api",
    tagTypes: [],
    endpoints: (build) => ({}),
})

export const {} = api;