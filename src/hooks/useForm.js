import { useState } from 'react';

const useForm = (initialState) => {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return {
    state,
    setState,
    errors,
    setErrors,
    handleInputChange,
  };
};

export default useForm;
