import React from "react";
import Events from './Events';
import Motions from './Motions';
import Looks from './Looks';

export default function Sidebar(props) {
  
  return (
    <div className="flex flex-col items-start flex-none w-1/3 h-full p-2 overflow-y-auto border-r border-gray-200">
    <Motions draggedElement = {props.draggedElement}/>
    <Events draggedElement = {props.draggedElement}/>
    <Looks draggedElement = {props.draggedElement}/>
    </div>
  );
}
