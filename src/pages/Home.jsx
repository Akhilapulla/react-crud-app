import { useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [editData, setEditData] = useState(null);

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

  return (
    <div className="app-container">
      <h2>Employee Management System</h2>

      <EmployeeForm
        addEmployee={addEmployee}
        editData={editData}
        updateEmployee={updateEmployee}
      />

      <EmployeeList
        employees={employees}
        setEditData={setEditData}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
}

export default Home;
