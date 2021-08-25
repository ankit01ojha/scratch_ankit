import React, { useState } from "react";
import { useEffect } from "react";



export default function MidArea( props) {

  const [catSpriteData, setCatSpriteData] = useState({});
  // const [move, setMove] = useState({});
  var degrees=0;

  useEffect(()=>{
    if(document.getElementById('catSprite'))
      setCatSpriteData(document.getElementById('catSprite'));
    // setMove();
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
      case 'turnAnti': return "turnAnti 1s linear forwards ";
      case 'turnClock': return "turnClock 1s linear forwards";
    }
  }

  const removeLego = (event) => {
    var data = document.querySelector("#midarea");
    var childToRemove = data.querySelector(`#${event.target.id}`);
    childToRemove.remove();
  }

  
  
  return (
    <div
      id="midarea"
      onDragOver={(e) => {
        allowDrop(e);
      }}
      onDrop={(e) => {
        drop(e);
      }}
      onDragEnd={(e) => {
        removeLego(e);
      }}
      
      draggable={true}
      className="flex flex-col items-center flex-none w-2/3 h-full p-2 overflow-y-auto"
      onClick={(e) => {
        catSpriteData.style.animation = "";
          setTimeout(function(){
            // catSpriteData.style.animation = animation(e.target.id);
            var move = document.getElementById( 'catSprite' );
            if(e.target.id === 'movestep'){
              move.style.left = ( move.offsetLeft + 20 ) + 'px';
            }
            if(e.target.id ===  'turnAnti'){
              degrees -=15;
              move.style.transform = "rotate("+degrees+"deg)";
            }
            if(e.target.id ===  'turnClock'){
              degrees +=15;
              move.style.transform = "rotate("+degrees+"deg)";
            }
            
          },10);
          
          
      }}
    ></div>
  );
}
