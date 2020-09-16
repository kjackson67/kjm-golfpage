import React, { Component } from "react";
import { Link } from "react-router-dom";

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
            <input
              type="text"
              name="courseName"
              placeholder={course.courseName}
            />
            <input type="hidden" name="courseId" value={course.id} />
            <br></br>Location: {course.location}
            <input onChange={this.handleChange} type="text" name="location" />
            <br></br>Par: {course.par}
            <input
              onChange={this.handleChange}
              type="text"
              name="par"
              placeholder={course.par}
            />
            <br></br>Rating: {course.rating}
            <input
              onChange={this.handleChange}
              type="text"
              name="rating"
              placeholder={course.rating}
            />
            <br></br>
            Slope: {course.slope}
            <input
              onChange={this.handleChange}
              type="text"
              name="slope"
              placeholder={course.slope}
            />
            <br></br>
            Tee: {course.tee}
            <input
              onChange={this.handleChange}
              type="text"
              name="tee"
              placeholder={course.tee}
            />
            <br></br>
            Yardage: {course.yardage}
            <input
              onChange={this.handleChange}
              type="text"
              name="yardage"
              placeholder={course.yardage}
            />
            <br></br>
            <input type="submit" value="Update Changes" />
          </form>
        </>
      );
    }
}

// export default function CourseDetail(props) {
//     console.log("this is the details page")
//     console.log(props);
//     const course = props.courses.find((course) => {
//      return course.id === props.match.params.id
//     })   
//     console.log(course);


// return (
//     <>
//         <h1> {course.courseName} Details </h1>
//     <h3> Edit {course.courseName} Form</h3>
//     <form onSubmit={(e) => props.updateCourse(e)}
//     onChange={props.handleChange}>
    
//       <input type="text" name="courseName" placeholder={course.courseName} />
//         <input type="hidden" name="courseId" value={course.id} />
//             <br></br>Location: {course.location}
//             <input onChange={ (e) => props.handleChange(e)} type="text" name="location" />
//             <input type="submit" value="Update Location" />

//             <br></br>Par:  {course.par}
//             <input onChange={ (e) => props.handleChange(e)} type="text" name="par" placeholder={course.par}/>
//             <input type="submit" value="Update Par" />
            
//             <br></br>Rating:  {course.rating}
//             <input onChange={ (e) => props.handleChange(e)} type="text" name="rating" placeholder={course.rating}/>
//             <input type="submit" value="Update Rating" />
            
//             <br></br>
//             Slope:  {course.slope}
//             <input onChange={ (e) => props.handleChange(e)} type="text" name="slope" placeholder={course.slope}/>
//             <input type="submit" value="Update Slope" />
//             <br></br>

//             Tee:  {course.tee}
//             <input onChange={ (e) => props.handleChange(e)} type="text" name="tee" placeholder={course.tee}/>
//             <input type="submit" value="Update Tee" />
            
//             <br></br>
//             Yardage:  {course.yardage}
//             <input onChange={ (e) => props.handleChange(e)} type="text" name="yardage" placeholder={course.yardage}/>
//             <input type="submit" value="Update Yardage" />
//     </form> 

//     </>
// );
