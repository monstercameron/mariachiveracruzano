import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import Calendar from "react-calendar";
import "./style.css";
class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: null,
      days: [],
      hours: { begin: null, end: null, time: null }
    };
  }
  onChange = date => this.setState({ date });
  months = () => {
    //replace with months in vars.js
    const months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec"
    ];
    return months.map((month, index) => {
      return <option key={`month-${index}`}>{month}</option>;
    });
  };
  setMonth = e =>
    this.setState({ month: e.target.options[e.target.selectedIndex].value });
  days = () => {
    const daysOfMonth = new Array(31).fill(null);
    return daysOfMonth.map((day, index) => {
      return <option key={`day-${index}`}>{index + 1}</option>;
    });
  };
  setDays = e => {
    const selected = Array.from(e.target.options)
      .map(e => {
        if (e.selected) return e.value;
      })
      .filter(e => {
        if (e !== "undefined") return e;
      });
    this.setState({ days: selected });
  };
  hours = () => {
    const hoursOfDay = new Array(24).fill(null);
    return hoursOfDay.map((hour, index) => {
      return <option key={`hour-${index}`}>{index + 1}</option>;
    });
  };
  setHours = e => {
    const selected = Array.from(e.target.options)
      .map(e => {
        if (e.selected) return e.value;
      })
      .filter(e => {
        if (e !== "undefined") return e;
      });
      
    this.setState({ hours: selected });
  };
  summary = () => {
    if (this.state.month && this.state.days && this.state.hours) {
    }
  };
  render() {
    console.log(this.state);
    return (
      <Row className="border mb-5">
        <Col sm={8} className="border mx-auto">
          <Row>
            <Col>manual emal goes here</Col>
            <Col>name</Col>
            <Col>email</Col>
            <Col>
              {/* <Calendar onChange={this.onChange} value={this.state.date} /> */}
              date
            </Col>
            <Col>time</Col>
            <Col>message</Col>
            <Col>send</Col>
          </Row>
          <Row>
            <Col>
              <Form>
                {/* name */}
                <FormGroup>
                  <Label for="formName">Name</Label>
                  <Input
                    type="text"
                    name="formName"
                    id="formName"
                    placeholder="Full Name"
                  />
                </FormGroup>
                {/* email */}
                <FormGroup>
                  <Label for="formEmail">Email</Label>
                  <Input
                    type="formEmail"
                    name="formEmail"
                    id="formEmail"
                    placeholder="Email"
                  />
                </FormGroup>
                {/* month */}
                <FormGroup>
                  <Label for="monthSelect">Select Month</Label>
                  <Input
                    type="select"
                    name="monthSelect"
                    id="monthSelect"
                    onChange={this.setMonth}
                  >
                    {this.months()}
                  </Input>
                </FormGroup>
                {/* day */}
                <FormGroup>
                  <Label for="exampleSelectMulti">Select The Days</Label>
                  <br />
                  <small>
                    Windows ctrl/shift | Mac cmd/shift to select multiple days
                  </small>
                  <Input
                    type="select"
                    name="selectMulti"
                    id="exampleSelectMulti"
                    onChange={this.setDays}
                    multiple
                  >
                    {this.days()}
                  </Input>
                </FormGroup>
                {/* time */}
                <FormGroup>
                  <Label for="exampleSelectMulti">Select The Hours</Label>
                  <br />
                  <small>
                    Windows ctrl/shift | Mac cmd/shift to select multiple days
                  </small>
                  <Input
                    type="select"
                    name="selectMulti"
                    id="exampleSelectMulti"
                    onChange={this.setHours}
                    multiple
                  >
                    {this.hours()}
                  </Input>
                </FormGroup>
                {/* more details */}
                <FormGroup>
                  <Label for="formTextArea">Additional Details</Label>
                  <Input type="textarea" name="text" id="formTextArea" />
                </FormGroup>
                {/* summary */}
                <Row className="mb-3">
                  <Col>test</Col>
                </Row>
                <Button color="primary" className="btn-block">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
export default Contacts;
