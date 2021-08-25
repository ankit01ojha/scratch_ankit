import React, {useState} from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import NewSprite from "./components/NewSprite";

export default function App() {

  const [idname, setIdname] = useState('');
  const [newSpriteModal, setNewSpriteModal] = useState(false);
  const [spriteName, setSpriteName] = useState('yellow');
  const [motionData, setMotionData] = useState({});
  const [spriteNames, setSpriteNames] = useState(['yellow']);

  const draggedElement = (value) => {
    setIdname(value);
  }

  const showNewSpriteModal = (showModal) => {
    showModal ? setNewSpriteModal(true): setNewSpriteModal(false);
  }

  const whichSpriteName = (spriteName) => {
    setSpriteName(spriteName);
    spriteNames.indexOf(spriteName) === -1 ? spriteNames.push(spriteName) : '';
  }

  const motionsData = (values) => {
    setMotionData({...values});
  }
  
  return (
    <div className="pt-6 font-sans bg-blue-100">
      
        {!newSpriteModal ? (
          <>
          <div className="flex flex-row h-screen overflow-hidden ">
            <div className="flex flex-row flex-1 h-screen mr-2 overflow-hidden bg-white border-t border-r border-gray-200 rounded-tr-xl">
              <Sidebar draggedElement={draggedElement} motionsData={motionsData} />{" "}
              <MidArea motionData={motionData} idname={idname} spriteName={spriteName}  />
            </div>
            <div className="flex flex-row w-1/3 h-screen ml-2 overflow-hidden bg-white border-t border-l border-gray-200 rounded-tl-xl">
              <PreviewArea showNewSpriteModal={showNewSpriteModal} spriteNames={spriteNames} newSpriteModal={newSpriteModal} whichSpriteName={whichSpriteName}  />
            </div>
          </div>
          </>
        ) : (
          <NewSprite  className="flex flex-row h-screen overflow-hidden " whichSpriteName={whichSpriteName} showNewSpriteModal={showNewSpriteModal} showModal={newSpriteModal} />
        )}
      
    </div>
  );
}
