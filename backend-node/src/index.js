import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
const prisma = new PrismaClient();

const app = express();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/fetch-tickers", async (req, res) => {
  try {
    const response = await fetch("https://api.wazirx.com/api/v2/tickers");
    const data = await response.json();
    const myValuesArray = Object.values(data);
    const slicedArr = myValuesArray.slice(0, 10);
    console.log("MY SLICED ARR -> ");
    console.log(slicedArr);

    const savedArray = slicedArr.map( (item) => {
       return prisma.ticker.create({
        data: {
          name: item.name,
          last: parseFloat(item.last),
          buy: parseFloat(item.buy),
          sell: parseFloat(item.sell),
          volume: parseFloat(item.volume),
          base_unit: item.base_unit,
        },
      });
    });

    await Promise.all(savedArray);
    console.log("added to DB!");
    res.status(200).json({
      message: "Successfully added to db",
    });
  } catch (error) {
    console.log("Error fetching data from wazirx api!");
    res.status(401).json({
      success: "false",
    });
  }
});

app.get("/tickers", async (req, res) => {
  try {
    const tickers = await prisma.ticker.findMany({
      orderBy: {
        createdAt: "asc",
      },
      take: 10,
    });

    res.status(200).json(tickers);
  } catch (error) {
    res.status(401).json({
      success: "false",
    });
  }
});

app.get("/*", async (req, res) => {
  res.json({ status: true, message: "My node.js app works" });
});

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}`));
