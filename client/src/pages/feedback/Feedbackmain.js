import React from "react";
import { Col, Row} from "antd";
import { useNavigate } from "react-router-dom";

function Feedbackmain() {
    const navigate = useNavigate();
    return (
        <div className="p-5">
            <div className="header d-flex justify-content-between align-items-center py-3">
                <h1 className="text-white">
                    {" "}
                    <b className="secondary-text">IT </b> FEEDBACK{" "}
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
              Select Your Semester From Below..{" "}
            </h1>
            <hr />
          </Col>
          <Col span={6}>
                <div
                  className="card p-3 cursor-pointer primary-border"
                  onClick={() => {
                    navigate("/Sem1");
                  }}
                >
                  <h1 className="text-medium ">SEM1</h1>
                </div>
          </Col>
          <Col span={6}>
                <div
                  className="card p-3 cursor-pointer primary-border"
                  onClick={() => {
                    navigate("/Sem2");
                  }}
                >
                  <h1 className="text-medium ">SEM2</h1>
                </div>
          </Col>
          <Col span={6}>
                <div
                  className="card p-3 cursor-pointer primary-border"
                  onClick={() => {
                    navigate("/Sem3");
                  }}
                >
                  <h1 className="text-medium ">SEM3</h1>
                </div>
          </Col>
          <Col span={6}>
                <div
                  className="card p-3 cursor-pointer primary-border"
                  onClick={() => {
                    navigate("/Sem4");
                  }}
                >
                  <h1 className="text-medium ">SEM4</h1>
                </div>
          </Col>
          <Col span={6}>
                <div
                  className="card p-3 cursor-pointer primary-border"
                  onClick={() => {
                    navigate("/Sem5");
                  }}
                >
                  <h1 className="text-medium ">SEM5</h1>
                </div>
          </Col>
          <Col span={6}>
                <div
                  className="card p-3 cursor-pointer primary-border"
                  onClick={() => {
                    navigate("/Sem6");
                  }}
                >
                  <h1 className="text-medium ">SEM6</h1>
                </div>
          </Col>
          <Col span={6}>
                <div
                  className="card p-3 cursor-pointer primary-border"
                  onClick={() => {
                    navigate("/Sem7");
                  }}
                >
                  <h1 className="text-medium ">SEM7</h1>
                </div>
          </Col>
          <Col span={6}>
                <div
                  className="card p-3 cursor-pointer primary-border"
                  onClick={() => {
                    navigate("/Sem8");
                  }}
                >
                  <h1 className="text-medium ">SEM8</h1>
                </div>
          </Col>
          <Col span={24}>
                    <div className="py-5 text-black">
                        <a className="card p-3 cursor-pointer text-medium align-items-center py-3 underline" href="https://docs.google.com/forms/d/e/1FAIpQLSftVLPTb7ymktF3KoWu2rwAtRoXXSJrlo5p9uWQzNRayNJ1RQ/viewform?usp=sf_link">
                            Raise a Complaint
                        </a>

                    </div>
                </Col>
        </Row>


        </div>
    );
}

export default Feedbackmain;