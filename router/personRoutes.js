const express = require("express");
const userModel = require("../models/userModel.js");

const router = express.Router();

// Route to register a new user
router.post("/register", async (req, res) => {
    try {
        const { name, age, work, mobile, email, address, salary } = req.body;
        const user = await userModel.create({ name, age, work, mobile, email, address, salary });
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send({ error: "Error registering user", details: error.message });
    }
});

// Route to get all users
router.get("/persons", async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ error: "Error fetching users", details: error.message });
    }
});

// Route to get users by work type
router.get("/:workType", async (req, res) => {
    const { workType } = req.params;
    if (["chef", "waiter", "manager"].includes(workType)) {
        try {
            const person = await userModel.findOne({ work: workType });
            if (person) {
                res.status(200).send(person);
            } else {
                res.status(404).send({ error: "User not found" });
            }
        } catch (error) {
            res.status(500).send({ error: "Error fetching user by work type", details: error.message });
        }
    } else {
        res.status(400).send({ error: "Invalid work type" });
    }
});

router.put("/update/:id",async(req,res)=>{
      let{id}=req.params
      let{name}=req.body
      try {
        let updatedperson=await userModel.findByIdAndUpdate({_id:id},{name:name},{new:true})
        res.send(updatedperson)
      } catch (error) {
        console.log(`update error ${error}`)
      }
})

module.exports = router;
