
import express from "express";
import Company from "../models/company.js"


router=express.Router();

// this routes takes skill from user as a input and returns a releted company names
//i.e skil based company  recommendation
router.post("/",async(req,res)=>{
    try{
        const{ skills }=req.body;
        const companies=await Company.find({
            requiredSkills:{$in:skill},
        })
        res.status(201).json(companies);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }

});
export default router;
