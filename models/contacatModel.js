const mongoose=require('mongoose');



const contactSchema=mongoose.Schema({

    name:{
        type:String,
        required:[true,'please add the contat name']
    },
    email:{
        type:String,
        required:[true,'please add the email name']
    },
    phone:{ 
        type:String,
        required:[true,'please add the phone num']
        
    }
   
}

    )

    module.exports=mongoose.model('Contact',contactSchema)