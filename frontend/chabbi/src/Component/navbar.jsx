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
        `http://localhost:8000/user/data/${localStorage.getItem("userid")}`
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
          backgroundColor: "#f98bffbd",
          height: "60px",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "20px",
        }}
      >
        <p style={{ paddingLeft: "40px", fontSize: "20px" }}>
          {" "}
          AcuType
        </p>
        <p style={{ paddingLeft: "140px", fontSize: "20px"  }}>Timer : {time}</p>
        <p style={{ paddingLeft: "100px", fontSize: "20px" }}>
          Accuracy is {((acc / length) * 100).toFixed(2)} %
        </p>
        <p style={{ paddingLeft: "100px", fontSize: "20px" }}>
        Correct KeyCount : {acc}
        </p>
        <p style={{ fontSize: "20px", paddingLeft: "230px" }}>
          {sdata.username}
        </p> 
        
        <div className="dropdown">
    
          <img
            style={{ width: "50px", borderRadius: "30px" }}
            src={sdata.profile_picture}
          />
          <div className="dropdown-content">
            <p onClick={logout}>Logout</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
