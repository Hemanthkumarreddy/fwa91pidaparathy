const express = require('express')
const router = express.Router()

router.get('/',(req,res,next) =>{
    console.log(req.query)
    
        
    if(Object.keys(req.query).length === 0){
        
        console.log("entered")
        let power = Math.random()
        res.render('computation', {value : `power applied to ${power} is ${Math.pow(power)}`})
    }
    else
    for(let a in req.query)
    {
    {
        
        console.log(a)
    res.render('computation', {value : `power applied to ${req.query[a]} is ${Math.pow(req.query[a])}`})
    }
}

   

})



module.exports = router