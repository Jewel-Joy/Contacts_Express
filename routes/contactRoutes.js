const express=require("express")
const router=express.Router()
const {getContact}=require("./controllers/contactControllers")
const {createContact}=require("./controllers/contactControllers")
const {getpContact}=require("./controllers/contactControllers")
const {updateContact}=require("./controllers/contactControllers")
const {deleteContact}=require("./controllers/contactControllers")


router.route('/').get(getContact)

router.route('/').post(createContact)

router.route('/:id').get(getpContact)

router.route('/:id').put(updateContact)

router.route('/:id').delete(deleteContact)
module.exports=router