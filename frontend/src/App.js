import React, { useEffect, useState } from 'react';
import List from './components/List';
import axios from 'axios';
import { baseURL } from './utils/constant';

const App = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [idPuesto, setIdPuesto] = useState('');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      console.log(res.data);
      setEmployees(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!name || !lastName || !idPuesto) {
      console.log('Por favor, complete todos los campos requeridos');
      return;
    }
  
    addEmployee();
  };

  const addEmployee = () => {
    const employeeData = {
      Employee: {
        name: name,
        lastName: lastName,
        email: email,
        birthdate: birthdate,
        address: address,
        phone: phone,
        idPuesto: idPuesto
      }
    };
  
    console.log('Datos del empleado a enviar:', employeeData);
  
    axios
    .post(`${baseURL}/save`, employeeData)
    .then((res) => {
      console.log('Respuesta del servidor:', res.data);
      setName('');
      setLastName('');
      setEmail('');
      setBirthdate('');
      setAddress('');
      setPhone('');
      setIdPuesto('');
    })
    .catch((error) => {
      console.log(error);
    });
  };
  
   return (
    <main>
      <h1 className='title'>Employees</h1>
      <form onSubmit={handleSubmit}>
        <div className='input_holder'>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className='input_holder'>
          <label htmlFor='lastName'>Last Name:</label>
          <input type='text' id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className='input_holder'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='input_holder'>
          <label htmlFor='birthdate'>Birthdate:</label>
          <input type='date' id='birthdate' value={birthdate} onChange={(e) => setBirthdate(e.target.value)} required />
        </div>
        <div className='input_holder'>
          <label htmlFor='address'>Address:</label>
          <input type='text' id='address' value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className='input_holder'>
          <label htmlFor='phone'>Phone:</label>
          <input type='text' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className='input_holder'>
          <label htmlFor='idPuesto'>Puesto:</label>
          <select id='idPuesto' value={idPuesto} onChange={(e) => setIdPuesto(e.target.value)} required>
            <option value=''>Selecciona un puesto</option>
            <option value='Chef'>Chef</option>
            <option value='Ayudante'>Ayudante</option>
            <option value='Lavaplatos'>Lavaplatos</option>
          </select>
        </div>
        <button type='submit'>Add Employee</button>
      </form>

      <ul>
        <List employee={employees} />
      </ul>
    </main>
  );
};

export default App;
