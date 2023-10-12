import { useState } from "react";

const FormInput = (props) => {
  const [change, setChange] = useState("");
  const { type, label, placeholder, name, value, getChange } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  return (
    <>
      <label htmlFor="movie-image">
        {label}
        <input
          type={type}
          id={"movie" + name}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={() => handleChange}
          required
        />
      </label>
    </>
  );
};
export default FormInput;
