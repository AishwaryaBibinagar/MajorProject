import React from "react";
import { Col } from "antd";

function Sem3() {
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
                    <td>Effective Technical Communication in English</td>
                    <td><Col span={12}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col>
                    </td>
                </tr>
                <tr>
                    <td>Mathematics-3</td>
                    <td><Col span={12}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Finance and Accounting </td>
                    <td><Col span={12}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Basic Electronics</td>
                    <td><Col span={12}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>digital Electronics</td>
                    <td><Col span={12}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Data structures</td>
                    <td><Col span={12}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Mathematical foundation of information technology</td>
                    <td><Col span={12}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Basic Electronics lab</td>
                    <td><Col span={12}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Data structures lab</td>
                    <td><Col span={12}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>IT workshop lab</td>
                    <td><Col span={12}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
            </table>



        </div>
    );
}

export default Sem3;