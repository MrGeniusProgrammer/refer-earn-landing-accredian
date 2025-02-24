import cors from "cors";
import express, { Request, Response } from "express";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (_req: Request, res: Response) => {
	res.status(200).send("Server is running");
});

const PORT: string | number = 3000;

app.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`);
});
