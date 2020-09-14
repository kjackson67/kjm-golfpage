import React from "react";
import { Link } from "react-router-dom";
import CourseDetail from "./CourseDetail";

export default function AllCourses(props) {
    console.log(props)
    return (
       <> 
        <h1> All Courses</h1>
         <form onSubmit={(e) => props.createCourse(e)}>
        Course Name: <input type="text" name="courseName" />
        <input type="submit" value="New Course" />
      </form>

      <ul>
                {props.courses.map((course, index) => {
                    return (
                        <li key={course.id}>
                            <br></br>
                            <Link to={`/courses/${course.id}`} key={course.id}>
                                {course.courseName}
                            </Link>
                            
                            
                            <button
                                key={`button-${course.id}`}
                                id={course.id}
                                arrayindex={index}
                                onClick={props.deleteCourse}
                            >
                                Delete
              </button>
                        </li>
                    );

})}
        
      </ul>
    </>
  );
}

    

            
    
