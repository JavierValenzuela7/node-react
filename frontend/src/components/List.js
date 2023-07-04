import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { BiEditAlt } from 'react-icons/bi';

const List = ({ employees, setUpdateUI, updateMode }) => {
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <th style={styles.tableHeader}>Name</th>
          <th style={styles.tableHeader}>Last Name</th>
          <th style={styles.tableHeader}>Email</th>
          <th style={styles.tableHeader}>Birthdate</th>
          <th style={styles.tableHeader}>Address</th>
          <th style={styles.tableHeader}>Phone</th>
          <th style={styles.tableHeader}>Position ID</th>
          <th style={styles.tableHeader}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee._id} style={{ borderBottom: '1px solid #ddd' }}>
            <td style={styles.tableCell}>{employee.name}</td>
            <td style={styles.tableCell}>{employee.lastName}</td>
            <td style={styles.tableCell}>{employee.email}</td>
            <td style={styles.tableCell}>{employee.birthdate}</td>
            <td style={styles.tableCell}>{employee.address}</td>
            <td style={styles.tableCell}>{employee.phone}</td>
            <td style={styles.tableCell}>{employee.idPuesto}</td>
            <td style={styles.tableCell}>
              <div style={styles.iconHolder}>
                <BiEditAlt style={styles.icon} />
                <BsTrash style={styles.icon} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  tableHeader: {
    padding: '12px',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  tableCell: {
    padding: '12px',
  },
  iconHolder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: '20px',
    marginLeft: '5px',
    cursor: 'pointer',
  },
};

export default List;
