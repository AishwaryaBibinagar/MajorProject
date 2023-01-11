import React from "react";
import { Col } from "antd";

function Sem7() {

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
                    <td>VLSI Design</td>
                    <td><Col span={8}>
                        <div>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScgfrePrpcMla_qoVig13J3RA9d_fgC0HqTzy2YRe2LmgQfeg/viewform?usp=sf_link">
                            Give Feedback
                        </a>

                        </div>
                    </Col>
                    </td>
                </tr>
                <tr>
                    <td>Big Data Analytics</td>
                    <td><Col span={8}>
                        <div>
                             <a href="https://docs.google.com/forms/d/e/1FAIpQLSfBSth0ST004dUKmmSfdfZTBOczP-M9vmUWsk4QY4BX5UOQTw/viewform?usp=sf_link">
                             Give Feedback
                         </a>

                        </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Cloud Computing</td>
                    <td><Col span={8}>
                        <div>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfyH3ZR-sel3s71NH1yynU1H6mhOb0dL25XnMOryGKgSSkm3A/viewform?usp=sf_link">
                            Give Feedback
                        </a>

                        </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Fundamentals of IOT</td>
                    <td><Col span={8}>
                        <div>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScPZhqahStrQZYR90OZTGeaqsncaNqXEbTfrekF7tMnM_pO7A/viewform?usp=sf_link">
                                Give Feedback
                            </a>
                           

                        </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>VLSI lab</td>
                    <td><Col span={8}>
                        <div>
                            <a href="">
                            Give Feedback
                        </a>

                        </div>
                    </Col></td>
                </tr>
                <tr>
                    <td>Big Data Analytics lab</td>
                    <td><Col span={8}>
                        <div>
                            <a href="">
                                Give Feedback
                            </a>
                        </div>
                    </Col></td>
                </tr>

            </table>



        </div>
    );
}

export default Sem7;