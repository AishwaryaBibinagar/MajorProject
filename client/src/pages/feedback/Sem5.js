import React, { useEffect } from "react";
import { Col, Row, Table } from "antd";

function Sem5() {
    
    return (
        <div className="p-5">
            <div className="header d-flex justify-content-between align-items-center py-3">
                <h1 className="text-white">
                    {" "}
                    <b className="secondary-text">IT </b> FEEDBACK{" "}
                </h1>
            </div>
            <table className="table table-bordered ">
                <tr className="text-medium">
                    <th>Subjects</th>
                    <th>Feedback</th>
                </tr>
                <tr>
                    <td>Web application Development</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col>
                    </td>
                </tr>
                <tr>
                    <td>Operating Systems</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Automata theory</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Software Engineering</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Artificial Intelligence</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Computer Networks</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Computer Networks lab</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Operating Systems lab</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Web Application Development lab</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
            </table>



        </div>
    );
}

export default Sem5;