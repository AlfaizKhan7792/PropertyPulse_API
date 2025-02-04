const expressAsyncHandler = require("express-async-handler")
const PP = require("../../models/propertypulse/ppSchema")

// Get All Details
const getall = expressAsyncHandler(async (req,res) =>{
    const properties = await PP.find()
    if(!properties){
        res.status(404)
        throw new Error("Properties Not Found!!");        
    }else{
        res.status(200).json({success : true , All_Data : properties})
        res.send("all data")
    }
})


// Create Property
const createProperty = expressAsyncHandler(async (req,res) =>{
    const newProperty = new PP(req.body)
    await newProperty.save()
    if(!newProperty){
        res.status(500)
        throw new Error("Property Not Created , " , error);        
    }else{
        res.status(200).json({success : true, New_data : newProperty})
    }
})


module.exports = {getall , createProperty}



// key-value data
// ?owner=johnDoe123&name=Luxury Villa&type=House&description=A beautiful luxury villa with a sea view.&location[street]=50 Ocean Drive&location[city]=Miami&location[state]=FL&location[zipcode]=33101&beds=5&baths=4&square_feet=3500&amenities[]=Wifi&amenities[]=GYM&amenities[]=Beach Access&amenities[]=Swimming Pool&rates[nightly]=700&rates[weekly]=4200&rates[monthly]=1200&seller_info[name]=john Doe&seller_info[email]=john@example.com&seller_info[phone]=305-555-5555&images[]=villa1.jpg&images[]=villa2.jpg&is_featured=true