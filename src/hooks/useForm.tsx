import { useState } from 'react';

const useForm = (callback: any, customValues: any) => {
  const [values, setValues] = useState(customValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | any) => {
    const { name, value } = event.target;
    setValues((prevValues:any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    callback();
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
