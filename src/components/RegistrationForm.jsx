import "./Form.css";
import { useState } from "react";

const RegistrationForm = ({setNewObject}) => {
  // form state
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [age, setAge] = useState("0");
  const [ageError, setAgeError] = useState("");


  // handle form validation
  const validateForm = () => {  
    if (firstName === "") {
      setFirstNameError("First Name is required");
     
    } else if (firstName.length < 3) {
      setFirstNameError("First Name must be at least 3 characters");
      
    } else {
      setFirstNameError("");
    }
    if (lastName === "") {
      setLastNameError("Last Name is required");
     
    } else if (lastName.length < 3) {
      setLastNameError("Last Name must be at least 3 characters");
      
    } else {
      setLastNameError("");
    }
    if (email === "") {
      setEmailError("Email is required");
      
    } else if (!email.includes("@")) {
      setEmailError("Email is invalid");
      
    } else {
      setEmailError("");
    }
    if (address === "") {
      setAddressError("Address is required");
      
    } else {
      setAddressError("");
    };
  };

// handle clear form
const clearForm = () => {
  setFirstName("");
  setLastName("");
  setEmail("");
  setAddress("");
  setAge(0);
  
};

// handle form submit
const handleSubmit = (e) => {
  e.preventDefault();
  validateForm();
  clearForm();


const newObject = {
  firstName: firstName,
  lastName: lastName,
  email: email,
  address: address,
  age: age,
};

setNewObject(newObject);
clearForm();
}

  return (
    <div className="form">
      <h1>Register New Account</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {firstNameError && <p className="error">{firstNameError}</p>}

        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {lastNameError && <p className="error">{lastNameError}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>

        <div>
          <label>Address:</label>
          <input
            type="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {addressError && <p className="error">{addressError}</p>}
        </div>

        <div>
          <label>age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {ageError && <p className="error">{ageError}</p>}
        </div>

       <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
