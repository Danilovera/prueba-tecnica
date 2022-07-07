import { useState } from "react";

 const useForm = (initialState={}) => {

 const[ formValue,setFormValue] = useState(initialState)

  const reset = () => {
    setFormValue(initialState);
  };

  const handleInputChange = ({target}) => {
    setFormValue({
        ...formValue,
        [target.name]: target.value
    })
}

  return [ reset, handleInputChange,formValue]
};

export default useForm
