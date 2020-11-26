import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express()

const PORT: string | number = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(todoRoutes)

const url = process.env.MONGO_URL ||"";
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(url, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })
  

// add middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
