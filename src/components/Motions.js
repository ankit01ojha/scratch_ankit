import React, { useState } from "react";
import Icon from "./Icon";

const Motions = (props) => {
  const [moveStep, setMoveStep] = useState("10");
  const [turnAnti, setTurnAnti] = useState("15");
  const [turnClock, setTurnClock] = useState("15");
  const [goToX, setGoToX] = useState("-5");
  const [goToY, setGoToY] = useState("-5");

  const dragStart = (event, idname) => {
    props.draggedElement(idname);
    event.dataTransfer.setData(idname, event.target.id);
  };

  

  return (
    <>
      <div className="font-bold"> {"Motion"} </div>
      <div
        id="movestep"
        className="flex flex-wrap px-2 py-1 my-2 text-sm text-white bg-blue-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "movestep");
        }}
        draggable={true}
        
      >
        {"Move"}
        <input
          type="text"
          className="w-6 ml-2 mr-2 text-center text-black rounded-full"
          value={moveStep}
          onChange={(evt) => {
            setMoveStep(evt.target.value);
          }}
        />{" "}
        {"steps"}
      </div>

      <div
        id="turnAnti"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-blue-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "turnAnti");
        }}
        draggable={true}
      >
        {" "}
        {"Turn "}
        <Icon name="undo" size={15} className="mx-2 text-white" />
        <input
          type="text"
          className="w-6 ml-2 mr-2 text-center text-black rounded-full"
          value={turnAnti}
          onChange={(evt) => {
            setTurnAnti(evt.target.value);
          }}
        />{" "}
        {"degrees"}
      </div>

      <div
        id="turnClock"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-blue-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "turnClock");
        }}
        draggable={true}
      >
        {" "}
        {"Turn "}
        <Icon name="redo" size={15} className="mx-2 text-white" />
        <input
          type="text"
          className="w-6 ml-2 mr-2 text-center text-black rounded-full"
          value={turnClock}
          onChange={(evt) => {
            setTurnClock(evt.target.value);
          }}
        />{" "}
        {"degrees"}
      </div>

      <div
        id="glideRandom"
        className="flex flex-row flex-wrap px-2 py-1 my-2 mt-6 text-sm text-white bg-blue-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "glideRandom");
        }}
        draggable={true}
      >
        {" "}
        {"go to "}
        <div
          type="button"
          className="px-2 mx-2 text-white bg-blue-800 border-0 rounded-full"
        >
          {" "}
          {"random position"}
        </div>
      </div>
      <div
        id="goToXY"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-blue-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "goToXY");
        }}
        draggable={true}
      >
        {" "}
        {"go to x:"}
        <input
          type="text"
          className="w-6 ml-2 mr-2 text-center text-black rounded-full"
          value={goToX}
          onChange={(evt) => {
            setGoToX(evt.target.value);
          }}
        />
        {"y:"}
        <input
          type="text"
          id="goToY"
          className="w-6 ml-2 mr-2 text-center text-black rounded-full"
          value={goToY}
          onChange={(evt) => {
            setGoToY(evt.target.value);
          }}
        />
      </div>
      <div
        id="glide1sec"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-blue-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "glide1sec");
        }}
        draggable={true}
      >
        {" "}
        {"glide "}
        <input
          type="text"
          className="w-6 ml-2 mr-2 text-center text-black rounded-full"
          value="1"
          onChange={() => {}}
        />{" "}
        {"secs to"}
        <div
          type="button"
          className="px-2 mx-2 text-white bg-blue-800 border-0 rounded-full"
        >
          {" "}
          {"random position"}
        </div>
      </div>
      <div
        id="m6"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-blue-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "m6");
        }}
        draggable={true}
      >
        {" "}
        {"glide "}
        <input
          type="text"
          className="w-6 ml-2 mr-2 text-center text-black rounded-full"
          value="1"
          onChange={() => {}}
        />
        {"secs to x:"}
        <input
          type="text"
          className="w-6 ml-2 mr-2 text-center text-black rounded-full"
          value="-5"
          onChange={() => {}}
        />
        {"y:"}
        <input
          type="text"
          className="w-6 ml-2 mr-2 text-center text-black rounded-full"
          value="-5"
          onChange={() => {}}
        />
      </div>
      <div
        id="m7"
        className="flex flex-row flex-wrap px-2 py-1 my-2 mt-6 text-sm text-white bg-blue-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "m7");
        }}
        draggable={true}
      >
        {" "}
        {"point in direction "}
        <input
          type="text"
          className="w-8 ml-2 mr-2 text-center text-black rounded-full"
          value="90"
          onChange={() => {}}
        />
      </div>
      <div
        id="m8"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-blue-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "m8");
        }}
        draggable={true}
      >
        {" "}
        {"point towards "}
        <div
          type="button"
          className="px-2 mx-2 text-white bg-blue-800 border-0 rounded-full"
        >
          {" "}
          {"mouse-pointer"}
        </div>
      </div>
      <div
        id="m9"
        className="flex flex-row flex-wrap px-2 py-1 my-2 mt-6 text-sm text-white bg-blue-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "m9");
        }}
        draggable={true}
      >
        {" "}
        {"change x by "}
        <input
          type="text"
          className="w-8 ml-2 mr-2 text-center text-black rounded-full"
          value="10"
          onChange={() => {}}
        />
      </div>
      <div
        id="m10"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-blue-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "m10");
        }}
        draggable={true}
      >
        {" "}
        {"set x to "}
        <input
          type="text"
          className="w-8 ml-2 mr-2 text-center text-black rounded-full"
          value="-5"
          onChange={() => {}}
        />
      </div>
      <div
        id="m11"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-blue-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "m11");
        }}
        draggable={true}
      >
        {" "}
        {"change y by "}
        <input
          type="text"
          className="w-8 ml-2 mr-2 text-center text-black rounded-full"
          value="10"
          onChange={() => {}}
        />
      </div>
      <div
        id="m12"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-blue-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "12");
        }}
        draggable={true}
      >
        {" "}
        {"set y to "}
        <input
          type="text"
          className="w-8 ml-2 mr-2 text-center text-black rounded-full"
          value="-5"
          onChange={() => {}}
        />
      </div>
      <div
        id="m13"
        className="flex flex-row flex-wrap px-2 py-1 my-2 mt-6 text-sm text-white bg-blue-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "m13");
        }}
        draggable={true}
      >
        {" "}
        {"if on edge, bounce"}
      </div>
      <div
        id="m14"
        className="flex flex-row flex-wrap px-2 py-1 my-2 mt-6 text-sm text-white bg-blue-500 rounded cursor-pointer"
        onDragStart={(e) => {
          dragStart(e, "m14");
        }}
        draggable={true}
      >
        {" "}
        {"set rotation style  "}
        <div
          type="button"
          className="px-2 mx-2 text-white bg-blue-800 border-0 rounded"
        >
          {" "}
          {"left-right"}
        </div>
      </div>
      <div
        id="m15"
        className="flex flex-row flex-wrap px-2 py-1 my-2 mt-6 text-sm text-white"
        onDragStart={(e) => {
          dragStart(e, "m15");
        }}
        draggable={true}
      >
        <input type="checkbox" />
        <div
          type="button"
          className="px-2 py-2 mx-2 text-white bg-blue-500 border-0 rounded-full"
        >
          {" "}
          {"x position"}
        </div>
      </div>
      <div
        id="m16"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white"
        onDragStart={(e) => {
          dragStart(e, "m16");
        }}
        draggable={true}
      >
        <input type="checkbox" />
        <div
          type="button"
          className="px-2 py-2 mx-2 text-white bg-blue-500 border-0 rounded-full"
        >
          {" "}
          {"y position"}
        </div>
      </div>
      <div
        id="m17"
        className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white"
        onDragStart={(e) => {
          dragStart(e, "m17");
        }}
        draggable={true}
      >
        <input type="checkbox" />
        <div
          type="button"
          className="px-2 py-2 mx-2 text-white bg-blue-500 border-0 rounded-full"
        >
          {" "}
          {"direction"}
        </div>
      </div>
    </>
  );
};

export default Motions;
