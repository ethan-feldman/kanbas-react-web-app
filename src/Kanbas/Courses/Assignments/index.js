import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {AiFillCheckCircle, AiOutlineMore} from "react-icons/ai";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
      <div className="list-group w-75">
        <div className="list-group-item">
          <h2>ASSIGNMENTS</h2>
        </div>

        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
              <div>
              <span className="text">{assignment.title}</span>
              </div>

              <div className="float-end">
                <span>
              <AiFillCheckCircle color={'green'}/>
              <AiOutlineMore color={'black'}/>
              </span>
              </div>
          </Link>
        ))}
      </div>
  );
}
export default Assignments;