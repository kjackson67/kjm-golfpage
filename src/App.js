import React, { Component, useState, useEffect } from "react";
import "./App.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import AllCourses from "./AllCourses";
import CourseDetail from "./CourseDetail";
const backendUrl =
  process.env.REACT_APP_BACKEND_URL ||
  "https://golf-inc-backend.herokuapp.com";

// componentDidMount() {
//   this.getData();
// }
// getData() {
//   axios.get("https://api.golfbert.com/v1/courses?api_key="`Vh9he3wlLX4F6XYCEJvNP9GhxsRbMeeb5cjf5fcC;
//   AKIAY4WGH3URJOE3QYGZ;
//   pnzG4H9Ahn+3Xw74+3ztSY6XMbOPnczNps7f/KpK`)
// }

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      courses:[]
    }
  }
  componentDidMount() {
    this.getCourses()
  }
  getCourses = async() => {
    let courses = await axios.get(`${backendUrl}/course`);
    console.log(courses);
    this.setState({
      courses:courses.data.courses
    })

  }
   render() {
  

    return (
      <div className="App">
        <nav>
          <h4>Welcome to Your Golf Course Page</h4>
          <Link to="/">
            Go Home 
             <br>
            </br>
            <br></br>
        </Link>
          <Link to="/allcourses">Go to Your Courses</Link>
        </nav>
      

        <Switch>
          <Route
            exact path="/" render={Home} />
          <Route
            path="/allcourses"
            component={
              (routerProps) => (
                <AllCourses {...routerProps}{...this.state} />
              )
            
          
            } />
        
          <Route
            exact
            path="/coursedetails/:id"
            component={(routerProps) => (
              <CourseDetail {...routerProps} />
            )}
          />
        </Switch>
      </div>
    );
  }      
};
export default App;
