import { useEffect, useState } from "react";

function EmployeeForm({ addEmployee, editData, updateEmployee }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setRole(editData.role);
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editData) {
      updateEmployee({ ...editData, name, role });
    } else {
      addEmployee({ name, role });
    }

    setName("");
    setRole("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      />

      <button className="btn-primary" type="submit">
        {editData ? "Update Employee" : "Add Employee"}
      </button>
    </form>
  );
}

export default EmployeeForm;
