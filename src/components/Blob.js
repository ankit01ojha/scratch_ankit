import React, {useState, useEffect} from 'react';

const Blob = (props) => {
        const [show, setShow] = useState(props.show);

    // useEffect(()=>{
    //     document.getElementById("yellowBlob").display = "none";
    // },[])

    useEffect(() => {
        let timeId;
        if(props.text.length > 0 && props.time > 0){
            timeId = setTimeout(() => {
                
                props.looksBlob('',0,false);
                setShow(false);
            }, props.time);
        }
        setShow(props.show);
        
        return () => {
            clearTimeout(timeId);
          }
    },[props.text]);

    
    return(
        <>
        {show && (
        <div id="yellowBlob" className="px-5 border-2 border-black border-solid rounded-md ">
            {props.text}
        </div>
        )}
        </>
        
    )
}

export default Blob;