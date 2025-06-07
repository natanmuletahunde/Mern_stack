require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const workoutsroute = require('./routes/workouts');

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.get('/', (req,res)=>{
    res.json({'message ':'Hello World!'});
})

app.use('/api/workouts', workoutsroute);

// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI).then(()=>{
app.listen(process.env.PORT, ()=>{
    console.log('connected to db & listening on port', process.env.PORT);
    })
}).catch((error)=>{
    console.log(error)
})
