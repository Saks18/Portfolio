import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import projectRoutes from "./routes/projectRoutes.js";
import path from "path";
import {fileURLToPath} from "url";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.use("/api/projects", projectRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Serve frontend build files in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));

    app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
});

}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
