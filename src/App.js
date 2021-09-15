import React, {useState, useEffect} from "react";
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
  const [looksText, setLooksText] = useState('');
  const [looksTime, setLooksTime] = useState(0);
  const [showBlob, setShowBlob] = useState(false);
  const [flagClicked, setFlagClicked] = useState(false);
  const [controlsData, setControlsData] = useState({});
  const [spriteClicked, setSpriteClicked] = useState(false);
  const [showSprite, setShowSprite] = useState(true);

  useEffect(()=> {
    if(document.getElementById("overlay"))
      newSpriteModal ? document.getElementById("overlay").style.display = "block" :  document.getElementById("overlay").style.display = "none";
  },[newSpriteModal])

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

  const looksBlob = (text, timing, show) => {
    setLooksText(text);
    setLooksTime(timing);
    setShowBlob(show);
  }

  const toggleFlagClicked = (value) => {
    setFlagClicked(value);
  }

  const controlData = (values) => {
    setControlsData({...values});
  }
  
  return (
    <div className="pt-6 font-sans bg-blue-100">
      <>
        <div className="flex flex-row h-screen overflow-hidden ">
          <div className="flex flex-row flex-1 h-screen mr-2 overflow-hidden bg-white border-t border-r border-gray-200 rounded-tr-xl">
            <Sidebar
              draggedElement={draggedElement}
              motionsData={motionsData}
              controlData={controlData}
            />{" "}
            <MidArea
              motionData={motionData}
              idname={idname}
              spriteName={spriteName}
              looksBlob = {looksBlob}
             flagClicked = {flagClicked}
             toggleFlagClicked = {toggleFlagClicked}
             controlsData={controlsData}
             spriteClicked = {spriteClicked}
             setSpriteClicked = {setSpriteClicked}
             setShowSprite = {setShowSprite}
            />
          </div>
          <div className="flex flex-row w-1/3 h-screen ml-2 overflow-hidden bg-white border-t border-l border-gray-200 rounded-tl-xl">
            <PreviewArea
              showNewSpriteModal={showNewSpriteModal}
              spriteNames={spriteNames}
              newSpriteModal={newSpriteModal}
              whichSpriteName={whichSpriteName}
              show = {showBlob}
              text = {looksText}
              time = {looksTime}
              toggleFlagClicked = {toggleFlagClicked}
              looksBlob={looksBlob}
              setSpriteClicked = {setSpriteClicked}
              showSprite = {showSprite}
            />
          </div>
        </div>
      </>
      {newSpriteModal && (
        <div id="overlay" className="overlay">
          <NewSprite
          className="flex flex-row h-screen overflow-hidden "
          whichSpriteName={whichSpriteName}
          showNewSpriteModal={showNewSpriteModal}
          showModal={newSpriteModal}
        />
        </div>
        
      )}
    </div>
  );
}
