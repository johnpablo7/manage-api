import express from "express";
import { boardsRouter } from "./routes/boards";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hola mundo" });
});

app.use("/boards", boardsRouter);

app.listen(3000, () => {
  console.log("Corriendo en el puerto 3000");
});
