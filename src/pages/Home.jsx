import { useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import Modal from "../components/Modal";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [editData, setEditData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const addEmployee = (emp) => {
    setEmployees([...employees, { ...emp, id: Date.now() }]);
  };

  const updateEmployee = (updatedEmp) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === updatedEmp.id ? updatedEmp : emp
      )
    );
    setEditData(null);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h2>Employee Management System</h2>

      <button
        className="btn-primary"
        onClick={() => {
          setEditData(null);
          setIsModalOpen(true);
        }}
      >
        Add Employee
      </button>

      <input
        className="search-input"
        type="text"
        placeholder="Search by name or role..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <EmployeeList
        employees={filteredEmployees}
        setEditData={setEditData}
        deleteEmployee={deleteEmployee}
        openModal={() => setIsModalOpen(true)}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EmployeeForm
          addEmployee={addEmployee}
          editData={editData}
          updateEmployee={updateEmployee}
          closeModal={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default Home;
