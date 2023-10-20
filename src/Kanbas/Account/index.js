import 'bootstrap/dist/css/bootstrap.min.css';
import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";


function Account() {
  return (
    <div class="col-12 col-md-6 col-xl-9">
    <FaUserCircle size={50}/>

        <h1> Jose Annunziato </h1> 
        <form action="/kanbas/profile/edit">
          <input type="submit" value="Edit Profile" />
        </form>

        <h2> Contact </h2>
        No registered serverces, you can add some on the <a href="#">settings</a> page


    <h2>Biography</h2>
    Faculty, Software Engineer, AI, Space, and renewables enthusiast.

    <h2>Links</h2>
    <i class="fa fa-solid fa-link"></i>
    <a href="#">YouTube</a>
    </div>
  );
}
export default Account;