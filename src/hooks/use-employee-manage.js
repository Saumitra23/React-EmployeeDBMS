import { useState, useEffect } from "react";
import Data from "../data/Emoloyees.json";

const useEmployeeManage = () => {
  const [employeeData, setEmployeeData] = useState(Data.data);
  const [currentEmployee, setCurrentEmployee] = useState(Data.data[0]);
  const [isForm, setForm] = useState(false);

  useEffect(() => {
    setCurrentEmployee(employeeData[0] ?? "");
  }, [employeeData]);

  const onEmployeeAdd = () => {
    setForm(true);
  };

  const onEmployeeSelect = (currId) => {
    console.log("currId", currId);
    setCurrentEmployee(...employeeData.filter((val, id) => id == currId));
  };

  const onEmployeeRemove = (currId) => {
    console.log("currId", currId);
    setEmployeeData((prev) => prev.filter((val, id) => id != currId));
  };

  const onFormClose = () => {
    setForm(false);
  };

  const onFormSubmit = (currData) => {
    console.log("currData", currData);
    setEmployeeData([...employeeData, currData]);
  };

  return {
    employeeData,
    currentEmployee,
    isForm,
    onEmployeeAdd,
    onEmployeeSelect,
    onEmployeeRemove,
    onFormClose,
    onFormSubmit,
  };
};

export default useEmployeeManage;
