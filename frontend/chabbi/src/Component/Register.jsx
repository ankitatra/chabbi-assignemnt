import React, { useState } from "react";
import "./css/register.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/authRedux/action";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: name,
      profile_picture: gender,
    };

    if (data) {
      dispatch(login({ data })).then(() => {
        navigate("/dashboard", { replace: true });
      });
    }
  };

  return (
    <>
    <h1 style={{color:"white",textAlign:"center"}}> Improve typing Speed With AcuType!</h1>
    
    <form onSubmit={handleSubmit}>
      <div>
       
        <input
        style={{fontSize:"18px",marginTop:"30px"}}
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="enter name.."
          required
        />
      </div>
      <div>
        <label>Select Profile Icon:</label>
        <div style={{ display: "flex" }}>
          <label htmlFor="female">
            <input
              type="radio"
              id="female"
              name="gender"
              value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTIQGklKp0DBSuhONZUGk8DWvs4VUZJ79FTn0dQxqCh-aCU_RTDwGCbWeAe0UnPjywfkY&usqp=CAU"
              // checked={gender === "female"}
              onChange={handleGenderChange}
              required
            />
            <img
              style={{ width: "80px", height: "80px", borderRadius: "50px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTIQGklKp0DBSuhONZUGk8DWvs4VUZJ79FTn0dQxqCh-aCU_RTDwGCbWeAe0UnPjywfkY&usqp=CAU"
              alt="Female"
            />
          </label>

          <label htmlFor="male">
            <input
              type="radio"
              id="male"
              name="gender"
              value="https://img.freepik.com/premium-vector/gamer-mascot-logo-gaming-badge_10051-451.jpg?w=2000"
              // checked={gender === "male"}
              onChange={handleGenderChange}
              required
            />
            <img
              style={{ width: "80px", height: "80px", borderRadius: "50px" }}
              src="https://img.freepik.com/premium-vector/gamer-mascot-logo-gaming-badge_10051-451.jpg?w=2000"
              alt="Male"
            />
          </label>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default Register;
