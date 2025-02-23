import { Router } from 'express'
const router = Router()
import Subscribers from '../models/subscribers_model.js'



//Getting All 

router.get('/', async (req,res)=>{
    try{
        const subscribers = await Subscribers.find()
        res.json(subscribers)
    } catch (error){
        res.status(500).json({message:error.message})
    }
})

//Getting One
router.get('/:id',(req,res)=>{
    res.send(req.params.id)
})


//Creating One

router.post('/', async (req,res)=>{
    console.log(req.body)
    const subscriber = new Subscribers({
        name: req.body.name,
        subscriberToChannel: req.body.subscriberToChannel
    })
    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber) // code 201 means you created something
    }
    catch (err){
        res.status(400).json({message: err.messsage}) // 400 error means something wrong with user input
    }
})

//Updating One

router.patch('/:id',(req,res)=>{
    
})

//Deleting One
router.delete('/:id',(req,res)=>{
    
})



export default router