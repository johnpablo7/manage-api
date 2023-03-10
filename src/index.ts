import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hola mundo" });
});

app.listen(3000, () => {
  console.log("Corriendo en el puerto 3000");
});
