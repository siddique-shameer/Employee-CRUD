
import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ addOrUpdateEmployee, selectedEmployee }) => {
  const [employee, setEmployee] = useState({ name: '', position: '',email:'' });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    } else {
      setEmployee({ name: '', position: '' ,email:''});
    }
  }, [selectedEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateEmployee(employee);
    setEmployee({ name: '', position: '', email:'' }); 
  };

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  return (    
    <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Employee Name
        </label>
      <input
        type="text"
        name="name"
        value={employee.name}
        onChange={handleChange}
        placeholder="Employee Name"
        className="p-2 border border-gray-300 rounded mb-2 w-full"
        required
      />
      </div>
      <div className="mb-4">
        <label htmlFor="position" className="block text-gray-700 text-sm font-bold mb-2">
          Position
        </label>
      <input
        type="text"
        name="position"
        value={employee.position}
        onChange={handleChange}
        placeholder="Employee Position"
        className="p-2 border border-gray-300 rounded mb-4 w-full"
        required
      />
</div>
<div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
<input
        type="email"
        name="email"
        value={employee.email}
        onChange={handleChange}
        placeholder="Employee Email"
        className="p-2 border border-gray-300 rounded mb-4 w-full"
        required
      />
      </div>
      <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">
        {selectedEmployee ? 'Update Employee' : 'Add Employee'}
      </button>
    </form>
  );
};

export default EmployeeForm;

