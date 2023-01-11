import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Col, Row, Table } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/alerts";

function Feedbackform() {
    const dispatch = useDispatch();
    const [results, setResults] = React.useState([]);
    const navigate = useNavigate();
    const getResults = async (values) => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post(
                "/api/Studentfeedback",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            dispatch(HideLoading());
            if (response.data.success) {
                setResults(response.data.data);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            toast.error(error.message);
        }
    };

    return (
        <div className="p-5">
            <div className="header d-flex justify-content-between align-items-center py-3">
                <h1 className="text-white">
                    {" "}
                    <b className="secondary-text">Feedback form </b>{" "}
                </h1>

            </div>

            <Row gutter={[20, 20]}>
                <Col span={24}>
                    <h1 className="text-medium align-items-center pt-3">
                        <label for="fname">Name Of the faculty:</label>
                        <input type="text" id="fname" name="fname"></input>

                    </h1>
                </Col>

                <Col span={24}>
                    <h1 className="text-small align-items-center">
                        <label><b>1. Punctuality of the teacher in the class</b></label>

                        <select name="rank" id="rank">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                    </h1>
                </Col>

                <Col span={24}>
                    <h1 className="text-small align-items-center">
                        <label><b>2. The Teacher Exhibits essential Competency in the subject</b></label>

                        <select name="rank" id="rank">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                    </h1>
                </Col>

                <Col span={24}>
                    <h1 className="text-small align-items-center">
                        <label><b>3. Regularity in taking classes</b></label>

                        <select name="rank" id="rank">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                    </h1>
                </Col>

                <Col span={24}>
                    <h1 className="text-small align-items-center">
                        <label><b>4. Completes syllabus of the course in time</b></label>

                        <select name="rank" id="rank">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                    </h1>
                </Col>

                <Col span={24}>
                    <h1 className="text-small align-items-center">
                        <label><b>5. Self-Confidence</b></label>

                        <select name="rank" id="rank">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                    </h1>
                </Col>

                <Col span={24}>
                    <h1 className="text-small align-items-center">
                        <label><b>6. Conducting the Classroom discussions</b></label>

                        <select name="rank" id="rank">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                    </h1>
                </Col>

                <Col span={24}>
                    <h1 className="text-small align-items-center">
                        <label><b>7. skill of linking subject to the life experience & creating intrest in the subject</b></label>

                        <select name="rank" id="rank">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                    </h1>
                </Col>

                <Col span={24}>
                    <h1 className="text-small align-items-center">
                        <label><b>8. Uses of teaching aids(OHP/Blackboard/PPT's)</b></label>

                        <select name="rank" id="rank">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                    </h1>
                </Col>

                <Col span={24}>
                    <h1 className="text-small align-items-center">
                        <label><b>9. Blackboard/whiteboard work in terms of legibility, visibility and structure</b></label>

                        <select name="rank" id="rank">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                    </h1>
                </Col>

                <Col span={24}>
                    <h1 className="text-small align-items-center">
                        <label><b>10. Helping approach towards varied academic intrests of students</b></label>

                        <select name="rank" id="rank">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                    </h1>
                </Col>

                <Col span={24}>
                    <h1 className="text-small align-items-center">
                        <label><b>11. Helps students irrespective of ethnicity and culture/background</b></label>

                        <select name="rank" id="rank">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                    </h1>
                </Col>

                <Col span={24}>
                    <h1 className="text-small align-items-center">
                        <label><b>12. clarifies the doubts of students when asked</b></label>

                        <select name="rank" id="rank">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                    </h1>
                </Col>

                <Col span={24}>
                    <h1 className="text-small align-items-center">
                        <label><b>13. Control mechanism in effectively conductin the classes</b></label>

                        <select name="rank" id="rank">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                    </h1>
                </Col>

                <Col span={24}>
                    <h1 className="text-small align-items-center">
                        <label><b>14. Acts as role model</b></label>

                        <select name="rank" id="rank">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                    </h1>
                </Col>

                <Col span={24}>
                    <h1 className="text-small align-items-center">
                        <label><b>15. Well integrated with the lecture and/or course material</b></label>
                        
                        <select name="rank" id="rank">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        

                    </h1>
                </Col>





                <Col span={8}>
                    <div
                        className="text-medium align-items-center pt-3"
                        onClick={() => {
                            navigate("/Studentfeedback");
                        }}
                    >
                        <h1 className="text-medium align-items-center text-black">
                            <button type="button">Submit</button>

                        </h1>


                        <hr />

                    </div>
                </Col>
            </Row>

        </div>
    );
}

export default Feedbackform; 