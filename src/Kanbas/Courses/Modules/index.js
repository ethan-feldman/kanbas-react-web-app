import ModuleList from "./ModuleList";
import Button from 'react-bootstrap/Button';
import {AiOutlineCheckCircle} from "react-icons/ai";

function Modules() {
  return (
    <div>
      <h2>Modules</h2>
      <Button variant="secondary">Collapse All</Button>{' '}
      <Button variant="secondary">View Progress</Button>{' '}
      <Button variant="secondary">
      <AiOutlineCheckCircle />
        Publish All
      </Button>{' '}
      <Button variant="danger">Module</Button>{' '}
      <ModuleList />
    </div>
  );
}
export default Modules;