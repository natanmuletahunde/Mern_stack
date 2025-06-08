const express = require('express');
const { createWorkout 
    
} = require('../controllers/workoutController');
const router = express.Router();


router.get('/', (req,res)=>{
    res.json({message: 'Get all workouts'});  
})
router.get('/:id', (req,res)=>{
    res.json({message: 'Get a single  workouts'});
})
router.post('/',createWorkout)
router.patch('/:id', (req,res)=>{
    res.json({message: 'update a single workout'}); 
})
router.delete('/:id', (req,res)=>{
    res.json({message: 'DELETE a single  workout'}); 
})
module.exports = router; 
