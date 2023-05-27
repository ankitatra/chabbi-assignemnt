import React from "react";
import { useSelector } from "react-redux";

const Navbar = ({ acc, length, time }) => {
  const user = useSelector((store) => store.authreducer.user);
  console.log(user);
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
        <p style={{ paddingRight: "200px",fontSize: "20px" }}>
          {" "}
          Improve Typing Speed Accuracy with AcuType!
        </p>
        <p style={{ paddingRight: "160px", fontSize: "20px" }}>{time}</p>
        <p style={{ paddingRight: "160px", fontSize: "20px" }}>
          Accuracy is {((acc / length) * 100).toFixed(2)} %
        </p>
        <p style={{ paddingRight: "160px", fontSize: "20px" }}>
          KeyCount : {acc}
        </p>

        <p style={{ fontSize: "20px", paddingRight: "30px" }}>
          {user.username}
        </p>
        <img
          style={{ width: "50px", borderRadius: "30px" }}
          src={user.profile_picture}
        />
      </nav>
    </div>
  );
};

export default Navbar;
