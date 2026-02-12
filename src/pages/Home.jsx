import { useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import Modal from "../components/Modal";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [editData, setEditData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 5;

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

  const filteredEmployees = employees
    .filter(
      (emp) =>
        emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.role.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  const indexOfLast = currentPage * employeesPerPage;
  const indexOfFirst = indexOfLast - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirst,
    indexOfLast
  );

  const totalPages = Math.ceil(
    filteredEmployees.length / employeesPerPage
  );

  return (
    <div className="dashboard">
      <div className="card">
        <h2>Employee Management Dashboard</h2>

        <div className="top-bar">
          <button
            className="btn-primary"
            onClick={() => {
              setEditData(null);
              setIsModalOpen(true);
            }}
          >
            + Add Employee
          </button>

          <input
            className="search-input"
            type="text"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />

          <select
            className="sort-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Sort A-Z</option>
            <option value="desc">Sort Z-A</option>
          </select>
        </div>

        <EmployeeList
          employees={currentEmployees}
          setEditData={setEditData}
          deleteEmployee={deleteEmployee}
          openModal={() => setIsModalOpen(true)}
        />

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={
                currentPage === i + 1
                  ? "page-btn active-page"
                  : "page-btn"
              }
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

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
