import { Link } from "react-router-dom";
import { useState } from "react";
import db from "../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import 'react-bootstrap';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import northeasternlogo from '../Images/northeasternlogo.jpeg';


function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  return (
    <div>
            <h5>Course</h5>
      <input value={course.name} className="form-control" 
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control" 
                   onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date" 
                   onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
        <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button>

      <CardGroup className="cardgroup-style">
      <div>
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                <Card style={{ width: '18rem', height: '18rem'}}>
                <Card.Img variant="top" src={northeasternlogo} style = {{width: '18rem', height: '14rem'}} />
                  <Card.Body>
                  <button
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>

            <button
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>


                    <Card.Title>{course.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
          </Link>
        ))}
      </div>
      </CardGroup>
    </div>
    
  );
}
export default Dashboard;