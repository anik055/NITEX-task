import { Card, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import everyMonthImage from "../../common/assets/EveryMonth.svg";
import haveToDoImage from "../../common/assets/HaveToDo.svg";
import newSletterReadyImage from "../../common/assets/Ready.svg";
import weSetUpImage from "../../common/assets/WeSetUP.svg";
import "./LearnMore.scss";

export default function LearnMoreCard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/contact`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleButtonClick = () => {
    navigate(`/how-it-works`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="bg-[#F5F5F5] lg:px-0 px-3">
        <h1 className="lg:text-5xl text-[32px] text-center font-[700] lg:mt-[80px] mt-[35px]">
          Here’s how it works
        </h1>
        <p className="text-[16px] font-normal text-[#7A7A7A] text-center lg:mt-5 mt-3 lg:mb-7">
          <p>We’ll take care of all of this for you, freeing you up</p>
          <p>to work on your business.</p>
        </p>
        <Row className="lg:mb-12 mb-2 !ml-0 !mr-0" gutter={[25, 5]}>
          <Col md={6} xs={24} sm={12}>
            <Card
              className="text-center lg:mt-8 mt-6 rounded card-animation ui-card cursor-pointer"
              bordered={false}
              onClick={handleClick}
            >
              <div className="mt-12 mb-12 flex justify-center learn-more-card-icon">
                <img className="icon-image" src={weSetUpImage} alt="" />
              </div>
              <h1>
                <span className="text-[22px] font-bold pb-2">
                  We Set You Up
                </span>
              </h1>
              <div className="text-[15px] font-normal text-[#595959] mt-3">
                We’ll create your branded newsletter header and footer, upload
                your client database, introduce you to your dedicated Content
                Manager, and finalise your content strategy.
              </div>
            </Card>
          </Col>
          <Col className="" md={6} xs={24} sm={12}>
            <Card
              className="text-center lg:mt-8 mt-6 rounded card-animation ui-card cursor-pointer"
              bordered={false}
              onClick={handleClick}
            >
              <div className="mt-12 mb-12 flex justify-center learn-more-card-icon">
                <img className="icon-image" src={everyMonthImage} alt="" />
              </div>
              <h1>
                <span className="text-[22px] font-bold pb-2">Every Month</span>
              </h1>
              <div className="text-[15px] font-normal text-[#595959] mt-3">
                Your Content Manager will create your newsletter, with a
                personalized introduction, a unique lead article relating to
                your business, and 3 other interesting, relevant articles from
                our content library and topical news stories, and send it to you
                for approval.
              </div>
              <div>
              </div>
            </Card>
          </Col>
          <Col md={6} xs={24} sm={12}>
            <Card
              className="text-center lg:mt-8 mt-6 rounded card-animation ui-card cursor-pointer"
              bordered={false}
              onClick={handleClick}
            >
              <div className="mt-12 mb-12 flex justify-center learn-more-card-icon">
                <img className="icon-image" src={haveToDoImage} alt="" />
              </div>
              <h1>
                <span className="text-[22px] font-bold pb-2">
                  All You Have To Do
                </span>
              </h1>
              <div className="text-[15px] font-normal text-[#595959] mt-3">
                You review the draft newsletter, provide us with details of any
                promotions or news you’d like to share with your clients, and
                we’ll turn that into an article, swap it out with one of the
                others, and prepare the newsletter for publishing.
              </div>
            </Card>
          </Col>
          <Col md={6} xs={24} sm={12}>
            <Card
              className="text-center lg:mt-8 mt-6 rounded card-animation ui-card cursor-pointer"
              bordered={false}
              onClick={handleClick}
            >
              <div className="mt-12 mb-12 flex justify-center learn-more-card-icon">
                <img className="icon-image" src={newSletterReadyImage} alt="" />
              </div>
              <h1>
                <span className="text-[22px] font-bold pb-2">
                  Newsletter Ready!
                </span>
              </h1>
              <div className="text-[15px] font-normal text-[#595959] mt-3">
                Once you’ve approved the final version of the newsletter, we
                check your database is current, schedule the newsletter for
                delivery, and send it to all your clients. 5 days later, we
                provide a comprehensive report.
              </div>
            </Card>
          </Col>
        </Row>
        <div className="text-center">
          <button
            onClick={handleButtonClick}
            className="learn-more-button lg:mb-[130px] mb-[45px]"
          >
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}
