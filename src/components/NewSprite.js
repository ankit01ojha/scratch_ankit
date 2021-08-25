import React, { useState} from 'react';
import CatSprite from './CatSprite';
import CatSpriteBlue from "./CatSpriteBlue";
import CatSpriteRed from "./CatSpriteRed";


const NewSprite = (props) => {
    // const [spriteName, setSpriteName] = useState('');
    
    return (
      <>
        <nav className="flex flex-wrap items-center justify-between p-6 bg-blue-500">
          <div className="flex items-center flex-shrink-0 mr-6 text-white">
            <button
              className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:text-black-500 lg:mt-0"
              onClick={() => {
                props.showNewSpriteModal(false)
              }}
            >
              Back
            </button>
          </div>
        </nav>

        <div className="container grid grid-cols-3 gap-2 mx-auto">
          <div className="items-center mt-5 mb-5 border-2 border-white rounded cursor-pointer p-28 hover:border-gray-500" onClick={() => {props.whichSpriteName('yellow');  props.showNewSpriteModal(false);}}>
            <CatSprite />
          </div>
          <div className="items-center w-full mt-5 mb-5 border-2 border-white rounded cursor-pointer hover:border-gray-500 p-28 "  onClick={() => {props.whichSpriteName('blue'); props.showNewSpriteModal(false)}}>
            <CatSpriteBlue />
          </div>
          <div className="items-center w-full mt-5 mb-5 border-2 border-white rounded cursor-pointer hover:border-gray-500 p-28"  onClick={() => {props.whichSpriteName('red'); props.showNewSpriteModal(false)}}>
            <CatSpriteRed />
          </div>
        </div>
      </>
    );
}

export default NewSprite;