import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { BiEditAlt } from 'react-icons/bi';

const List = ({ employee, setUpdateUI, updateMode }) => {
  const { Name, LastName, Email, Birthdate, Address, Phone, idPuesto } = employee;

  return (
    <li>
      <div>
        <strong>Name:</strong> {Name}
      </div>
      <div>
        <strong>Last Name:</strong> {LastName}
      </div>
      <div>
        <strong>Email:</strong> {Email}
      </div>
      <div>
        <strong>Birthdate:</strong> {Birthdate}
      </div>
      <div>
        <strong>Address:</strong> {Address}
      </div>
      <div>
        <strong>Phone:</strong> {Phone}
      </div>
      <div>
        <strong>Puesto:</strong> {idPuesto}
      </div>
      <div className='icon_holder'>
        <BiEditAlt className='icon' />
        <BsTrash className='icon' />
      </div>
    </li>
  );
};

export default List;
