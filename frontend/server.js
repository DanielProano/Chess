import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5173;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/chess/assets", express.static(path.join(__dirname, "dist/assets")));

app.use("/chess/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.get("/chess", (req, res) => {
  res.redirect("/chess/");
})

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Frontend running on port ${PORT}`);
});
