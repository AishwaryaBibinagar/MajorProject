import React from "react";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

function First() {
    const navigate = useNavigate();
    return (
        <div>
        <h1
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </h1>
      </div>

    );
}

export default First;