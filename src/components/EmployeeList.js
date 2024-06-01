import { CgClose } from "react-icons/cg";
import "../styles/EmployeeList.css";

export const EmployeeList = ({
  name,
  id,
  onEmployeeSelect,
  onEmployeeRemove,
}) => {
  console.log("id", id);
  return (
    <div className="emp-list-comp">
      <h4 onClick={() => onEmployeeSelect(id)}>{name}</h4>
      <CgClose
        className="emp-list-close"
        size={20}
        onClick={() => onEmployeeRemove(id)}
      />
    </div>
  );
};
