import { useState } from "react";

export const useForm = () => {
  const [currData, setCurrData] = useState({
    name: "",
    age: null,
    city: "",
    salary: null,
  });

  const onDataChange = (type, value) => {
    switch (type) {
      case "name":
        setCurrData({ ...currData, name: value });
        break;
      case "age":
        setCurrData({ ...currData, age: value });
        break;
      case "city":
        setCurrData({ ...currData, city: value });
        break;
      default:
        setCurrData({ ...currData, salary: value });
    }
  };
  return { currData, onDataChange };
};
