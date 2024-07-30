import mongoose from "mongoose";

 export const connectDB =async () =>{
    await mongoose.connect('mongodb+srv://christopherbundi639:0745315644@cluster0.uosxzen.mongodb.net/food-del').then(()=>console.log("Database has been conected cristoper"))
}