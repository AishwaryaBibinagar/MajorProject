import React from "react";
import { Col, Row} from "antd";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="p-5">
      <div className="header d-flex justify-content-between align-items-center py-3">
        <h1 className="text-white">
          {" "}
          <b className="secondary-text"> IT </b> RESULTS{" "}
        </h1>
      <div>
          <h1
            className="text-white text-small cursor-pointer underline"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </h1>
        </div>
      </div>


        <Row gutter={[20, 20]}>
          <Col span={24}>
            <h1 className="text-medium my-3">
              Select Your Batch From Below..{" "}
            </h1>
            <hr />
          </Col>
          <Col span={6}>
                <div
                  className="card p-3 cursor-pointer primary-border"
                  onClick={() => {
                    navigate("/resulthome");
                  }}
                >
                  <h1 className="text-medium ">2019-2023</h1>
                </div>
          </Col>
          <Col span={6}>
                <div
                  className="card p-3 cursor-pointer primary-border"
                  onClick={() => {
                    navigate(" ");
                  }}
                >
                  <h1 className="text-medium ">2020-2024</h1>
                </div>
          </Col>
          <Col span={6}>
                <div
                  className="card p-3 cursor-pointer primary-border"
                  onClick={() => {
                    navigate(" ");
                  }}
                >
                  <h1 className="text-medium ">2021-2025</h1>
                </div>
          </Col>
          <Col span={6}>
                <div
                  className="card p-3 cursor-pointer primary-border"
                  onClick={() => {
                    navigate(" ");
                  }}
                >
                  <h1 className="text-medium ">2022-2026</h1>
                </div>
          </Col>
        </Row>
    </div>
  );
}

export default Home;
