import express from "express";
import { fetchData } from "axios-async-fetch-ts";

const app = express();
const port = process.env.PORT || 3000;

app.get("/data", async (req, res) => {
    try {
        const data = await fetchData(
            "https://jsonplaceholder.typicode.com",
            "posts",
        );
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
