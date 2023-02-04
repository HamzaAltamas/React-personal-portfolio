
import React from 'react'
import '../css/colorswitcher.css'
import { useDispatch } from 'react-redux'
import { color ,cursorColor as cursor ,colorParticle } from '../Slices/ColorChangingSlice'
import {RiBrushFill} from 'react-icons/ri'
import { useState } from 'react'
import BackToTopButton from './BackToTopButton'

const ColorSwitcherPalette = () => {
    let disp = useDispatch()
    let [colorPaletteShow,setColorPaletteShow] = useState(false)
    let [backToTopButtonShow,setBackToTopButtonShow] = useState(false)

    let changeColorClick = (classname) => {
        localStorage.setItem("colorClass",classname)
       disp(color(classname))
    }
    let cursorColor = (color) =>{
        localStorage.setItem("cursorColor",color)
        disp(cursor(color))
    }
    let particleColor=(particle)=>{
      localStorage.setItem("particleColor",particle)
         disp(colorParticle(particle))
    }
    let paletteShow = () =>{
       setColorPaletteShow((prev)=>!prev)
    }
    let backToTopShow = ()=>{
        window.pageYOffset ==  0 ? setBackToTopButtonShow(false) : setBackToTopButtonShow(true)
    }
    let backToTop = ()=>{
      window.scrollTo({top:0,behavior:"smooth"})
    }

    window.addEventListener("scroll" , backToTopShow)
   

  return (
    <>
      <div className='color-switcher-box' style={{ right:colorPaletteShow?"0":"-150px" }}>
      <BackToTopButton style={{ left: backToTopButtonShow ? "-110px" : '-50px' }} onClick={backToTop}/>
        <div className='paletteShowButton'  onClick={paletteShow}><RiBrushFill/></div>
        <div onClick={() => {changeColorClick("deeppurple"); cursorColor("102, 0, 153"); particleColor("#660099"); }} className='color-circle deeppurple-box'></div>
        <div onClick={() => {changeColorClick("lavender"); cursorColor("155, 155, 253"); particleColor("#9b9bfd"); }} className='color-circle lavender-box'></div>
        <div onClick={() => {changeColorClick("lightpurple"); cursorColor("85, 105, 2550"); particleColor("#5569fa"); }} className='color-circle light-purple-box'></div>
        <div onClick={() => {changeColorClick("brightred"); cursorColor("255, 92, 92"); particleColor("#ff5c5c"); }} className='color-circle bright-red-box'></div>
        <div onClick={() => {changeColorClick("orangered"); cursorColor("255, 69, 0"); particleColor("#ff4500"); }} className='color-circle orange-red-box'></div>
        <div onClick={() => {changeColorClick("goldenyellow"); cursorColor("253, 184, 19"); particleColor("#fdb813"); }} className='color-circle golden-yellow-box'></div>
        <div onClick={() => {changeColorClick("lemonyellow"); cursorColor("204, 255, 0"); particleColor("#ccff00"); }} className='color-circle lemon-yellow-box'></div>
        <div onClick={() => {changeColorClick("forestgreen"); cursorColor("34, 139, 34"); particleColor("#228b22"); }} className='color-circle forest-green-box'></div>
        <div onClick={() => {changeColorClick("limegreen"); cursorColor("50, 205, 50"); particleColor("#32cd32"); }} className='color-circle lime-green-box'></div>
        <div onClick={() => {changeColorClick("sagegreen"); cursorColor("157, 193, 131"); particleColor("#9dc183"); }} className='color-circle sage-green-box'></div>
        <div onClick={() => {changeColorClick("lightgreen"); cursorColor("144, 238, 144"); particleColor("#90ee90"); }} className='color-circle light-green-box'></div>
        <div onClick={() => {changeColorClick("brightgreen"); cursorColor("255, 105, 180"); particleColor("#ff69b4"); }} className='color-circle bright-green-box'></div>
        <div onClick={() => {changeColorClick("darkmagenta"); cursorColor("139, 0, 139"); particleColor("#8b0089"); }} className='color-circle dark-magenta'></div>
        <div onClick={() => {changeColorClick("salmon"); cursorColor("250, 128, 114"); particleColor("#fa8072"); }} className='color-circle salmon-box'></div>
        <div onClick={() => {changeColorClick("golden"); cursorColor("255, 215, 0"); particleColor("#ffd700"); }} className='color-circle golden-box'></div>
        <div onClick={() => {changeColorClick("yellow"); cursorColor("0, 255, 132"); particleColor("#00FF84"); }} className='color-circle yellow-box'></div>
      </div>
    </>
  )
}

export default ColorSwitcherPalette