import { useState } from "react";
import "./App.css";

function App() {
  const initialState = {
    name: "",
    email: "",
    age: "",
    hobby: "",
  };
  const [values, setValues] = useState(initialState);

  const { name, email, age, hobby } = values;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("values submited::", values);
    setValues(initialState);
  };

  console.log(values);
  return (
    <div className="App">
      <form id="ga-test" onSubmit={handleSubmit}>
        <h1>Form</h1>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input type="text" name="age" value={age} onChange={handleChange} />
        <input type="text" name="hobby" value={hobby} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
