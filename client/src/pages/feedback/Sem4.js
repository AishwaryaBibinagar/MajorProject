import React from "react";
import { Col, Row, Table } from "antd";
function Sem4() {
    
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
                    <td>Signals and systems</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col>
                    </td>
                </tr>
                <tr>
                    <td>Computer organisation and Microprocessor</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Operations Research</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Java Programming</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Biology for Engineers</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Database systems</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Data Communications </td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Microprocessor lab</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Java Programming lab</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Database systems lab</td>
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

export default Sem4;