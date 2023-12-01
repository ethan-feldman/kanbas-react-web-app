import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href="https://kanbas-node-server-app-2-s5fe.onrender.com/a5/welcome"
             className="list-group-item">
          </a>
          <a href="https://kanbas-node-server-app-2-s5fe.onrender.com/a5/add/:a/:b"
            className="list-group-item"></a>
          <a href="https://kanbas-node-server-app-2-s5fe.onrender.com/a5/subtract/:a/:b"
            className="list-group-item"></a>
        </div>
        <EncodingParametersInURLs/>
        <WorkingWithObjects/>
        <WorkingWithArrays/>
      </div>
    );
  }
  export default Assignment5;