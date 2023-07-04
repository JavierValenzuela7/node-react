const EmployeModel = require("../models/EmployeeModel")

module.exports.getEmployee = async (req, res) => {
    try {
        const employees = await EmployeModel.find().exec();
        res.json(employees);
    } catch (error) {
        console.error('Error al obtener empleados:', error);
        res.status(500).send('Error en el servidor');
    }
};


module.exports.saveEmployee = async (req, res) => {
    const newUser = new EmployeModel(req.body.employeeData.Employee);
    try {
        const user = await newUser.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({ error });
    }
};



module.exports.updateEmployee = (req, res) => {
    const { id } = req.params
    const Employee = req.body;

    EmployeModel.findByIdAndUpdate(id, { Employee })
        .then(() => res.send("Updated Successfully"))
        .catch((err) => {
            console.log(err)
            res.send({ error: err, msg: "Parece que algo salio mal" })
        });
};


module.exports.deleteEmployee = (req, res) => {
    const { id } = req.params
    const Employee = req.body;

    EmployeModel.findByIdAndDelete(id, { Employee })
        .then(() => res.send("Delete Successfully"))
        .catch((err) => {
            console.log(err)
            res.send({ error: err, msg: "Parece que algo salio mal" })
        });
};