import React from "react";
import { Col} from "antd";

function Sem1() {
    
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
                    <td>Mathematics-1</td>
                    <td><Col span={8}>
                        <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                        </div>
                    </Col>
                    </td>
                </tr>
                <tr>
                    <td>Physics</td>
                    <td><Col span={8}>
                    <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                    </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Basic Electrical Engineering</td>
                    <td><Col span={8}>
                    <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                        </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Indian Constitution</td>
                    <td><Col span={8}>
                    <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                        </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Physics lab</td>
                    <td><Col span={8}>
                    <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                        </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Basic Electrical Engineering lab</td>
                    <td><Col span={8}>
                    <div className="text-small">
                            <a href="/Feedbackform">Give Feedback</a>
                        </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>ENG. Graphics and Design lab</td>
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

export default Sem1;