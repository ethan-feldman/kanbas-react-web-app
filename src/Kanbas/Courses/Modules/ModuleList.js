import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import Button from 'react-bootstrap/Button';
import {AiOutlineCheckCircle, AiOutlinePlus, AiOutlineMore} from "react-icons/ai";
import { Card } from "react-bootstrap/Card";
import { FaEllipsisV, FaCaretDown, FaPlus, FaCheckCircle } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";



function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  
  return ( 
    <div> 
      <ul className="list-group module-groups">
      <li className="list-group-item">
        <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add</button>
        <button onClick={() => dispatch(updateModule(module))}>
        Update</button>

        <input value={module.name}
          onChange={(e) => 
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        <textarea value={module.description}
          onChange={(e) => 
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>
      </li>

      {
      modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
            <div key={index}>
                <li className="list-group-item list-group-item-secondary">
                <button onClick={() => dispatch(deleteModule(module._id))}>Delete</button>
                <button onClick={() => dispatch(setModule(module))}>Edit</button> 
                  <FontAwesomeIcon icon={FaEllipsisV} className="ellipse-color" />
                  <FontAwesomeIcon icon={FaEllipsisV} className="ellipse-color icon-space2" />
                  <FontAwesomeIcon icon={FaCaretDown} className="icon-space2" />
                              {module.name}

                <div className="float-end">
                  <div className="btn-group">
                      <FontAwesomeIcon icon={FaCheckCircle} className="text-success icon-space dropdown-toggle"/>
                    <ul className="dropdown-menu">
                     {/* You can put any dropdown items here */}
                    </ul>
              </div>

              <FontAwesomeIcon icon={FaPlus} className="icon-space ellipse-color" />
              <FontAwesomeIcon icon={FaEllipsisV} className="ellipse-color" />
            </div>

                </li>

            <li className="list-group-item left-border-line">
              <FontAwesomeIcon icon={FaEllipsisV} className="ellipse-color" />
              <FontAwesomeIcon icon={FaEllipsisV} className="ellipse-color icon-space-head" />
                          {module.description}
              <i className="ellipse-color float-end "><FontAwesomeIcon icon={FaEllipsisV}  /></i>
              <i className="text-success float-end icon-space" ><FontAwesomeIcon icon={FaCheckCircle} /></i>

              </li>
        </div>
        ))
    }
                </ul>
          
</div>
);
  }

export default ModuleList;

{
  
/* <div className="w-75">
<div className="list-group">
  {
   modules.filter((module) => module.course === courseId)
     .map((module, index) => (
    <div key={index} className="list-group-item">
      <div>
        <span className="text">
        <h2>{module.name}</h2>
         <p>{module.description}</p>
        </span>
        </div>

        <div className="float-end">
        <AiOutlineCheckCircle style ={{color: 'green'}} size={30}/>
        <AiOutlinePlus style ={{color: 'gray'}} size={30}/>
        <AiOutlineMore style ={{color: 'gray'}} size={30}/>
        </div>
        
   </div>
  ))
  }

</div>
</div> */}