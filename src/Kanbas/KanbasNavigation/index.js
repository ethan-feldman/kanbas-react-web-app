import { Link, useLocation } from "react-router-dom";
import "./KanbasNavigation.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoPersonCircle } from "react-icons/io5";
import {
  AiFillDashboard,
  AiFillPlayCircle,
  AiFillQuestionCircle,
  AiFillClockCircle,
} from "react-icons/ai";
import { BiSolidGroup, BiSolidBookBookmark } from "react-icons/bi";
import {
  BsFillCalendarEventFill,
  BsFillArrowRightCircleFill,
  BsFillInboxFill,
} from "react-icons/bs";
import northeasternlogo from '../Images/northeasternlogo.jpeg';


function KanbasNavigation() {
  const links = [
    { label: "Account", icon: IoPersonCircle },
    { label: "Dashboard", icon: AiFillDashboard },
    { label: "Courses", icon: BiSolidBookBookmark },
    { label: "Group", icon: BiSolidGroup },
    { label: "Calendar", icon: BsFillCalendarEventFill },
    { label: "Inbox", icon: BsFillInboxFill },
    { label: "History", icon: AiFillClockCircle },
    { label: "Studio", icon: AiFillPlayCircle },
    { label: "Commons", icon: BsFillArrowRightCircleFill },
    { label: "Help", icon: AiFillQuestionCircle },
  ];
  const { pathname } = useLocation();
  return (
    <div className="list-group kanbas-navigation-list-group">
      <li class="list-group-item menu-item-text ">
      <img src={northeasternlogo} style={{width: "75px", height: "75px"}}></img>

      </li>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link.label}`}
          className={`list-group-item menu-item-text ${
            pathname.includes(link.label) && "active"
          }`}
        >
          <div className="kanbas-navigation-icon">
            <link.icon />
          </div>
          <div className="kanbas-navigation-label">{link.label}</div>
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;

