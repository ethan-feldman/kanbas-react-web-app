import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import Button from 'react-bootstrap/Button';
import {AiOutlineCheckCircle, AiOutlinePlus, AiOutlineMore} from "react-icons/ai";
import { Card } from "react-bootstrap/Card";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div className="w-75">
    <div className="float-right">
      <Button variant="secondary">Collapse All</Button>{' '}
      <Button variant="secondary">View Progress</Button>{' '}
      <Button variant="secondary">
      <AiOutlineCheckCircle />
        Publish All
      </Button>{' '}
      <Button variant="danger">Module</Button>{' '}
    </div>

    <div className="list-group">
      {
       modules.filter((module) => module.course === courseId)
         .map((module, index) => (
        <div key={index} className="list-group-item">

            <span className="text">
            <h2>{module.name}</h2>
             <p>{module.description}</p>
            </span>

            <div className="float-end">
            <AiOutlineCheckCircle style ={{color: 'green'}} size={30}/>
            <AiOutlinePlus style ={{color: 'gray'}} size={30}/>
            <AiOutlineMore style ={{color: 'gray'}} size={30}/>
            </div>
            
       </div>
      ))
      }

    </div>
    </div>
  );
}
export default ModuleList;