
 const Contact=require("./models/contactModel")
 
 
 const getContact=async(req,res)=>{
    const contacts=Conatct.find()
    res.send(contatcs)
}

const asyncHandler=require("express-async-handler")
const createContact=asyncHandler(async(req,res)=>{
    console.log("The request body is",req.body)
    const { name,email,phone }=req.body
    if(!name||!email||!phone){
        res.status(400)
        throw new Error("all fields are mandatory")
    }
    const contact=await Contact.create({
        name,
        e,ail,
        phone
    })
    res.send(contact)
})


const getpContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    const  updatecontact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body
        
)
    res.send(updatecontact)
})

const updateContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")}
    res.send("update contacts")
})

const deleteContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not delete")}
        await Contact.remove()
        res.send(contact)
})





module.exports={ getContact,createContact,getpContact,updateContact,deleteContact}
