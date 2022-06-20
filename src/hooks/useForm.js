import { useState } from "react";
import { useEffectUpdate } from "./useEffectUpdate";

export const useForm = (initialState, cb = () => {}) => {
  const [fields, setFields] = useState(initialState);

  useEffectUpdate(() => {
    cb(fields);
    // console.log('fields',fields)
  }, [fields]);

  const handleChange = ({ target }) => {
    const field = target.name;
    let value;
    if (target.type === "number") value = +target.value || "";
    else if (target.type === "checkbox") value = +target.value ? 0 : Date.now();
    else value = target.value;
    setFields((prevFields) => ({ ...prevFields, [field]: value }));
  };

  return [fields, handleChange, setFields];
};
