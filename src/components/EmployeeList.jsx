function EmployeeList({ employees, setEditData, deleteEmployee }) {
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      deleteEmployee(id);
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.length === 0 ? (
          <tr>
            <td colSpan="3" className="empty">
              No employees added yet
            </td>
          </tr>
        ) : (
          employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
              <td>
                <button
                  className="btn-edit"
                  onClick={() => setEditData(emp)}
                >
                  Edit
                </button>

                <button
                  className="btn-delete"
                  onClick={() => handleDelete(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default EmployeeList;
