import React from "react";
import useEmployeeManage from "../hooks/use-employee-manage";
import { EmployeeInfo } from "../components/EmployeeInfo";
import { EmployeeList } from "../components/EmployeeList";
import EmployeeForm from "./EmployeeForm";

import "../styles/Main.css";

const Main = () => {
  const {
    onEmployeeSelect,
    onEmployeeAdd,
    onEmployeeRemove,
    currentEmployee,
    employeeData,
    isForm,
    onFormSubmit,
    onFormClose,
  } = useEmployeeManage();

  console.log("data", employeeData);
  return (
    <div className="main">
      <header>
        <h1>Emplouee Database Management</h1>
        <button onClick={onEmployeeAdd}>Add Employee</button>
      </header>
      {isForm && (
        <EmployeeForm onFormClose={onFormClose} onFormSubmit={onFormSubmit} />
      )}
      <div className="emp-body">
        <div className="emp-list">
          <h3>Employee list</h3>
          <hr />
          {employeeData.map((val, id) => (
            <EmployeeList
              key={id}
              id={id}
              name={val.name}
              onEmployeeSelect={onEmployeeSelect}
              onEmployeeRemove={onEmployeeRemove}
            />
          ))}
        </div>
        <div className="emp-info">
          <h3>Employee Info</h3>
          <hr />
          <EmployeeInfo data={currentEmployee} />
        </div>
      </div>
    </div>
  );
};

export default Main;
