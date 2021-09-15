import React, { useState } from "react";
import { useEffect } from "react";



export default function MidArea( props) {

  const [yellowCatSpriteData, setYellowCatSpriteData] = useState({});
  const [blueCatSpriteData, setBlueCatSpriteData] = useState({});
  const [redCatSpriteData, setRedCatSpriteData] = useState({});
  const [deg, setDeg] = useState(0);
  // const [move, setMove] = useState({});
  var degrees=0;
  var counter = 0;
  var element={};
  const sleep = (milliseconds)=> {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  
  useEffect(()=>{
    if(document.getElementById('yellowSprite'))
      setYellowCatSpriteData(document.getElementById('yellowSprite'));
    
    if(document.getElementById('blueSprite'))
    setBlueCatSpriteData(document.getElementById('blueSprite'));

    if(document.getElementById('redSprite'))
    setRedCatSpriteData(document.getElementById('redSprite'));

    // var e = document.getElementById('e2a');
    // console.log(e.options[e.selectedIndex].text);
    // var element = document.getElementById('yellowSprite'); 
    // element.addEventListener('click', clickHandler);

    // var element2 = document.getElementById('flagPreview'); 
    // element2.addEventListener('flagClick', flagClickHandler);

    // var element = document.getElementById('flagButton');
    // element.addEventListener('click', clickHandler);
    
  },[]);
  
  
  
  
  const allowDrop = (event) => {
    event.preventDefault();
  }
  
  const drop = (event) => {
    event.preventDefault();
    var data = event.dataTransfer.getData(props.idname);
    var nodeCopy = document.getElementById(data).cloneNode(true);
    event.target.appendChild(nodeCopy);
  }

  const removeLego = (event) => {
    var data = document.querySelector("#midarea");
    var childToRemove = data.querySelector(`#${event.target.id}`);
    childToRemove.remove();
  }
  
  const animation = (idname) => {
    // console.log(props.motionData['movestep']);
    console.log(idname);
    var tempDeg = deg;
    console.log(props.motionData['turnAnti']);
    if(props.spriteName === 'yellow'){
      var move = document.getElementById( 'yellowSprite' );
      // tempDeg = parseInt(move.style.transform.split('(')[1]);
    }
    if(props.spriteName === 'blue'){
      var move = document.getElementById( 'blueSprite' );
      // tempDeg = parseInt(move.style.transform.split('(')[1]);
    }
    if(props.spriteName === 'red'){
      var move = document.getElementById( 'redSprite' );
      // tempDeg = parseInt(move.style.transform.split('(')[1]);
    }
      
      // catSpriteData.style.animation = animation(idname);
      
      // var move = document.getElementById( 'catSprite' );
      if(idname === 'movestep'){
        move.style.left = ( move.offsetLeft + props.motionData['movestep'] ) + 'px';
        console.log(move.style.left);
      }
      if(idname ===  'turnAnti'){
        tempDeg -=props.motionData['turnAnti'];
        setDeg(tempDeg);
        move.style.transform = "rotate("+tempDeg+"deg)";
        console.log(move.style.transform)
      }
      if(idname ===  'turnClock'){
        tempDeg +=props.motionData['turnClock'];
        setDeg(tempDeg);
        move.style.transform = "rotate("+tempDeg+"deg)";
      }
      if(idname === "glideRandom"){
        move.style.left = (move.offsetLeft + Math.floor(Math.random() * 50)) + 'px';
        move.style.bottom = (move.offsetLeft + Math.floor(Math.random() * 100)) + 'px';
      }
      if(idname === "goToXY"){
        move.style.left = props.motionData['goToX'] +"px";
        move.style.bottom = props.motionData['goToY'] +"px";
      }
      if(idname === "m7"){
        degrees =0;
        move.style.transform = "rotate("+degrees+"deg)";
      }
      if(idname === "m9"){
        move.style.left = ( move.offsetLeft + 10 ) + 'px';
      }
      if(idname === "m10"){
        move.style.left = '-5px';
      }
      if(idname === "m9"){
        move.style.top = '-5px';
      }
        
     
      move.style.animation = "";
      
      if(idname === "l1"){
          props.looksBlob(document.getElementById("l1a").value, document.getElementById("l1b").value, true);
          // sleep(document.getElementById("l1b").value);
          // document.getElementById("yellowBlob").display = "block";
          // setTimeout(function(){
          //   document.getElementById("yellowBlob").display = "none";
          // },1000)
          
       
      }
      if(idname === "l2"){
        props.looksBlob(document.getElementById("l2a").value, 0, true);
      }
      if(idname === "l3"){
        
          props.looksBlob(document.getElementById("l3a").value, document.getElementById("l3b").value, true);
        // sleep(document.getElementById("l3b").value);
        
      }
      if(idname === "l4"){
        props.looksBlob(document.getElementById("l4a").value, 0, true);
      }

      if(idname == 'wait_control'){
        sleep(props.controlsData['wait']*1000);
      }

      if(idname == 'repeat_control'){
        for(var i =0; i<props.controlsData['repeat'];i++){
          callAnimation('repeat_control');
        }
      }

      if(idname === 'l14'){
        move.style.display = 'block';
      }

      if(idname==='l15'){
        move.style.display = 'none';
      }
  }

  const callAnimation = (idname) => {
    var idArr = [];
      var children = document.getElementById("midarea").children;
      for (var i = 0; i < children.length; i++) {
        idArr.push(children[i].id);
      }
      
      if(idname === 'sprite'){
        console.log(idArr);
        idArr.forEach(item => {animation(item)})
      }else{
        var flagIndex = idArr.indexOf(idname);

        if(flagIndex > -1){
        idArr.splice(0, flagIndex+1);
        var ct = 0;
          idArr.forEach(item => {
            var t = setInterval(function(){
              animation(item);
              ct = ct+1;

              if(ct >= idArr.length-1){
                clearInterval(t);
              }
              
            },1000)
            
          })
          

        }
      }
      
      
  }

  useEffect(() => {
    if(props.flagClicked){
      callAnimation("e1")
      
    }
    props.toggleFlagClicked(false);
  },[props.flagClicked])

  useEffect(() => {
    if(props.spriteClicked){
      callAnimation("sprite");
    }
    props.setSpriteClicked(false);
  },[props.spriteClicked])


  //to handle space bar press 
  document.body.onkeyup = function(e){
    if(e.code == 'Space'){
      callAnimation("e2");
    }
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
      className="flex flex-col items-center flex-none w-1/2 h-full p-2 overflow-y-auto"
      onClick={(e) => {
        var idname = e.target.id;
        if(props.spriteName === 'yellow'){
          var move = document.getElementById( 'yellowSprite' );
        }
        if(props.spriteName === 'blue'){
          var move = document.getElementById( 'blueSprite' );
        }
        if(props.spriteName === 'red'){
          var move = document.getElementById( 'redSprite' );
        }
          setTimeout(function(){
            // catSpriteData.style.animation = animation(idname);
            
            // var move = document.getElementById( 'catSprite' );
            if(idname === 'movestep'){
              move.style.left = ( move.offsetLeft + props.motionData['movestep'] ) + 'px';
              console.log(move.style.left);
            }
            if(idname ===  'turnAnti'){
              degrees -=props.motionData['turnAnti'];
              move.style.transform = "rotate("+degrees+"deg)";
            }
            if(idname ===  'turnClock'){
              degrees +=props.motionData['turnClock'];
              move.style.transform = "rotate("+degrees+"deg)";
            }
            if(idname === "glideRandom"){
              move.style.left = (move.offsetLeft + Math.floor(Math.random() * 50)) + 'px';
              move.style.bottom = (move.offsetLeft + Math.floor(Math.random() * 100)) + 'px';
            }
            if(idname === "goToXY"){
              move.style.left = props.motionData['goToX'] +"px";
              move.style.bottom = props.motionData['goToY'] +"px";
            }
            if(idname === "m7"){
              degrees =0;
              move.style.transform = "rotate("+degrees+"deg)";
            }
            if(idname === "m9"){
              move.style.left = ( move.offsetLeft + 10 ) + 'px';
            }
            if(idname === "m10"){
              move.style.left = '-5px';
            }
            if(idname === "m9"){
              move.style.top = '-5px';
            }
            
          },10);
          move.style.animation = "";
          
          if(idname === "l1"){
            props.looksBlob(document.getElementById("l1a").value, document.getElementById("l1b").value, true);
          }
          if(idname === "l2"){
            props.looksBlob(document.getElementById("l2a").value, 0, true);
          }
          if(idname === "l3"){
            props.looksBlob(document.getElementById("l3a").value, document.getElementById("l3b").value, true);
          }
          if(idname === "l4"){
            props.looksBlob(document.getElementById("l4a").value, 0, true);
          }

          if(idname === 'wait_control'){
            sleep(props.controlsData['wait']*1000);
          }

          if(idname === 'repeat_control'){
            counter = 0;
              var t = setInterval(function(){
                callAnimation('repeat_control');
                counter = counter + 1;
                if(counter>=props.controlsData['repeat']){
                  clearInterval(t);
                }
              },100)
              
          }

          if(idname === 'l14'){
            move.style.display = 'block';
          }

          if(idname==='l15'){
            move.style.display = 'none';
          }
      }}
    ></div>
  );
}
