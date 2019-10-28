import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import bg from "../../assets/images/bw-guitar.jpg";
import anImg from "../../assets/images/instafeed/0.jpg";
import text from "../../vars/text";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row className="about-bg" style={{ backgroundImage: `url(${bg})` }}>
        <Col
          sm={8}
          className="about-group border mx-auto mt-5 mb-5 p-3 rounded shadow"
        >
          <Row>
            <Col sm={4} className="about-box">
              <img
                alt="itsa me"
                src={anImg}
                className="img-fluid img-thumbnail shadow"
              />
            </Col>
            <Col sm={7} className="about-box mx-auto">
              <Row className="text-capitalize">
                <Col
                  sm={12}
                  className="mt-4 shadow rounded about-item text-center p-1"
                >
                  {text.about[this.props.lang].text1}
                </Col>
                <Col
                  sm={12}
                  className="mt-4 shadow rounded about-item text-center p-1"
                >
                  {text.about[this.props.lang].text2}
                </Col>
                <Col
                  sm={12}
                  className="mt-4 shadow rounded about-item text-center p-1"
                >
                  {text.about[this.props.lang].text3}
                </Col>
                <Col
                  sm={12}
                  className="mt-4 shadow rounded about-item text-center p-1"
                >
                  {text.about[this.props.lang].text4}
                </Col>
                <Col
                  sm={12}
                  className="mt-4 shadow rounded about-item-link text-center p-1"
                >
                  {text.about[this.props.lang].text5}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
export default About;
