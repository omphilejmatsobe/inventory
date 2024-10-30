import { UUID } from "crypto";

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