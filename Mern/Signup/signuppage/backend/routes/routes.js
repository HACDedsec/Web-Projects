const express = require('express')
const router = express.Router()
const signupTemplatecopy = require('../models/model')

router.post('/signup', (req, res)=>{
   const user = new signupTemplatecopy({
       username:req.body.username,
       email:req.body.email,
       password:req.body.password

   })
   user.save()
   .then(data =>{
       res.json(data)
   }).catch(error =>{
    res.json(error)
   })
   
})

module.exports = router


