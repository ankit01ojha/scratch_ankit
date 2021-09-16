import React,{useState} from 'react';

const Looks = (props) => {
    const [sayValue, setSayValue] = useState('Hello !');
    const [sayValue2, setSayValue2] = useState('Hello');
    const [sayTime, setSayTime] = useState(2);
    const [thinkValue, setThinkValue] = useState('Hmmm !');
    const [thinkValue2, setThinkValue2] = useState('Hmmm');
    const [thinkTime, setThinkTime] = useState(2);
    const [size, setSize] = useState(10);
    const [sizep, setSizep] = useState(100);
    

    const dragStart = (event, idname) => {
        props.draggedElement(idname);
        event.dataTransfer.setData(idname, event.target.id);
      };
    return(
        <>
        <div className="font-bold"> {"Looks"} </div>
        <div id="l1" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-purple-500 rounded cursor-pointer" onDragStart={(e) => {
          dragStart(e, "l1");
        }}
        draggable={true}>
            {"say "}
            <input type="text" id="l1a" className="ml-2 mr-2 text-center text-black rounded-full w-14" value={sayValue} onChange={(evt) => {setSayValue(evt.target.value)}} />
            {"for"}
            <input type="text" id="l1b" className="w-10 ml-2 mr-2 text-center text-black rounded-full" value={sayTime} onChange={(evt) => {setSayTime(evt.target.value)}} />
            {"seconds"}
            
        </div>
        <div id="l2" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-purple-500 rounded cursor-pointer" onDragStart={(e) => {
          dragStart(e, "l2");
        }}
        draggable={true}>
            {"say "}
            <input type="text" id="l2a" className="ml-2 mr-2 text-center text-black rounded-full w-14" value={sayValue2} onChange={(evt) => {setSayValue2(evt.target.value)}} />
            
        </div>
        <div id="l3" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-purple-500 rounded cursor-pointer" onDragStart={(e) => {
          dragStart(e, "l3");
        }}
        draggable={true}>
            {"think "}
            <input type="text" id="l3a" className="ml-2 mr-2 text-center text-black rounded-full w-14" value={thinkValue} onChange={(evt) => {setThinkValue(evt.target.value)}} />
            {"for"}
        
            <input type="text" id="l3b" className="w-10 ml-2 mr-2 text-center text-black rounded-full" value={thinkTime} onChange={(evt) => {setThinkTime(evt.target.value)}} />
            {"seconds"}
           
        </div>
        <div id="l4" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-purple-500 rounded cursor-pointer" onDragStart={(e) => {
          dragStart(e, "l4");
        }}
        draggable={true}>
            {"think "}
            <input type="text" id="l4a" className="ml-2 mr-2 text-center text-black rounded-full w-14" value={thinkValue2} onChange={(evt) => {setThinkValue2(evt.target.value)}} />
        </div>
        <div id="l5" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-purple-500 rounded cursor-pointer" onDragStart={(e) => {
          dragStart(e, "l5");
        }}
        draggable={true}>
            {"switch costume to  "}
            <select className="px-2 mx-2 text-white bg-purple-500 border-2 border-gray-300 rounded">
                <option>costume 1</option>
                <option>costume 2</option>
            </select>
        </div>
        <div id="l6" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-purple-500 rounded cursor-pointer" onDragStart={(e) => {
          dragStart(e, "l6");
        }}
        draggable={true}>
            {"next costume"}
        </div>
        <div id="l7" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-purple-500 rounded cursor-pointer" onDragStart={(e) => {
          dragStart(e, "l7");
        }}
        draggable={true}>
            {"switch backdrop to  "}
            <select className="px-2 mx-2 text-white bg-purple-500 border-2 border-gray-300 rounded">
                <option>backdrop 1</option>
                <option>backdrop 2</option>
            </select>
        </div>
        <div id="l8" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-purple-500 rounded cursor-pointer" onDragStart={(e) => {
          dragStart(e, "l8");
        }}
        draggable={true}>
            {"next backdrop"}
        </div>
        <div id="l9" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-purple-500 rounded cursor-pointer" onDragStart={(e) => {
          dragStart(e, "l9");
        }}
        draggable={true}>
            {"change size by "}
            <input id="l9a" type="text" className="ml-2 mr-2 text-center text-black rounded-full w-14" value={size} onChange={(e) => {setSize(e.target.value)}} />
            
        </div>
        <div id="l10" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-purple-500 rounded cursor-pointer" onDragStart={(e) => {
          dragStart(e, "l10");
        }}
        draggable={true}>
            {"set size to "}
            <input id="l10a" type="text" className="ml-2 mr-2 text-center text-black rounded-full w-14" value={sizep} onChange={(e) => {setSizep(e.target.value)}} />
            {"%"}
        </div>
        <div id="l11" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-purple-500 rounded cursor-pointer" onDragStart={(e) => {
          dragStart(e, "l11");
        }}
        draggable={true}>
            {"change "}
            <select className="px-2 mx-2 text-white bg-purple-500 border-2 border-gray-300 rounded">
                <option>color</option>
                <option>fisheye</option>
            </select>
            {"effect by"}
            <input type="text" className="ml-2 mr-2 text-center text-black rounded-full w-14" value="25" onChange={() => {}} />
        </div>
        <div id="l12" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-purple-500 rounded cursor-pointer" onDragStart={(e) => {
          dragStart(e, "l12");
        }}
        draggable={true}>
            {"set "}
            <select className="px-2 mx-2 text-white bg-purple-500 border-2 border-gray-300 rounded">
                <option>color</option>
                <option>fisheye</option>
            </select>
            {"effect to"}
            <input type="text" className="ml-2 mr-2 text-center text-black rounded-full w-14" value="0" onChange={() => {}} />
        </div>
        <div id="l13" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-purple-500 rounded cursor-pointer" onDragStart={(e) => {
          dragStart(e, "l13");
        }}
        draggable={true}>
            {"clear graphics effects"}
        </div>
        <div id="l14" className="flex flex-row flex-wrap px-2 py-1 my-2 mt-4 text-sm text-white bg-purple-500 rounded cursor-pointer" onDragStart={(e) => {
          dragStart(e, "l14");
        }}
        draggable={true}>
            {"show"}
        </div>
        <div id="l15" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-purple-500 rounded cursor-pointer" onDragStart={(e) => {
          dragStart(e, "l15");
        }}
        draggable={true}>
            {"hide"}
        </div>
        <div id="l16" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-purple-500 rounded cursor-pointer" onDragStart={(e) => {
          dragStart(e, "l16");
        }}
        draggable={true}>
            {"go to "}
            <select className="px-2 mx-2 text-white bg-purple-500 border-2 border-gray-300 rounded">
                <option>front</option>
                <option>back</option>
            </select>
            {"layer"}
        </div>
        <div id="l17" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white bg-purple-500 rounded cursor-pointer" onDragStart={(e) => {
          dragStart(e, "l17");
        }}
        draggable={true}>
            {"go "}
            <select className="px-2 mx-2 text-white bg-purple-500 border-2 border-gray-300 rounded">
                <option>forward</option>
                <option>backward</option>
            </select>
            
            <input type="text" className="ml-2 mr-2 text-center text-black rounded-full w-14" value="1" onChange={() => {}} />
            {"layers"}
        </div>
        <div id="l18" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white" onDragStart={(e) => {
          dragStart(e, "l18");
        }}
        draggable={true}>
            <input type="checkbox"/>
            <div type="button" className="px-2 py-2 mx-2 text-white bg-purple-500 border-0 rounded-full">
            {"costume"}
            <select className="px-2 mx-2 text-white bg-purple-500 border-2 border-gray-300 rounded">
                <option>number</option>
                <option>name</option>
            </select>
            </div>
        </div>
        <div id="l19" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white" onDragStart={(e) => {
          dragStart(e, "l19");
        }}
        draggable={true}>
            <input type="checkbox"/>
            <div type="button" className="px-2 py-2 mx-2 text-white bg-purple-500 border-0 rounded-full">
            {"backdrop"}
            <select className="px-2 mx-2 text-white bg-purple-500 border-2 border-gray-300 rounded">
                <option>number</option>
                <option>name</option>
            </select>
            </div>
        </div>
        <div id="l20" className="flex flex-row flex-wrap px-2 py-1 my-2 text-sm text-white" onDragStart={(e) => {
          dragStart(e, "l20");
        }}
        draggable={true}>
            <input type="checkbox"/>
            <div type="button" className="px-2 py-2 mx-2 text-white bg-purple-500 border-0 rounded-full">
            {"size"}
            </div>
        </div>
        </>
    )
};

export default Looks;