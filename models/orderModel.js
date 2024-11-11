import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    userId:{
        type:String,
        required:true
    },
    
    items:{
        type:Array,
        required:true
    },

    amount:{
        type:Number,
        required:true
    },

    status:{
        type:String,
        default:"Food Processing"
    },

    address:{
        type:Object,
        required:true
    },

    date:{
        type:Date,
        default:Date.now()
    },

    payment:{
        type:Boolean,
        required:true
    }
})

const orderModel = mongoose.model("order",orderSchema)

export default orderModel;