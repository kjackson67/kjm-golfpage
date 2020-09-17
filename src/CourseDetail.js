import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CourseDetail.css";
export default class CourseDetail extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  updateCourse = (e) => {
    e.preventDefault();
    let updatedCourse = { ...this.state };
    updatedCourse.courseId = parseInt(this.props.match.params.id);
    this.props.updateCourse(updatedCourse);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    console.log(this.state);
    const course = this.props.courses.find((course) => {
      return course.id == this.props.match.params.id;
    });
    return (
      <>
        <h1> {course.courseName} Details </h1>
        <h3> Edit {course.courseName} Form</h3>
        <form
          onSubmit={(e) => this.updateCourse(e)}
          onChange={this.handleChange}
        >
          {" "}
          {/* <div className="parent">
            <input
              type="text"
              name="courseName"
              placeholder={course.courseName}
            /> */}
          {/* </div> */}
          <div className="parent">
            <input
              className="box"
              type="hidden"
              name="courseId"
              value={course.id}
            />
            <br></br>Location: {course.location}
            <input
              className="loc"
              onChange={this.handleChange}
              type="text"
              name="location"
            />
          </div>
          <div className="parent">
            <br></br>Par: {course.par}
            <input
              className="box"
              onChange={this.handleChange}
              type="text"
              name="par"
            />
          </div>
          <div className="parent">
            <br></br>Rating: {course.rating}
            <input
              className="box"
              onChange={this.handleChange}
              type="text"
              name="rating"
            />
          </div>
          <div className="parent">
            <br></br>
            Slope: {course.slope}
            <input
              className="box"
              onChange={this.handleChange}
              type="text"
              name="slope"
            />
          </div>
          <div className="parent">
            <br></br>
            Tee: {course.tee}
            <input
              className="box"
              onChange={this.handleChange}
              type="text"
              name="tee"
            />
          </div>
          <div className="parent">
            <br></br>
            Yardage: {course.yardage}
            <input
              className="box"
              onChange={this.handleChange}
              type="text"
              name="yardage"
            />
          </div>
          <br></br>
          <input className="upd" type="submit" value="Update Changes" />
        </form>
      </>
    );
  }
}