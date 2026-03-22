import express from "express";
import Students from "../models/student.js";

const router=express.Router();

//get all students in that company

router.get("/",async(req,res)=>{
    try{
        const students=await Student.find().populat("placedCompany");
        res.json(students);
    }catch(error){
        res.status(500).json({message:error.message});

    }
});

// post create new student

router.post("/",async(req,res)=>{
    try{
        const newStudent= new Student( req.body);
        const savedStudent= await newStudent.save();
        res.status(201).json(savedStudent);
        
    }catch(error){
        res.status(500).json({message:error.message});
    }
    
})

export default router;