const EmployeModel = require("../models/EmployeeModel")

module.exports.getEmployee = async (req,res)=>{
    const Employee = await EmployeModel.find()
    res.send(Employee)
}

module.exports.saveEmployee = (req,res)=>{
    const Employee = req.body;

    EmployeModel.create({Employee})
    .then((data)=>{
        console.log("Saved Successfully");
        res.status(201).send(data)
    }).catch((err)=>{console.log(err)
        res.send({error:err,msg:"Parece que algo salio mal"})
    });
};


module.exports.updateEmployee = (req,res)=>{
    const {id}=req.params
    const Employee = req.body;

    EmployeModel.findByIdAndUpdate(id,{Employee})
    .then(()=>res.send("Updated Successfully"))
    .catch((err)=>{console.log(err)
        res.send({error:err,msg:"Parece que algo salio mal"})
    });
};


module.exports.deleteEmployee = (req,res)=>{
    const {id}=req.params
    const Employee = req.body;

    EmployeModel.findByIdAndDelete(id,{Employee})
    .then(()=>res.send("Delete Successfully"))
    .catch((err)=>{console.log(err)
        res.send({error:err,msg:"Parece que algo salio mal"})
    });
};