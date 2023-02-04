import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AnimatedCursor from "react-animated-cursor"
import { useSelector } from "react-redux";


export default function Animatedcursor() {
  let [cursorColor,setCursorColor] = useState("")
  let colorData = useSelector((state)=> state.color.cursorColorValue)

  useEffect(()=>{
  setCursorColor(colorData ? colorData : "85, 105, 255")
  },[colorData])

  return (
    <div className="App">
      <AnimatedCursor 
            innerSize={10}
            outerSize={20}
          color={cursorColor}
            outerAlpha={0.2}
            innerScale={1}
            outerScale={3}
            outerStyle={{
              zIndex: '99999999999999999',
           
            }}
            innerStyle={{
              zIndex: '99999999999999999',
            }}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link',
              '.crad-wrapper',
              '.project-detail-link',
              ".color-circle",
              ".back-to-top-button",
            ]}
      
      />
    </div>
  );
}