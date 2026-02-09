function EmployeeList({ employees, deleteEmployee, setEditData }) {
  return (
    <table border="1" style={{ marginTop: "20px" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.role}</td>
            <td>
              <button onClick={() => setEditData(emp)}>Edit</button>
              <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;
