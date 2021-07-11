import React, {useState} from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {

  const [idname, setIdname] = useState('');

  const draggedElement = (value) => {
    setIdname(value);
  }

  
  return (
    <div className="pt-6 font-sans bg-blue-100">
      <div className="flex flex-row h-screen overflow-hidden ">
        <div className="flex flex-row flex-1 h-screen mr-2 overflow-hidden bg-white border-t border-r border-gray-200 rounded-tr-xl">
          <Sidebar draggedElement={draggedElement} /> <MidArea idname={idname} />
        </div>
        <div className="flex flex-row w-1/3 h-screen ml-2 overflow-hidden bg-white border-t border-l border-gray-200 rounded-tl-xl">
          <PreviewArea />
        </div>
      </div>
    </div>
  );
}
