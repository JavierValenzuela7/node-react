const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
  name: {
      type: String,
  },
  lastName: {
      type: String,
  },
  email: {
      type: String,
  },
  birthdate: {
      type: Date,
  },
  address: {
      type: String,
  },
  phone: {
      type: String,
  },
  idPuesto: {
      type: String,
  }
});


module.exports = mongoose.model("employes",EmployeeSchema);