import { Request, Response } from "express";
import { Pool } from "../db.js";
import { promises } from "dns";

export const getDashboardMetrics = async (req: Request, res: Response):Promise <void> => 
{
    try {
        const popularProducts = await Pool`
        //SQL LOGIC HERE
        `
        const salesSummary = await Pool`
        //SQL LOGIC HERE
        `

        const purchaseSummary = await Pool`
        //SQL LOGIC HERE
        `

        const expenseSummary = await Pool`
        //SQL LOGIC HERE
        `

        const expenseByCategorySummaryRaw = await Pool`
        //SQL LOGIC HERE
        `

        const expenseByCategory = await expenseByCategorySummaryRaw.map(
            (item) => ({
                ...item,
                amount: item.amount.toString()
            })
        )

        res.json({
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