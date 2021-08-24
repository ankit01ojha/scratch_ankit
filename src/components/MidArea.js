import React, { useState } from "react";
import { useEffect } from "react";



export default function MidArea( props) {

  const [catSpriteData, setCatSpriteData] = useState({});

  useEffect(()=>{
    if(document.getElementById('catSprite'))
      setCatSpriteData(document.getElementById('catSprite'));
    
  },[]);

  const allowDrop = (event) => {
    event.preventDefault();
  }
  
  const drop = (event) => {
    event.preventDefault();
    // console.log(props);
    var data = event.dataTransfer.getData(props.idname);
    // console.log(document.getElementById(data));
    var nodeCopy = document.getElementById(data).cloneNode(true);
    event.target.appendChild(nodeCopy);
  }

  const animation = (idname) => {
    switch(idname){
      case 'movestep': return "moveForward 1s linear forwards";
      case 'turnAnti': return "turnAnti 1s linear forwards";
      case 'turnClock': return "animate-turnClock";
    }
  }

  
  return <div id="midarea"
    onDragOver={(e) => {allowDrop(e)}} 
    onDrop={(e) => {drop(e)}} 
    className="flex flex-col items-center flex-none w-1/3 h-full p-2 overflow-y-auto"
    onClick={(e) => {
      catSpriteData.style.animation = "moveForward 1s linear forwards,turnAnti 1s linear forwards";
                    console.log(catSpriteData.style.animation);
    }
  }
    >
     </div>;
}
