CREATE TABLE product (
    "productid" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255),
    "rating" VARCHAR(255),
    "price" DECIMAL NOT NULL,
    "quantityinstock" INTEGER NOT NULL,
)

CREATE TABLE purchase (
    "purchaseid" SERIAL PRIMARY KEY,
    "productid" VARCHAR(255) REFERENCES product("productid") /*Foreign Key*/
    "timestamp" DATE NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitcost" DECIMAL NOT NULL,
    "totalcost" DECIMAL NOT NULL
)

CREATE TABLE purchasesummary (
    "purchasesummary" SERIAL PRIMARY KEY,
    "totalpurchased" PRIMARY KEY NOT NULL,
    "changepercentage" INTEGER,
    "date" DATE NOT NULL,
)

CREATE TABLE sales (
    "salesid" SERIAL PRIMARY KEY,
    "productid" VARCHAR(255) REFERENCES product("productid") /*Foreign Key*/
    "timestamp" DATE NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitprice" DECIMAL NOT NULL,
    "totalamount" DECIMAL NOT NULL
)

CREATE TABLE salessummary (
    "salessummaryid" SERIAL PRIMARY KEY,
    "totalvalue" PRIMARY KEY NOT NULL,
    "changepercentage" DECIMAL,
    "date" DATE NOT NULL,
)


CREATE TABLE expenses (
    "expenseid" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255),
    "amount" DECIMAL NOT NULL
)

CREATE TABLE expensesummary (
    "expensesummaryid" SERIAL PRIMARY KEY,
    "totalexpenses" DECIMAL NOT NULL,
    "date" DATE NOT NULL,
)

CREATE TABLE expensebycategory (
    "expensebycategoryid" SERIAL PRIMARY KEY,
    "expensesummaryid" VARCHAR(255) REFERENCES expensesummary("expensesummaryid") /*Foreign Key*/
    "category" VARCHAR(255),
    "amount" DECIMAL NOT NULL,
    "date" DATE NOT NULL,
)