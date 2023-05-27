import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../redux/authRedux/action";
import axios from "axios";
import "./css/navbar.css"
const Navbar = ({ acc, length, time }) => {
  const [sdata, setdata] = useState([]);
  const user = useSelector((store) => store.authreducer.user);
const navigate=useNavigate()
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `https://fair-erin-woodpecker-yoke.cyclic.app/user/data/${localStorage.getItem("userid")}`
      );
      const data = response.data;
      console.log("data", data);
      setdata(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const logout=()=>{
    localStorage.removeItem("userid");
    navigate("/", { replace: true });
    window. location. reload(true)
  }
  return (
    <div>
      <nav
        style={{
          backgroundColor: "black",
          height: "60px",
          color: "white",
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "20px",
        }}
      >
        <p style={{ paddingRight: "140px", fontSize: "20px" }}>
          {" "}
          Improve Typing Speed Accuracy with AcuType!
        </p>
        <p style={{ paddingRight: "140px", fontSize: "20px" }}>{time}</p>
        <p style={{ paddingRight: "140px", fontSize: "20px" }}>
          Accuracy is {((acc / length) * 100).toFixed(2)} %
        </p>
        <p style={{ paddingRight: "140px", fontSize: "20px" }}>
          KeyCount : {acc}
        </p>

        <p style={{ fontSize: "20px", paddingRight: "30px" }}>
          {sdata.username}
        </p>
        <div class="dropdown">
          <img
            style={{ width: "50px", borderRadius: "30px" }}
            src={sdata.profile_picture}
          />
          <div class="dropdown-content">
            <p onClick={logout}>Logout</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
