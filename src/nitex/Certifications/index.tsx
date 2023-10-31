import { Col, Row } from "antd";
import React from "react";

export default function Certifications() {
  const allCertificates = [
    "https://nitex.com/wp-content/uploads/2022/08/image-1-1.png",
    "https://nitex.com/wp-content/uploads/2022/08/image-2-1.png",
    "https://nitex.com/wp-content/uploads/2022/08/image-3-1.png",
    "https://nitex.com/wp-content/uploads/2022/08/image-5-1.png",
    "https://nitex.com/wp-content/uploads/2022/08/image-6-1.png",
    "https://nitex.com/wp-content/uploads/2022/08/image-10.png",
    "https://nitex.com/wp-content/uploads/2022/08/image-11.png",
    "https://nitex.com/wp-content/uploads/2022/08/image-18.png",
    "https://nitex.com/wp-content/uploads/2022/08/image-9-1.png",
    "https://nitex.com/wp-content/uploads/2022/08/image-13.png",
    "https://nitex.com/wp-content/uploads/2022/08/image-19.png",
    "https://nitex.com/wp-content/uploads/2022/08/image-8-1.png",
  ];
  return (
    <div className="certifications">
      <h1 className="title">Certifications</h1>
      <Row>
        {allCertificates.map((each) => (
          <Col className="flex justify-center px-2 py-2" lg={4} md={6} xs={12}>
            <img className="w-20" src={each} alt="" />
          </Col>
        ))}
      </Row>
    </div>
  );
}
