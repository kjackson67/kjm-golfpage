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
        <h1> {course.courseName} Details  </h1>
        <h3> Edit Form</h3>
        <form onSubmit={(e) => props.updateCourse(e)}>
            <input type = "text" name="courseName" placeholder={course.courseName} />
        
            <br>
            </br>Location:{course.location}<br>
            </br>
            Par:{course.par}<br>
            </br>
            Rating:{course.rating}<br>
            </br>
            Slope:{course.slope}<br>
            </br>
            Tee:{course.tee}<br>
            </br>
            Yardage:{course.yardage}

            
        </form>
    
    
    
    
    </>
);

}
