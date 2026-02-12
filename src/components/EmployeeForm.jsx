import { useEffect, useState } from "react";

function EmployeeForm({ addEmployee, editData, updateEmployee, closeModal }) {
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
    closeModal();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{editData ? "Edit Employee" : "Add Employee"}</h3>

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
        {editData ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default EmployeeForm;
