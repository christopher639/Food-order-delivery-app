import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

//app config
const app = express()
const port = 5000

//middleware
app.use(express.json())
app.use(cors())

//db fuction
connectDB();
//api end point
app.use("/api/food",foodRouter)

//app get method
app.get("/",(req,res)=>{
    res.send("API Working Bundi christopher congratulations")
})
app.listen(port,()=>{
    console.log(`Server starded on  http://localhost: ${port}`);
})

//mongodb+srv://christopherbundi639:0745315644@cluster0.uosxzen.mongodb.net/?