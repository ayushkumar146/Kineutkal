const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    machine: {
        type: String,
        required: true
    },
    vibrations: [{
        xvalue: {
            type: String,
            required: true
        },
        yvalue:{
            type: String,
            required: true
        },
        zvalue:{
            type: String,
            required: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }],
    tvm:{
        type:String,
        required:true
    },
    ae:{
        type:String,
        required:true
    },
    pe:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Data", dataSchema);
