import React, { useEffect } from "react";
import { Col, Row, Table } from "antd";

function Sem6() {
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
                    <td>Disaster Mitigation</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                        </div>
                    </Col>
                    </td>
                </tr>
                <tr>
                    <td>Design & Analysis of algorithms</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                        </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Embedded System</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                        </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Natural language Processing</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                        </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Machine Learning </td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                        </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Distributed System</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                        </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Embedded System lab</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                        </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Design & Analysis of algorithms lab</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                        </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Mini Project</td>
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

export default Sem6;