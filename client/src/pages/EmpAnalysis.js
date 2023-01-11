import React from 'react'
import { Col, Row } from "antd";

function Analysis() {
  return (
    <div className="p-5">
          <div className="header d-flex justify-content-between align-items-center py-3">
              <h1 className="text-white">
                  {" "}
                  <b className="secondary-text"> IT </b> RESULT ANALYSIS{" "}
              </h1>
          </div>

      <Row gutter={[20, 20]}>
          <Col span={24}>
            <h3 className="text-medium my-3">
              Select Your Name From Below..{" "}
            </h3>
            <hr />
          </Col>
        </Row>  
      <div>
        <iframe title="RESULTS" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=41b7eda5-b12a-45c1-9bca-0f4cda5d430e&autoAuth=true&ctid=69219138-4315-488e-9164-e14adb81afbf" frameborder="0" allowFullScreen="true"></iframe>
        </div>
  
    </div>
  )
}

export default Analysis