const express = require('express');
const { getall, createProperty } = require('../../controllers/propertypulse/ppControllers');


const router = express.Router()


router.get("/all-data" , getall)

router.post("/add" , createProperty)


module.exports = router