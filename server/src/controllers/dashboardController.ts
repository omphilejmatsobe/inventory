import { Request, Response } from "express";
import { Pool } from "../db.js";

export const getDashboardMetricsHandler = async (req: Request, res: Response):Promise <void> => 
{
    try {
        const popularProducts = await Pool.query`
        SELECT * FROM "popularproducts" ORDER BY "price" DESC;
        `

        const salesSummary = await Pool.query`
        SELECT * FROM "salessummary" ORDER BY "price" DESC;
        `

        const purchaseSummary = await Pool.query`
        SELECT * FROM "purchasesummary" ORDER BY "price" DESC;
        `

        const expenseSummary = await Pool.query`
        SELECT * FROM "expensesummary" ORDER BY "price" DESC;
        `

        const expenseByCategorySummaryRaw = await Pool.query`
        SELECT * FROM "expensebycategorysummary" ORDER BY "price" DESC;
        `

        const expenseByCategory = await expenseByCategorySummaryRaw.map(
            (item) => ({
                ...item,
                amount: item.amount.toString()
            })
        )

        res.status(200).json({
            popularProducts,
            salesSummary,
            purchaseSummary,
            expenseSummary,
            expenseByCategory
        })
    }
    catch (err)
    {
        res.status(500).json({ message : "Dashboard metric GET request failed."});
    }
}