const express = require("express")
const router = new express.Router();
const MenRanking = require("../models/mens");

// we will handle post req
router.post("/mens", async(req , res)=>{
    try{
        const addingMensRecords = new MenRanking(req.body)
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    }catch(e){
        res.status(400).send(e);
    }
    
})

// we will handle get req
router.get("/mens", async(req , res)=>{
    try{
        
        const getMens = await MenRanking.find({}).sort({"ranking":1});
        res.status(201).send(getMens);
    }catch(e){
        res.status(400).send(e);
    }
    
})

// we will handle get req for indivial
router.get("/mens/:id", async(req , res)=>{
    try{
        const _id = req.params.id;
        const getMens = await MenRanking.findById(_id);
        res.send(getMens);
    }catch(e){
        res.status(400).send(e);
    }
    
})

// we will handle patch req for indivial
router.patch("/mens/:id", async(req , res)=>{
    try{
        const _id = req.params.id;
        const getMens = await MenRanking.findByIdAndUpdate(_id , req.body, {
            new:true
        });
        res.send(getMens);
    }catch(e){
        res.status(500).send(e);
    }
    
})

// we will handle delete req for indivial
router.delete("/mens/:id", async(req , res)=>{
    try{
        const _id = req.params.id;
        const getMens = await MenRanking.findByIdAndDeledte(_id);
        res.send(getMens);
    }catch(e){
        res.status(500).send(e);
    }
    
})

module.exports = router