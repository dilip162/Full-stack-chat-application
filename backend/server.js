import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./DB/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json()); // to the incomming request with json payloads (req.body)
// app.get("/", (req, res) => {
//   res.send("Server is running !!!");
// });

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`App is listning in port ${PORT}`);
});
