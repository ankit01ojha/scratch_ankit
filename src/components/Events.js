import React, { useState } from "react";
import Icon from "./Icon";

const Events = (props) => {
  const [loudness, setLoudness] = useState("10");

  const dragStart = (event, idname) => {
    props.draggedElement(idname);
    event.dataTransfer.setData(idname, event.target.id);
  };

  return (
    <>
      <div className="font-bold"> {"Events"} </div>
      <div
        id="e1"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-yellow-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "e1");
        }}
        draggable={true}
      >
        {"When "}
        <Icon name="flag" size={15} className="mx-2 text-green-600" />
        {"clicked"}
      </div>
      <div
        id="e2"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-yellow-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "e2");
        }}
        draggable={true}
      >
        {"When"}
        {/* <div type="button" className="px-2 mx-2 text-white border-2 border-gray-300 rounded">
            {"space"}
            </div> */}
        <select className="px-2 mx-2 text-white bg-yellow-500 border-2 border-gray-300 rounded">
          <option>space</option>
          <option>up arrow</option>
        </select>
        {"key pressed"}
      </div>
      <div
        id="e3"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-yellow-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "e3");
        }}
        draggable={true}
      >
        {"When this sprite clicked"}
      </div>
      <div
        id="e4"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-yellow-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "e4");
        }}
        draggable={true}
      >
        {"When backdrop switches to "}
        <select className="px-2 mx-2 text-white bg-yellow-500 border-2 border-gray-300 rounded">
          <option>backdrop 1</option>
        </select>
      </div>
      <div
        id="e5"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-yellow-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "e5");
        }}
        draggable={true}
      >
        {"When"}
        <select className="px-2 mx-2 text-white bg-yellow-500 border-2 border-gray-300 rounded">
          <option>loudness</option>
          <option>timer</option>
        </select>
        {">"}
        <input
          type="text"
          className="w-6 ml-2 mr-2 text-center text-black rounded-full"
          value={loudness}
          onChange={(evt) => {
            setLoudness(evt.target.value);
          }}
        />
      </div>
      <div
        id="e6"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-yellow-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "e6");
        }}
        draggable={true}
      >
        {"When I receive "}
        <select className="px-2 mx-2 text-white bg-yellow-500 border-2 border-gray-300 rounded">
          <option>New message</option>
          <option>message 1</option>
        </select>
      </div>
      <div
        id="e7"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-yellow-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "e7");
        }}
        draggable={true}
      >
        {"Broadcast"}
        <select className="px-2 mx-2 text-white bg-yellow-500 border-2 border-gray-300 rounded-full">
          <option>New message</option>
          <option>message 1</option>
        </select>
      </div>
      <div
        id="e8"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-yellow-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "e8");
        }}
        draggable={true}
      >
        {"Broadcast"}
        <select className="px-2 mx-2 text-white bg-yellow-500 border-2 border-gray-300 rounded-full">
          <option>New message</option>
          <option>message 1</option>
        </select>
        {"and wait"}
      </div>
    </>
  );
};

export default Events;
