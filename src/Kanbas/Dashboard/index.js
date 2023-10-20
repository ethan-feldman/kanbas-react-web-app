import { Link } from "react-router-dom";
import db from "../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import 'react-bootstrap';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import northeasternlogo from '../Images/northeasternlogo.jpeg';


function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <CardGroup className="cardgroup-style">
      <div className="">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                <Card style={{ width: '18rem', height: '18rem'}}>
                <Card.Img variant="top" src={northeasternlogo} style = {{width: '18rem', height: '14rem'}} />
                  <Card.Body>
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