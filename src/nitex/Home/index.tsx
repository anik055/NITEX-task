import Certifications from "nitex/Certifications";
import { CounterUpPage } from "nitex/Counting";
import FooterTop from "nitex/FooterTop";
import LearnMoreCard from "nitex/LearnMoreCard/LearnMoreCard";
import Pricing from "nitex/Pricing/Pricing";
import Sustain from "nitex/Sustainability/sustain";
import VideoAndSlider from "nitex/VideoPart/VideoAndSlider";
import React, { useEffect } from "react";

type indexType = {};
const Home: React.FC<indexType> = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Sustain />
      <VideoAndSlider />
      <LearnMoreCard />
      <Pricing />
      <CounterUpPage />
      <Certifications />
      <FooterTop />
    </>
  );
};

export default Home;
