import { Link, useParams, useLocation } from "react-router-dom";
import "./CourseNavigation.css";


function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Assignments", "Quizzes",
                "Grades", "People", "Discussions", "Announcements", "Pages", "Files",
                "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];

  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (

    <div className="list-group list-group-flush course-navigation-list-group" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item menu-text-item ${pathname.includes(link) && "active"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}


export default CourseNavigation;