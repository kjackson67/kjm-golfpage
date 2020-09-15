import React from "react";
import { Link } from "react-router-dom";

export default function CourseDetail(props) {
    console.log("this is the details page")
    console.log(props);
    const course = props.courses.find((course) => {
     return course.id == props.match.params.id
    })   
    console.log(course);


return (
    <>
        <h1> {course.courseName} Details </h1>
    <h3> Edit {course.courseName} Form</h3>
    <form onSubmit={(e) => props.updateCourse(e)}>
      <input type="text" name="courseName" placeholder={course.courseName} />
            <br></br>Location: {course.location}
            <input type="text" name="Location" placeholder={course.location}/>
            <input type="submit" value="Update Location" />
    </form> 
            <br></br>Par:  {course.par}
            <input type="text" name="Par" placeholder={course.par}/>
            <input type="submit" value="Update Par" />
            
            <br></br>Rating:  {course.rating}
            <input type="text" name="Rating" placeholder={course.rating}/>
            <input type="submit" value="Update Rating" />
            
            <br></br>
            Slope:  {course.slope}
            <input type="text" name="Slope" placeholder={course.slope}/>
            <input type="submit" value="Update Slope" />
            <br></br>

            Tee:  {course.tee}
            <input type="text" name="Tee" placeholder={course.tee}/>
            <input type="submit" value="Update Tee" />
            
            <br></br>
            Yardage:  {course.yardage}
            <input type="text" name="Yardage" placeholder={course.yardage}/>
            <input type="submit" value="Update Yardage" />
    
    </>
);

}
