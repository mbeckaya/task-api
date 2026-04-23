import express from "express";
import cors from "cors";
import "dotenv/config";
import { notFound } from "./middlewares/404.middleware";
import { PORT } from "./utils/constants";
import routes from "./routes";

const app = express();

app.use(express.json());

app.use(cors());

routes.forEach(route => app.use(route));

app.use(notFound);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});