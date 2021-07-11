import React from "react";



export default function MidArea( props) {

  const allowDrop = (event) => {
    event.preventDefault();
  }
  
  const drop = (event) => {
    event.preventDefault();
    console.log(props);
    var data = event.dataTransfer.getData(props.idname);
    console.log(document.getElementById(data));
    event.target.appendChild(document.getElementById(data));
  }
  
  return <div id="midarea" onDragOver={(e) => {allowDrop(e)}} onDrop={(e) => {drop(e)}} className="flex-1 h-full overflow-auto"> </div>;
}
