const {Router} = require("express")
const {getEmployee,
       saveEmployee,
       deleteEmployee,
       updateEmployee} = require("../controllers/EmployeeControllers")

const router = Router()

router.get("/get",getEmployee);
router.post("/save",saveEmployee);
router.put("/update",updateEmployee);
router.delete("/delete/:id",deleteEmployee);

module.exports = router
