
import React, { useState, useEffect } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import Modal from './Modal';

const EmployeeManager = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Load employees from localStorage on component mount
  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(savedEmployees);
  }, []);

  // Save employees to localStorage when employees state changes
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const addOrUpdateEmployee = (employee) => {
    if (employee.id) {
      // Update existing employee
      setEmployees(employees.map((emp) => (emp.id === employee.id ? employee : emp)));
    } else {
      // Add new employee
      employee.id = Date.now();
      setEmployees([...employees, employee]);
    }
    setSelectedEmployee(null); // Clear selection after adding or updating
    setIsModalOpen(false); // Close modal
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleAddEmployee = () => {
    setSelectedEmployee(null); // Clear the selection to open a fresh form
    setIsModalOpen(true); // Open the modal
  };

  const handleEditEmployee = (employee) => {
    setSelectedEmployee(employee); // Set the employee to be edited
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedEmployee(null); // Clear selected employee
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Employee Management</h1>
      <input
        type="text"
        placeholder="Search employees by name..."
        className="mb-4 p-2 border border-gray-300 rounded w-full"
        value={searchQuery}
        onChange={handleSearch}
      />
      <button
        onClick={handleAddEmployee}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Add Employee
      </button>

      <EmployeeList
        employees={employees}
        deleteEmployee={deleteEmployee}
        setSelectedEmployee={handleEditEmployee}
        searchQuery={searchQuery}
      />

      {/* Modal for Add/Edit Employee */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <EmployeeForm
          addOrUpdateEmployee={addOrUpdateEmployee}
          selectedEmployee={selectedEmployee}
        />
      </Modal>
    </div>
  );
};

export default EmployeeManager;


