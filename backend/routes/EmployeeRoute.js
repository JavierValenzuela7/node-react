var express = require('express');
var router = express.Router();
const EmployeModel = require("../models/EmployeeModel")
const  
{
getEmployee,
saveEmployee,
deleteEmployee,
updateEmployee
} = require('../controllers/EmployeeControllers')

router.get("/get",getEmployee);
router.post("/save",saveEmployee);
// router.put("/update",updateEmployee);
// router.delete("/delete/:id",deleteEmployee);


module.exports = router
