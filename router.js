const express = require('express')
const router =  express.Router()
var userdata =[]
router.get('/users', (req,res) => {
    res.json({'data':userdata})
})

router.get('/:id', (req,res) => {
    var idd = req.params.id;
    var data=userdata.find(function(value){
        return value.id ==idd ;})
    if (data){
        res.json({"data":data})
}else{
    res.status(400).send('id is invalid')
}
    })



router.post('/' , (req,res) =>{
    let body = req.body
    userdata.push(req.body)
    res.json({'sucess':'posted'})
    
})



router.patch('/:id' , (req,res) =>{
    var idd = req.params.id;
    var data=userdata.find(function(value){
        return value.id ==idd ;})
    console.log(data)
    if(data){
    data.name = req.body.name;
    res.send('updated')
    }else{
        res.status(400).send('id is invalid')
    }
})

router.delete('/:id' , (req,res) =>{
    var idd = req.params.id;
    var data=userdata.find(function(value){
        return value.id ==idd ;})
    if(data){
    var ind=userdata.indexOf(data)
    userdata.pop(ind)
    res.send('deleted')
    }else{
        res.status(400).send('id is invalid')
    }
})

module.exports = router