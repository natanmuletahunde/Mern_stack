const express = require('express');
const { createWorkout, getWorkouts ,
    getWorkout
} = require('../controllers/workoutController');
const router = express.Router();


router.get('/',getWorkouts)
router.get('/:id',getWorkout)
router.post('/',createWorkout)
router.patch('/:id', (req,res)=>{
    res.json({message: 'update a single workout'}); 
})
router.delete('/:id', (req,res)=>{
    res.json({message: 'DELETE a single  workout'}); 
})
module.exports = router; 
