import React from 'react';


const Control = (props) => {

    const dragStart = (event, idname) => {
        props.draggedElement(idname);
        event.dataTransfer.setData(idname, event.target.id);
      };

      return(
          <>
          <div className="font-bold"> {"Controls"} </div>
          </>
      )


};

export default Control;