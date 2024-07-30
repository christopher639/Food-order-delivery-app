import express from "express"
import { addFood } from "../controllers/foodContoller.js"

import multer from "multer"

const foodRouter =express.Router();

//images storage engine
const storage =multer.diskStorage({
    destination:"uploads",
    getFilename:(req,file,cd)=>{
        return cd(null,`${date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)







export default foodRouter