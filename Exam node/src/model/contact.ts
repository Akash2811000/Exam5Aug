import mongoose  from 'mongoose';

const ContactSchema = new mongoose.Schema({

    _id : {type : Number , require : true},
    FirstName : {type : String },
    LastName : {type : String },
    Email : {type : String},
    StreetNumber : {type : Number},
    StreetName : {type : String},
    AddressLine1 : {type : String},
    AddressLine2 : {type : String},
    City : {type : String},
    State : {type : String},
    Pincode : {type : Number},




})

const contactmodel = mongoose.model('contacts',ContactSchema);
export {contactmodel};