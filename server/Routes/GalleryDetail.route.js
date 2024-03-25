import express from "express";
let router = express.Router();
import {
  postData,
  getData,
  getSpecificData,
  updateData,
  deleteData,
  getSpecificIdData,
} from "../Controllers/GalleryDetail.controller.js";
import { verifyToken } from "../Middleware/Auth.js";

//Create Contact Details :
router.post("/",verifyToken, postData);
//Get Contact Detail :
router.get("/",verifyToken, getData);
//Get Specific gallery Detail :
router.get("/:id",verifyToken, getSpecificData);
//Get SpecificID gallery Detail :
router.get("/specific/:id",verifyToken, getSpecificIdData);
//Update Speicfic Data From Database :
router.put("/specific/:id",verifyToken, updateData);
//Delete Specific Data :
router.delete("/specific/:id",verifyToken, deleteData);

export default router;
