require("dotenv").config();
const express = require("express");
const cors = require("cors");
const setupSwagger = require("./swagger");

const colmeiaRoutes = require("./routes/colmeias.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/colmeias", colmeiaRoutes);

setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Swagger UI disponível em http://localhost:${PORT}/api-docs`);
});
