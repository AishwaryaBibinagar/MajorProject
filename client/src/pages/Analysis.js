import React from 'react'
import { Col, Row } from "antd";

function Analysis() {
  return (
    <div className="p-5">
          <div className="header d-flex justify-content-between align-items-center py-3">
              <h1 className="text-white">
                  {" "}
                  <b className="text-blue"> IT </b> RESULT ANALYSIS{" "}
              </h1>
          </div>

      <Row gutter={[20, 20]}>
          <Col span={24}>
            <h3 className="text-mini my-3">
              Select Your RollNo From Below..{" "}
            </h3>
            <hr />
          </Col>
        </Row>  
      <div>
        <iframe title="RESULTS" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=f017656a-52b0-40ef-b901-553a7489d9f8&autoAuth=true&ctid=379bd26d-9492-4d19-a9a7-72bdf3e4d5fa" frameborder="0" allowFullScreen="true"></iframe>
        </div>
  
    </div>
  )
}

export default Analysis