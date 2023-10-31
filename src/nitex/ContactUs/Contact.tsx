import { Col, Row } from 'antd';
import { NEWInput } from 'common/Inputs/Input';
import { NEWTextArea } from 'common/Inputs/NEWTextArea';
import './contact.scss';

export default function Contact() {
  return (
    <>
      <div className="bg-white lg:px-0 px-6">
        <Row className="lg:mt-10 mt-6">
          <Col md={3} xs={24} sm={24}></Col>
          <Col md={6} xs={24} sm={12}>
            <div>
              <h1 className="lg:text-[40px] text-[32px] font-[800] mb-6 text-black">Contact Us</h1>
              <label>Name</label>
              <NEWInput
                name="username"
                rules={[{ required: true, message: 'Name is required' }]}
              />
              <label>Email</label>
              <NEWInput
                name="usernameEmail"
                rules={[{ required: true, message: 'Email is required' }]}
              />
              <label>Phone</label>
              <NEWInput
                name="usernamePhone"
                rules={[{ required: true, message: 'Phone is required' }]}
              />
              <label>Message</label>
              <NEWTextArea
                name="comments1"
                rules={[
                  {
                    required: true,
                    message: 'Message is required',
                  },
                ]}
              />
              <button className="send-button">
                Send
                <img
                  alt=""
                  src="https://img.icons8.com/ios/50/null/paper-plane--v1.png"
                  className="inline h-5 ml-2"
                />
              </button>
            </div>
          </Col>
          <Col md={6} xs={24} sm={12}></Col>
          <Col md={6} xs={24} sm={12}>
            <div>
              <h1 className="text-[19px] font-bold lg:mt-20 mt-6">
                Phone & Email
              </h1>
              <div className="mt-3 text-[16px] font-normal text-[#7A7A7A]">
                <p>
                  <span className="font-bold">P:</span> 09 972-1192
                </p>
                <p>
                  <span className="font-bold">E: </span>
                  support@nitex.info
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-[19px] font-bold mt-6">Open Hours</h1>
              <div className="mt-3 text-[16px] font-normal text-[#7A7A7A]">
                <p>Mon – Fri 9am – 5pm</p>
              </div>
            </div>
            <div>
              <h1 className="text-[19px] font-bold mt-6">Address</h1>
              <div className="mt-3 mb-3 text-[16px] font-normal text-[#7A7A7A]">
                <p>Nitex</p>
                <p>153 Curtain Rd, London EC2A 3QE,</p>
                <p>United Kingdom</p>
              </div>
            </div>
          </Col>
          <Col md={3} xs={24} sm={24}></Col>
        </Row>
      </div>
      <Row>
        <Col className="!px-0" md={24} xs={24} sm={24}>
          <div>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4964.525199349563!2d-0.0805306!3d51.5267432!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cba9591aca3%3A0x54f4747fefe1049e!2s153%20Curtain%20Rd%2C%20London%20EC2A%203QE%2C%20UK!5e0!3m2!1sen!2sbd!4v1698755162686!5m2!1sen!2sbd"
              width="100%"
              height="360"
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
    </>
  );
}
