import React, { useState } from "react";
import CatSprite from "./CatSprite";
import CatSpriteBlue from "./CatSpriteBlue";
import CatSpriteRed from "./CatSpriteRed";

const PreviewArea = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  
  const whichSprite = (spriteName) => {
    switch(spriteName){
      case 'yellow' :  return <CatSprite/> ;
      case 'blue' : return <CatSpriteBlue/>;
      case 'red' : return <CatSpriteRed/>;
    }    
  }

  const whichClassName = (spriteName) => {
    console.log(spriteName + "Sprite");
    switch(spriteName){
      case 'yellow' : return "yellowSpriteAnimation" ;
      case 'blue' : return "blueSpriteAnimation";
      case 'red' : return "redSpriteAnimation" ;
    } 
  }
  
  return (
    <>
      <div className="absolute flex-none w-1/3 h-full p-2 overflow-hidden">
          {/* { whichSprite(props.spriteName)} */}
          {/* {sprites.map((items,key) => {return <div key={key}>{items}</div>})} */}
          {props.spriteNames.map((item, key) => {
            return <div id={item + "Sprite"} className={whichClassName(item)} onClick={() => {props.whichSpriteName(item)}} key={key}>{whichSprite(item)}</div>
          })}
        
        
        <button
          onClick={() => {
            showMenu ? setShowMenu(false) : setShowMenu(true);
             props.showNewSpriteModal(true) ;
          }}
          className="absolute bottom-0 right-0 w-16 h-16 transition duration-200 ease-in bg-blue-500 rounded-full shadow z-2 hover:bg-green-500 active:shadow-lg mouse focus:outline-none"
        >
          <svg
            viewBox="0 0 20 20"
            enableBackground="new 0 0 20 20"
            className="inline-block w-6 h-6"
          >
            <path
              fill="#FFFFFF"
              d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
            />
          </svg>
          {showMenu && (
            <div className="absolute w-10 min-w-0 mb-4 ml-3 overflow-hidden bg-blue-500 rounded-full bottom-10">
              <div  className="relative z-0 px-1 hover:bg-green-500 active:shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />{" "}
                  <polyline points="7 9 12 4 17 9" />{" "}
                  <line x1="12" y1="4" x2="12" y2="16" />
                </svg>
                
              </div>
              
              <div className="px-1 hover:bg-green-500 active:shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <div  className="px-1 hover:bg-green-500 active:shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />{" "}
                  <path d="M21 3a16 16 0 0 0 -12.8 10.2" />{" "}
                  <path d="M21 3a16 16 0 0 1 -10.2 12.8" />{" "}
                  <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
                </svg>
              </div>
              
              <div className="relative z-0 px-1 hover:bg-green-500 active:shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>{" "}
              </div>
            </div>
          )}
        </button>
      </div>
    </>
  );
}

export default PreviewArea;
