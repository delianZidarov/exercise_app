import React from "react";
import InputForm from "./InputForm";
import { useDispatch } from "react-redux";
import { signup } from "./actions";
function SignUp() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = React.useState(initialState);
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(signup);
  };
  return (
    <div className="form-container">
      <form>
        <h1>Sign Up</h1>
        <InputForm
          name="firstName"
          label="First Name"
          handleChange={handleChange}
          type="text"
        />
        <InputForm
          name="lastName"
          label="Last Name"
          handleChange={handleChange}
          type="text"
        />
        <InputForm
          name="email"
          label="Email"
          handleChange={handleChange}
          type="email"
        />
        <InputForm
          name="userName"
          label="User Name"
          handleChange={handleChange}
          type="text"
        />
        <InputForm
          name="password"
          label="Password"
          handleChange={handleChange}
          type="password"
        />
        <InputForm
          name="confirmPassword"
          label="Confirm Password"
          handleChange={handleChange}
          type="password"
          alert={
            formData.confirmPassword.length > 0
              ? formData.password !== formData.confirmPassword
                ? "true"
                : "false"
              : null
          }
        />
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={
            formData.password !== formData.confirmPassword ? true : false
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
