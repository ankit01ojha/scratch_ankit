import React, {useState} from 'react';


const Control = (props) => {

    const [wait, setWait] = useState("1");
    const [repeat, setRepeat] = useState("10");

    const dragStart = (event, idname) => {
        props.draggedElement(idname);
        event.dataTransfer.setData(idname, event.target.id);
      };

      return (
        <>
          <div className="font-bold"> {"Control"} </div>
          <div
            id="wait_control"
            className="flex flex-wrap px-2 py-1 my-2 text-sm text-white bg-yellow-500 rounded cursor-pointer"
            onDragStart={(e) => {
              dragStart(e, "wait_control");
            }}
            draggable={true}
          >
            {"wait"}
            <input
              type="text"
              className="w-6 ml-2 mr-2 text-center text-black rounded-full"
              value={wait}
              onChange={(evt) => {
                setWait(evt.target.value);
              }}
            />{" "}
            {"steps"}
          </div>
          <div
            id="repeat_control"
            className="flex flex-wrap px-2 py-1 my-2 text-sm text-white bg-yellow-500 rounded cursor-pointer"
            onDragStart={(e) => {
              dragStart(e, "repeat_control");
            }}
            draggable={true}
          >
            {"repeat"}
            <input
              type="text"
              className="w-6 ml-2 mr-2 text-center text-black rounded-full"
              value={repeat}
              onChange={(evt) => {
                setRepeat(evt.target.value);
              }}
            />
          </div>
          <div
            id="repeat_forever"
            className="flex flex-wrap px-2 py-1 my-2 text-sm text-white bg-yellow-500 rounded cursor-pointer"
            onDragStart={(e) => {
              dragStart(e, "repeat_forever");
            }}
            draggable={true}
          >
            {"forever"}
          </div>
          <div
            id="repeat_wait_until"
            className="flex flex-wrap px-2 py-1 my-2 text-sm text-white bg-yellow-500 rounded cursor-pointer"
            onDragStart={(e) => {
              dragStart(e, "repeat_wait_until");
            }}
            draggable={true}
          >
            {"forever"}
          </div>
          <div
            id="control_stopAll"
            className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-yellow-500 rounded cursor-pointer"
            onDragStart={(e) => {
              dragStart(e, "control_stopAll");
            }}
            draggable={true}
          >
            {"stop "}
            <select className="px-2 mx-2 text-white bg-yellow-400 border-2 border-gray-300 rounded">
              <option>all</option>
              <option>this script</option>
            </select>
          </div>
          <div
            id="repeat_when_start"
            className="flex flex-wrap px-2 py-1 my-2 text-sm text-white bg-yellow-500 rounded cursor-pointer"
            onDragStart={(e) => {
              dragStart(e, "repeat_when_start");
            }}
            draggable={true}
          >
            {"when i start as a clone"}
          </div>
          <div
            id="control_create_clone"
            className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-yellow-500 rounded cursor-pointer"
            onDragStart={(e) => {
              dragStart(e, "control_create_clone");
            }}
            draggable={true}
          >
            {"create clone of "}
            <select className="px-2 mx-2 text-white bg-yellow-400 border-2 border-gray-300 rounded">
              <option>myself</option>
            </select>
          </div>
          <div
            id="repeat_delete_clone"
            className="flex flex-wrap px-2 py-1 my-2 text-sm text-white bg-yellow-500 rounded cursor-pointer"
            onDragStart={(e) => {
              dragStart(e, "repeat_delete_clone");
            }}
            draggable={true}
          >
            {"delete this clone"}
          </div>
        </>
      );


};

export default Control;