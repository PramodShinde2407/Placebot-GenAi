import express from "express";
import Placement from "../models/placement.js";

router=express.Router();
// to get all placements
router.get("/",async(req,res)=>{
    try{
        const placement =await Placement.find()
        .populate("studentId","name email linkdin")
        .populate("companyId","name");// replace student id with name,email linkind and companyid by name
        res.status(201).json(placement);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

// get students hired by company name

router.get("/company/:companyID",async(req,res)=>{
    try{
        const data=await Placement.find({
            companyId:req.params.companyId,
            status:"selected"

        }).populate("studentId","name email linkdin");
        res.staus(201).json({
            totalHired:data.length,
            students:data,
        });
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
    
});

//add placed student i.e link student+ company
router.post("/", async(req,res)=>{
    try{
        const newPlacement = new Placement(req.body);
        const savedPlacement= await newPlacement.save();
        res.status(201).json(savedPlacement);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})
export default router;