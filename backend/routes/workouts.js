const express = require('express');
const Workout = require('../models/workoutModel');
const router = express.Router();


router.get('/', (req,res)=>{
    res.json({message: 'Get all workouts'});  //  returning a JSON response with a message
})
router.get('/:id', (req,res)=>{
    res.json({message: 'Get a single  workouts'});  //  returning a JSON response with a message
})
router.post('/',  async(req,res)=>{
   const {title, reps, load} = req.body;
     try {
        const workout = await Workout.create({title, reps, load});  //  creating a new workout using the create method from the workoutModel
      res.status(200).json(workout) //  returning the created workout as a JSON response 
     } catch (error) {
        res.status(400).json({error: error.message});  //  returning an error message if the workout creation fails
     }
    res.json({message: 'Create a new workout'});  //  returning a JSON response with a message
})
router.patch('/:id', (req,res)=>{
    res.json({message: 'update a single workout'});  //  returning a JSON response with a message
})
router.delete('/:id', (req,res)=>{
    res.json({message: 'DELETE a single  workout'});  //  returning a JSON response with a message
})
module.exports = router;  //  exporting the router so it can be used in server.js  

//  in order to use the post and patch api method use must add middleware in the server.js file which is called app.user(express.json());