import { Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import Slide from "react-reveal/Slide";

export const CounterUpPage = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        const element = document.getElementById("counterUpElement");

        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setCounterOn(true);
            setHasScrolled(true); // Set this to true to prevent further scrolling animations
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <Row className=" py-10 bg-black" id="counterUpElement">
      <Col xs={24} sm={12} lg={6} className="each-unit ">
        <span className="count-number">
          {counterOn && <CountUp start={0} end={100} duration={2} />}M
        </span>
        <span className="unit">units per month</span>
        <Slide bottom>
          <h1 className="info">production Capacity</h1>
        </Slide>
      </Col>
      <Col xs={24} sm={12} lg={6} className="each-unit">
        <span className="count-number">
          {counterOn && <CountUp start={0} end={100} duration={2} />}
        </span>
        <span className="unit">Lines</span>
        <Slide bottom>
          <h1 className="info">Production Lines</h1>
        </Slide>
      </Col>
      <Col xs={24} sm={12} lg={6} className="each-unit">
        <span className="count-number">
          {counterOn && <CountUp start={0} end={4} duration={2} />}X
        </span>
        <span className="unit">units per month</span>
        <Slide bottom>
          <h1 className="info">production lead time</h1>
        </Slide>
      </Col>
      <Col xs={24} sm={12} lg={6} className="each-unit">
        <span className="count-number">
          {counterOn && <CountUp start={0} end={60} duration={2} />}
        </span>
        <span className="unit">Days Est</span>
        <Slide bottom>
          <h1 className="info">Open credit Payments</h1>
        </Slide>
      </Col>
    </Row>
  );
};
