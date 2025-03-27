import express from "express";
import notasRoutes from "./routes/notasRoutes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use("/notas", notasRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
