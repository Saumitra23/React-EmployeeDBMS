import "../styles/EmployeeForm.css";
import { useForm } from "../hooks/use-form";
import { CgClose } from "react-icons/cg";
const EmployeeForm = ({ onFormClose, onFormSubmit }) => {
  const { currData, onDataChange } = useForm();

  return (
    <div className="emp-form">
      <CgClose
        size={30}
        className="close-icon"
        cursor="pointer"
        onClick={onFormClose}
      />
      <form
        onSubmit={(e) => {
          console.log("submit", e);
          onFormSubmit(currData);
          e.preventDefault();
        }}
        onChange={(e) => onDataChange(e.target.name, e.target.value)}
      >
        <input placeholder="Name" value={currData.name} name="name" />
        <input
          type="number"
          placeholder="Age"
          min={0}
          max={100}
          name="age"
          value={currData.age}
        />
        <input placeholder="City" value={currData.city} name="city" />
        <input
          type="number"
          placeholder="Salary"
          name="salary"
          min={0}
          max={1000000}
          value={currData.salary}
        />
        <button id="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
