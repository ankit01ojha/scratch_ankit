import React from "react";
import Events from './Events';
import Motions from './Motions';
import Looks from './Looks';
import Controls from './Controls';

export default function Sidebar(props) {
  
  return (
    <div className="flex flex-col items-start flex-none w-1/2 h-full p-2 overflow-y-auto border-r border-gray-200">
    <Motions draggedElement = {props.draggedElement} motionsData={props.motionsData}/>
    <Events draggedElement = {props.draggedElement}/>
    <Looks draggedElement = {props.draggedElement}/>
    <Controls draggedElement = {props.draggedElement}/>
    </div>
  );
}
