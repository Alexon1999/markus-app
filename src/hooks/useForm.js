import { useState } from 'react';

const useForm = (initialState) => {
  const [state, setState] = useState(initialState);

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return {
    state,
    setState,
    handleInputChange,
  };
};

export default useForm;
