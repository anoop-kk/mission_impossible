import express from "express";
import cors from "cors";
import path from "path";
import { publicRoutes } from "./routes";
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(publicRoutes);
// app.use('/user', userRoutes);
app.listen(PORT, () => {
    console.log(`Application is runnig on port ${PORT}`);
});