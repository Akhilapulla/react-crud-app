import { useState, useEffect } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button type="submit">
        {editData ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default EmployeeForm;
