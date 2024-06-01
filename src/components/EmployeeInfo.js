import { IoIosContact } from "react-icons/io";

export const EmployeeInfo = ({ data }) => {
  console.log("Data", data);
  return (
    <div className="e-info-comp">
      <IoIosContact size={150} />
      <h2>Name: {data.name}</h2>
      <h3>Age: {data.age}</h3>
      <h3>City: {data.city}</h3>
      <h3>Salary: {data.salary}</h3>
    </div>
  );
};
