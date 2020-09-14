import React from "react";
import { Link } from "react-router-dom";

export default function CourseDetail(props) {
    console.log("this is the details page")
    console.log(props);
    


return (
    <>
        <h1>   Details  </h1>
        <h3> Edit Form</h3>
        <form onSubmit={(e) => props.updateCourse(e)}>
            <input type = "text" name placeholder={CourseDetail.courseName} />
        </form>
    
    
    
    
    </>
);

}
