import React from "react";
import { Link } from "react-router-dom";

export default function CourseDetail(props) {
    console.log("this is the details page")
    console.log(props);
    const course = props.courses.find((course) => {
     return course.id === props.match.params.id
    })   
    console.log(course);


return (
    <>
        <h1> {course.courseName} Details </h1>
    <h3> Edit {course.courseName} Form</h3>
    <form onSubmit={(e) => props.updateCourse(e)}
    onChange={props.handleChange}>
    
      <input type="text" name="courseName" placeholder={course.courseName} />
        <input type="hidden" name="courseId" value={course.id} />
            <br></br>Location: {course.location}
            <input onChange={ (e) => props.handleChange(e)} type="text" name="location" />
            <input type="submit" value="Update Location" />

            <br></br>Par:  {course.par}
            <input onChange={ (e) => props.handleChange(e)} type="text" name="par" placeholder={course.par}/>
            <input type="submit" value="Update Par" />
            
            <br></br>Rating:  {course.rating}
            <input onChange={ (e) => props.handleChange(e)} type="text" name="rating" placeholder={course.rating}/>
            <input type="submit" value="Update Rating" />
            
            <br></br>
            Slope:  {course.slope}
            <input onChange={ (e) => props.handleChange(e)} type="text" name="slope" placeholder={course.slope}/>
            <input type="submit" value="Update Slope" />
            <br></br>

            Tee:  {course.tee}
            <input onChange={ (e) => props.handleChange(e)} type="text" name="tee" placeholder={course.tee}/>
            <input type="submit" value="Update Tee" />
            
            <br></br>
            Yardage:  {course.yardage}
            <input onChange={ (e) => props.handleChange(e)} type="text" name="yardage" placeholder={course.yardage}/>
            <input type="submit" value="Update Yardage" />
    </form> 

    </>
);

}
