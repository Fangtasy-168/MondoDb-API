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

//Creating One

router.post('/newUser', async (req,res)=>{
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



async function getSubscriber( req, res , next){
    let subscriber
    try{
        subscriber = await Subscribers.findById(req.params.id)
        if(subscriber == null){
            return res.status(404).json({message: 'Cannot Find Subscriber'})
        }
    }
    catch (error){
       return res.status(500).json({message:error.message})
    }
    res.subscriber = subscriber
    next()
}




//Getting One
router.get('/:id', async (req,res)=>{
    console.log(req.params.id)
    try{
        let subscriber = await Subscribers.findById(req.params.id)
        res.json(subscriber)
    }
    catch (error){
        res.json({message: error.message})
    }

    
    
})
//Updating One

router.put('/:id', async (req,res)=>{
    if(req.params.name !== null){
        
    }
    if(req.params.subscriberToChannel !==null){

    }
    const {name, subscriberToChannel} = req.body

    const subscriber = await Subscribers.findById(req.params.id)
    subscriber.name = name
    subscriber.subscriberToChannel = subscriberToChannel


    try {
        const updatedSubscriber = await subscriber.save()
        res.json(updatedSubscriber)
    }
    catch (error){
        res.status(400).json({message: error.message})
    }
    
})

//Deleting One
router.delete('/:id', async (req,res)=>{
    try{
        let deletedResults = await Subscribers.findByIdAndDelete(req.params.id)
        res.json({message: deletedResults})
    }
    catch (error){
        res.status(500).json({message:error.message})
    }
})



export default router