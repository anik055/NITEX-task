import { Col, Row } from 'antd';
import React from 'react';

const AboutUs = () => {
  return (
    <>
      <Row className="bg-white !ml-0 !mr-0 lg:px-0 px-6" gutter={[10, 2]}>
        {/* We Set You Up */}
        <Col md={3} xs={24} sm={12}></Col>
        <Col md={9} xs={24} sm={12}>
          <p className=" text-[#4dbfbf] text-[16px] font-semibold lg:mt-12 mt-8">
            About Us
          </p>
          <h1 className="text-[36px] font-bold leading-[1.2em]">
          We stay ahead of the trend with our global designers and forecasters across the globe
          </h1>
          <div className="text-[16px] font-normal text-[#7A7A7A] mt-2">
            <p>
            For men, we create the most dapper and comfortable apparel ranging from formal wear to loungewear.
            </p>
            <p className="my-4">
            For women, we produce the most fashionable and stylish apparel that always trends without compromising comfort.
            </p>
            <p>
            For children, we prioritize comfort and produce apparel that is gentle on their skin. The kids’ best interest is our top priority.
            </p>
            <p className="my-4">
            We craft sustainable outfits catering to all categories for brands
            </p>
          </div>
          <p className="mb-12 text-[15px] font-semibold">
            Click here to find out how we can assist you.
          </p>
        </Col>
        <Col md={9} xs={24} sm={12}></Col>
        <Col md={3} xs={24} sm={12}></Col>
      </Row>
    </>
  );
};

export default AboutUs;
