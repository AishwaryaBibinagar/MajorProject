import React from "react";
import { Col } from "antd";

function Sem2() {
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
                    <td>English</td>
                    <td><Col span={10}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col>
                    </td>
                </tr>
                <tr>
                    <td>Mathematics-2</td>
                    <td><Col span={10}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Chemistry</td>
                    <td><Col span={10}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Programming for problem solving</td>
                    <td><Col span={10}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Environmental science</td>
                    <td><Col span={10}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Essence of Indian technical knowledge</td>
                    <td><Col span={10}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>English Lab</td>
                    <td><Col span={10}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Chemistry lab</td>
                    <td><Col span={10}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Programming for problem solving lab</td>
                    <td><Col span={10}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>workshop Manufacturing process lab</td>
                    <td><Col span={10}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
            </table>



        </div>
    );
}

export default Sem2;