import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"
import path from "path";

const app: Express = express()

const PORT: string | number = 80

app.use(express.json())
app.use(cors())
app.use(todoRoutes)

const uri: string = `mongodb+srv://gastro-order:9hhX1zSOBpIu3FI2@gastro-order.y5kfk.mongodb.net/gastro-order?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
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
