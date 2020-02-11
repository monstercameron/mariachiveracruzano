import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
  // FormText
} from "reactstrap";
import "./style.css";
class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: "jan",
      days: [],
      hours: { begin: null, end: null, time: null },
      status: null
    };
  }
  
  
  
  // SCRAP THIS FOR A DATE PICKER!


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
      .filter(e => e.selected)
      .filter(e => e !== "undefined")
      .map(e => e.value);
    this.setState({ days: selected });
  };
  hours = () => {
    const hoursOfDay = new Array(24).fill(null);
    return hoursOfDay.map((hour, index) => {
      let keyIndex = index;
      let amOrPm = "AM";
      if (index > 11) {
        index -= 12;
        amOrPm = "PM";
      }
      return (
        <option key={`hour-${keyIndex}`}>
          {index + 1}:00 {amOrPm}
        </option>
      );
    });
  };
  //needs to count the length and store start and end
  setHours = e => {
    const selected = Array.from(e.target.options)
      .filter(e => e.selected)
      .filter(e => e !== "undefined")
      .map(e => e.value);

    this.setState({
      hours: {
        begin: selected[0],
        end:
          parseInt(selected[selected.length - 1].split(":")[0]) +
          1 +
          ":" +
          selected[selected.length - 1].split(":")[1],
        time: selected.length
      }
    });
  };
  summary = () => {
    if (this.state.month && this.state.days && this.state.hours.time) {
      return (
        <Col>
          {this.state.month}&nbsp;
          {this.state.days.map(day => day).join(", ")}&nbsp; from{" "}
          {this.state.hours.begin} to {this.state.hours.end}
        </Col>
      );
    }
  };
  handleSubmit = e => {
    // console.log(e.target);
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    console.log(data);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
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
              <Form
                onSubmit={this.handleSubmit}
                action="https://formspree.io/mlerwypa"
                method="POST"
              >
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
                <Row className="mb-3">{this.summary()}</Row>
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
