import { useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [editData, setEditData] = useState(null);

  const addEmployee = (emp) => {
    setEmployees([...employees, { ...emp, id: Date.now() }]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((e) => e.id !== id));
  };

  const updateEmployee = (updatedEmp) => {
    setEmployees(
      employees.map((e) =>
        e.id === updatedEmp.id ? updatedEmp : e
      )
    );
    setEditData(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee CRUD App</h2>
      <EmployeeForm
        addEmployee={addEmployee}
        editData={editData}
        updateEmployee={updateEmployee}
      />
      <EmployeeList
        employees={employees}
        deleteEmployee={deleteEmployee}
        setEditData={setEditData}
      />
    </div>
  );
}

export default Home;
