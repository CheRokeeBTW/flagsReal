import './App.css';
import { useState, useEffect, useRef } from 'react';
import flags from './flags.js'
import Effect from "./fireworks.js";
import EffectWrong from "./newEff.js";
import Hint from './hintClass.js'
import $ from './jquery'
import dial from './dial-removebg-preview.png'
import sad from './images/nerdSad.png';
import win from './images/nerdHappy.png';
import WrongAudio from './audio.js'
import CorrectAudio from './correctAudio.js';
import soundBackground from './images/background.mp3'

 
let audio = new Audio(soundBackground)

function App() {

  function background() {
      return audio.play()
}

function backgroundStop(){
  return audio.pause()
}

  let [count,setCount] = useState(0)
  const [toggle,setToggle] = useState(true)
  const [toggleAnswer2, setAnswer2] = useState(false)
  const [imageSrc, setImageSrc] = useState(flags.image1);
  const [toggleAnswer3, setAnswer3] = useState(false)
  const [toggleAnswer4, setAnswer4] = useState(false)
  const [toggleAnswer5, setAnswer5] = useState(false)
  const [toggleAnswer6, setAnswer6] = useState(false)
  const [toggleAnswer7, setAnswer7] = useState(false)
  const [toggleAnswer8, setAnswer8] = useState(false)
  const [toggleAnswer9, setAnswer9] = useState(false)
  const [toggleAnswer10, setAnswer10] = useState(false)
  const [toggleAnswer11, setAnswer11] = useState(false)
  const [toggleAnswer12, setAnswer12] = useState(false)
  const [toggleAnswer13, setAnswer13] = useState(false)
  const [toggleAnswer14, setAnswer14] = useState(false)

  function increaseCount(){
    return setCount(count + 1)
  }
  function hideElement(){
    return setToggle(!toggle)
  }
  function unhideElement(){
    return setAnswer2(!toggleAnswer2)
  }
  function changeImg(){
    setImageSrc(flags.image2)
  }
  function unhideArgentina(){
    return setAnswer3(!toggleAnswer3)
  }
  function unhideUganda(){
    return setAnswer4(!toggleAnswer4)
  }
  function unhideLatvia(){
    return setAnswer5(!toggleAnswer5)
  }
  function unhideEth(){
    return setAnswer6(!toggleAnswer6)
  }
  function unhideMagascar(){
    return setAnswer7(!toggleAnswer7)
  }
  function unhideGreece(){
    return setAnswer8(!toggleAnswer8)
  }
  function unhideRwanda(){
    return setAnswer9(!toggleAnswer9)
  }
  function unhideSingapore(){
    return setAnswer10(!toggleAnswer10)
  }
  function unhideNauru(){
    return setAnswer11(!toggleAnswer11)
  }
  function unhideMicronesia(){
    return setAnswer12(!toggleAnswer12)
  }
  function unhideKyrgyzstan(){
    return setAnswer13(!toggleAnswer13)
  }
  function unhideMonaco(){
    return setAnswer14(!toggleAnswer14)
  }
  function showMusic(){
    if(!audio.paused){
      $(document.getElementById("music2")).show()
      }
      else {
      $(document.getElementById("music")).show()
    }
  }
  function showHint(){
    return ($(document.getElementById("hintC")).toggle(),
    $(document.getElementById("scoreB")).hide(),
    $(document.getElementById("buttonHint")).hide(),
    $(document.getElementById("music")).hide(),
    $(document.getElementById("music2")).hide()
  )
  }
  function showScore(){
    return $(document.getElementById("scoreB")).show()
  }
  function hideHint(){
    return $(document.getElementById("hintC")).hide()
  }
  function hintRussia(){
    return document.getElementById("text").innerHTML = "This is the largest country in the world"
  }
  function hintSA(){
    return document.getElementById("text").innerHTML = "It is the southernmost country on some continent"
  }
  function hintArg(){
    return document.getElementById("text").innerHTML = "Famous soccer player 'L. Messi' is from this country"
  }
  function hintUganda(){
    return document.getElementById("text").innerHTML = "Twitch streamer 'Forsen' claims that he's from this country"
  }
  function hintLatvia(){
    return document.getElementById("text").innerHTML = "This country has one of the oldest eu languages"
  }
  function hintEth(){
    return document.getElementById("text").innerHTML = "This country runs on its own time"
  }
  function hintMadagascar(){
    return document.getElementById("text").innerHTML = "It is the fourth largest island in the world"
  }
  function hintGreece(){
    return document.getElementById("text").innerHTML = "This country located in Europe"
  }
  function hintRwanda(){
    return document.getElementById("text").innerHTML = "This country has life expectancy of 50 years"
  }
  function hintSingapore(){
    return document.getElementById("text").innerHTML = "Trees cover almost half of this country"
  }
  function hintNauru(){
    return document.getElementById("text").innerHTML = "It is the flattest country on earth"
  }
  function hintMicronesia(){
    return document.getElementById("text").innerHTML = "It is home to the world's largest crabs"
  }
  function hintKyrgyzstan(){
    return document.getElementById("text").innerHTML = "Over 90% of country is covered in mountains"
  }
  function hintMonaco(){
    return document.getElementById("text").innerHTML = "It is world's 2nd smallest country"
  }
  function hideMusic(){
    return ($(document.getElementById("music")).toggle(),
    $(document.getElementById("music2")).toggle()
  )
  }
  
  return (
    <div className = "country">
      <button id = "music" onClick = {() =>{background(), hideMusic()}}>Click me to play music</button>
      <button id = "music2" onClick = {() =>{backgroundStop(), hideMusic()}}>Click me to pause music</button>
      <header className="country-header">
        <img src={imageSrc} className="country-logo" alt="logo" />
        <p>
          What country is that?
        </p>
        <div id ="hintC">
        <img id = "dial" src = {dial} />
        <h>Score: {count}</h>
        <Hint />
        <p id = "text">This is the hint</p>
        </div>
        {toggle && (
        <div className = "answer">
        <p1 onClick = {() =>{increaseCount(), hideElement(), unhideElement(), changeImg(), Effect(), hideHint(), showScore(), CorrectAudio(), showMusic()}}>Russia</p1>
        <p2 onClick = {() =>{EffectWrong(), hideHint(),hideElement(), unhideElement(), changeImg(), showScore(), WrongAudio(), showMusic()}}>Georgia</p2>
        <p3 onClick = {() =>{EffectWrong(), hideHint(),hideElement(), unhideElement(), changeImg(), showScore(), WrongAudio(), showMusic()}}>USA</p3>
        <p4 onClick = {() =>{EffectWrong(), hideHint(),hideElement(), unhideElement(), changeImg(), showScore(), WrongAudio(), showMusic()}}>Uganda</p4>
        <div className = "hintButton">
          <button onClick = {() =>{showHint(), hintRussia()}}>
            Take a hint
          </button>
        </div>
        </div>
      )}
      {toggleAnswer2 ? 
        <div className = "answer">
        <p1 onClick = {() =>{EffectWrong(), hideHint(), unhideElement(),unhideArgentina(), setImageSrc(flags.argentina), showScore(), WrongAudio(), showMusic()}}>Mongolia</p1>
        <p2 onClick = {() =>{EffectWrong(), hideHint(), unhideElement(),unhideArgentina(), setImageSrc(flags.argentina), showScore(), WrongAudio(), showMusic()}}>France</p2>
        <p3 onClick = {() =>{increaseCount(), unhideElement(),unhideArgentina(), Effect(), setImageSrc(flags.argentina), hideHint(), CorrectAudio(), showMusic()}}>South Africa</p3>
        <p4 onClick = {() =>{EffectWrong(), hideHint(), unhideElement(),unhideArgentina(), setImageSrc(flags.argentina), showScore(), WrongAudio(), showMusic()}}>Romania</p4>
        <div className = "hintButton">
          <button onClick = {() =>{showHint(), hintSA()}}>
            Take a hint
          </button>
        </div>
          </div>
          :
          <></>
           }
            {toggleAnswer3 ? 
        <div className = "answer">
        <p1 onClick = {() =>{EffectWrong(), hideHint(), unhideArgentina(), unhideUganda(), setImageSrc(flags.uganda), showScore(), WrongAudio(), showMusic()}}>UK</p1>
        <p2 onClick = {() =>{increaseCount(), Effect(), unhideArgentina(), unhideUganda(), setImageSrc(flags.uganda), hideHint(), showScore(), CorrectAudio(), showMusic()}}>Argentina</p2>
        <p3 onClick = {() =>{EffectWrong(), hideHint(), unhideArgentina(), unhideUganda(), setImageSrc(flags.uganda), showScore(), WrongAudio(), showMusic()}}>Peru</p3>
        <p4 onClick = {() =>{EffectWrong(), hideHint(), unhideArgentina(), unhideUganda(), setImageSrc(flags.uganda), showScore(), WrongAudio(), showMusic()}}>China</p4>
        <div className = "hintButton">
          <button onClick = {() =>{showHint(), hintArg()}}>
            Take a hint
          </button>
        </div>
          </div>
          :
          <></>
           }
            {toggleAnswer4 ? 
        <div className = "answer">
        <p1 onClick = {() =>{increaseCount(), Effect(), unhideUganda(),unhideLatvia(), setImageSrc(flags.latvia), hideHint(), showScore(), CorrectAudio(), showMusic()}}>Uganda</p1>
        <p2 onClick = {() =>{EffectWrong(), hideHint(), unhideUganda(),unhideLatvia(), setImageSrc(flags.latvia), showScore(), WrongAudio(), showMusic()}}>Niger</p2>
        <p3 onClick = {() =>{EffectWrong(), hideHint(), unhideUganda(),unhideLatvia(), setImageSrc(flags.latvia), showScore(), WrongAudio(), showMusic()}}>Tuvalu</p3>
        <p4 onClick = {() =>{EffectWrong(), hideHint(), unhideUganda(),unhideLatvia(), setImageSrc(flags.latvia), showScore(), WrongAudio(), showMusic()}}>Nauru</p4>
        <div className = "hintButton">
          <button onClick = {() =>{showHint(), hintUganda()}}>
            Take a hint
          </button>
        </div>
          </div>
          :
          <></>
           }
           {toggleAnswer5 ? 
        <div className = "answer">
        <p1 onClick = {() =>{EffectWrong(),unhideLatvia(), unhideEth(), hideHint(), setImageSrc(flags.ethiopia), showScore(), WrongAudio(), showMusic()}}>Lithuania</p1>
        <p2 onClick = {() =>{increaseCount(), Effect(), unhideLatvia(), unhideEth(), hideHint(), setImageSrc(flags.ethiopia), showScore(), CorrectAudio(), showMusic()}}>Latvia</p2>
        <p3 onClick = {() =>{EffectWrong(),unhideLatvia(), unhideEth(), hideHint(), setImageSrc(flags.ethiopia), showScore(), WrongAudio(), showMusic()}}>Ukraine</p3>
        <p4 onClick = {() =>{EffectWrong(),unhideLatvia(), unhideEth(), hideHint(), setImageSrc(flags.ethiopia), showScore(), WrongAudio(), showMusic()}}>Peru</p4>
        <div className = "hintButton">
          <button onClick = {() =>{showHint(), hintLatvia()}}>
            Take a hint
          </button>
        </div>
          </div>
          :
          <></>
           }
           {toggleAnswer6 ? 
        <div className = "answer">
        <p1 onClick = {() =>{EffectWrong(),unhideEth(), unhideMagascar(), hideHint(),setImageSrc(flags.madagascar), showScore(), WrongAudio(), showMusic()}}>Iran</p1>
        <p2 onClick = {() =>{EffectWrong(),unhideEth(), unhideMagascar(), hideHint(),setImageSrc(flags.madagascar), showScore(), WrongAudio(), showMusic()}}>Belarus</p2>
        <p3 onClick = {() =>{EffectWrong(),unhideEth(), unhideMagascar(), hideHint(),setImageSrc(flags.madagascar), showScore(), WrongAudio(), showMusic()}}>Afghanistan</p3>
        <p4  onClick = {() =>{increaseCount(), Effect(), unhideEth(), unhideMagascar(), hideHint(),setImageSrc(flags.madagascar), showScore(), CorrectAudio(), showMusic()}}>Ethiopia</p4>
        <div className = "hintButton">
          <button onClick = {() =>{showHint(), hintEth()}}>
            Take a hint
          </button>
        </div>
          </div>
          :
          <></>
           }
           {toggleAnswer7 ? 
        <div className = "answer">
        <p1 onClick = {() =>{EffectWrong(),unhideGreece(),hideHint(), unhideMagascar(), setImageSrc(flags.greece), showScore(), WrongAudio(), showMusic()}}>Bangladesh</p1>
        <p2 onClick = {() =>{EffectWrong(),unhideGreece(),hideHint(), unhideMagascar(), setImageSrc(flags.greece), showScore(), WrongAudio(), showMusic()}}>Cuba</p2>
        <p3 onClick = {() =>{increaseCount(), Effect(), unhideGreece(),hideHint(), unhideMagascar(), setImageSrc(flags.greece), showScore(), CorrectAudio(), showMusic()}}>Madagascar</p3>
        <p4 onClick = {() =>{EffectWrong(),unhideGreece(),hideHint(), unhideMagascar(), setImageSrc(flags.greece), showScore(), WrongAudio(), showMusic()}}>Haiti</p4>
        <div className = "hintButton">
          <button onClick = {() =>{showHint(), hintMadagascar()}}>
            Take a hint
          </button>
        </div>
          </div>
          :
          <></>
           }
           {toggleAnswer8 ? 
        <div className = "answer">
        <p1 onClick = {() =>{EffectWrong(),unhideGreece(), hideHint(),unhideRwanda(), setImageSrc(flags.rwanda), showScore(), WrongAudio(), showMusic()}}>Pakistan</p1>
        <p2 onClick = {() =>{EffectWrong(),unhideGreece(), hideHint(),unhideRwanda(), setImageSrc(flags.rwanda), showScore(), WrongAudio(), showMusic()}}>Canada</p2>
        <p3 onClick = {() =>{increaseCount(), Effect(), unhideGreece(), hideHint(),unhideRwanda(), setImageSrc(flags.rwanda), showScore(), CorrectAudio(), showMusic()}}>Greece</p3>
        <p4 onClick = {() =>{EffectWrong(),unhideGreece(), hideHint(),unhideRwanda(), setImageSrc(flags.rwanda), showScore(), WrongAudio(), showMusic()}}>Sudan</p4>
        <div className = "hintButton">
          <button onClick = {() =>{showHint(), hintGreece()}}>
            Take a hint
          </button>
        </div>
          </div>
          :
          <></>
           }
            {toggleAnswer9 ? 
        <div className = "answer">
        <p1 onClick = {() =>{increaseCount(), Effect(), hideHint(),unhideSingapore(), unhideRwanda(), setImageSrc(flags.singapore), showScore(), CorrectAudio(), showMusic()}}>Rwanda</p1>
        <p2 onClick = {() =>{EffectWrong(),hideHint(),unhideSingapore(), unhideRwanda(), setImageSrc(flags.singapore), showScore(), WrongAudio(), showMusic()}}>Comoros</p2>
        <p3 onClick = {() =>{EffectWrong(),hideHint(),unhideSingapore(), unhideRwanda(), setImageSrc(flags.singapore), showScore(), WrongAudio(), showMusic()}}>Cabo Verde</p3>
        <p4 onClick = {() =>{EffectWrong(),hideHint(),unhideSingapore(), unhideRwanda(), setImageSrc(flags.singapore), showScore(), WrongAudio(), showMusic()}}>Afghanistan</p4>
        <div className = "hintButton">
          <button onClick = {() =>{showHint(), hintRwanda()}}>
            Take a hint
          </button>
        </div>
          </div>
          :
          <></>
           }
           {toggleAnswer10 ? 
        <div className = "answer">
        <p1 onClick = {() =>{increaseCount(), Effect(), hideHint(),unhideSingapore(), unhideNauru(), setImageSrc(flags.nauru), showScore(), CorrectAudio(), showMusic()}}>Singapore</p1>
        <p2 onClick = {() =>{EffectWrong(),hideHint(),unhideSingapore(), unhideNauru(), setImageSrc(flags.nauru), showScore(), WrongAudio(), showMusic()}}>Japan</p2>
        <p3 onClick = {() =>{EffectWrong(),hideHint(),unhideSingapore(), unhideNauru(), setImageSrc(flags.nauru), showScore(), WrongAudio(), showMusic()}}>Kribati</p3>
        <p4 onClick = {() =>{EffectWrong(),hideHint(),unhideSingapore(), unhideNauru(), setImageSrc(flags.nauru), showScore(), WrongAudio(), showMusic()}}>Brunei</p4>
        <div className = "hintButton">
          <button onClick = {() =>{showHint(), hintSingapore()}}>
            Take a hint
          </button>
        </div>
          </div>
          :
          <></>
           }
           {toggleAnswer11 ? 
        <div className = "answer">
        <p1 onClick = {() =>{increaseCount(), Effect(), hideHint(), unhideMicronesia(), unhideNauru(), setImageSrc(flags.micronesia), showScore(), CorrectAudio(), showMusic()}}>Nauru</p1>
        <p2 onClick = {() =>{EffectWrong(),hideHint(), unhideMicronesia(), unhideNauru(), setImageSrc(flags.micronesia), showScore(), WrongAudio(), showMusic()}}>Australia</p2>
        <p3 onClick = {() =>{EffectWrong(),hideHint(), unhideMicronesia(), unhideNauru(), setImageSrc(flags.micronesia), showScore(), WrongAudio(), showMusic()}}>New Zealand</p3>
        <p4 onClick = {() =>{EffectWrong(),hideHint(), unhideMicronesia(), unhideNauru(), setImageSrc(flags.micronesia), showScore(), WrongAudio(), showMusic()}}>Kribati</p4>
        <div className = "hintButton">
          <button onClick = {() =>{showHint(), hintNauru()}}>
            Take a hint
          </button>
        </div>
          </div>
          :
          <></>
           }
            {toggleAnswer12 ? 
        <div className = "answer">
        <p1 onClick = {() =>{EffectWrong(),hideHint(), unhideMicronesia(), unhideKyrgyzstan(), setImageSrc(flags.kyrgyzstan), showScore(), WrongAudio(), showMusic()}}>Liberia</p1>
        <p2 onClick = {() =>{increaseCount(), Effect(), hideHint(), unhideMicronesia(), unhideKyrgyzstan(), setImageSrc(flags.kyrgyzstan), showScore(), CorrectAudio(), showMusic()}}>Micronesia</p2>
        <p3 onClick = {() =>{EffectWrong(),hideHint(), unhideMicronesia(), unhideKyrgyzstan(), setImageSrc(flags.kyrgyzstan), showScore(), WrongAudio(), showMusic()}}>Benin</p3>
        <p4 onClick = {() =>{EffectWrong(),hideHint(), unhideMicronesia(), unhideKyrgyzstan(), setImageSrc(flags.kyrgyzstan), showScore(), WrongAudio(), showMusic()}}>Suriname</p4>
        <div className = "hintButton">
          <button onClick = {() =>{showHint(), hintMicronesia()}}>
            Take a hint
          </button>
        </div>
          </div>
          :
          <></>
           }
            {toggleAnswer13 ? 
        <div className = "answer">
        <p1 onClick = {() =>{EffectWrong(), unhideMonaco(), hideHint(), unhideKyrgyzstan(), setImageSrc(flags.monaco), showScore(), WrongAudio(), showMusic()}}>Tajikistan</p1>
        <p2 onClick = {() =>{EffectWrong(), unhideMonaco(), hideHint(), unhideKyrgyzstan(), setImageSrc(flags.monaco), showScore(), WrongAudio(), showMusic()}}>China</p2>
        <p3 onClick = {() =>{EffectWrong(), unhideMonaco(), hideHint(), unhideKyrgyzstan(), setImageSrc(flags.monaco), showScore(), WrongAudio(), showMusic()}}>Marshall Islands</p3>
        <p4 onClick = {() =>{increaseCount(), Effect(), unhideMonaco(), hideHint(), unhideKyrgyzstan(), setImageSrc(flags.monaco), showScore(), CorrectAudio(), showMusic()}}>Kyrgyzstan</p4>
        <div className = "hintButton">
          <button onClick = {() =>{showHint(), hintKyrgyzstan()}}>
            Take a hint
          </button>
        </div>
          </div>
          :
          <></>
           }
           {toggleAnswer14 ? 
        <div className = "answer">
        <p1 onClick = {() =>{EffectWrong(), hideHint(), unhideMonaco(), document.getElementById("end").showModal(), showScore(), WrongAudio(), showMusic()}}>Tajikistan</p1>
        <p2 onClick = {() =>{EffectWrong(), hideHint(), unhideMonaco(), document.getElementById("end").showModal(), showScore(), WrongAudio(), showMusic()}}>China</p2>
        <p3 onClick = {() =>{EffectWrong(), hideHint(), unhideMonaco(), document.getElementById("end").showModal(), showScore(), WrongAudio(), showMusic()}}>Marshall Islands</p3>
        <p4 onClick = {() =>{increaseCount(), Effect(), hideHint(), unhideMonaco(), document.getElementById("end").showModal(), showScore(), CorrectAudio(), showMusic()}}>Monaco</p4>
        <div className = "hintButton" id = "hintB">
          <button onClick = {() =>{showHint(), hintMonaco()}}>
            Take a hint
          </button>
        </div>
          </div>
          :
          <></>
           }
        <div className="count">
          <h id = "scoreB">Score: {count}</h>
        </div>
        <dialog id = "end">
        <h1>
          <img src = {count < 10 ? sad : win} />
        </h1> 
          <h id = "endH">{count < 10 ? "You've lost!": "You've won!"}</h>
          <p>Your score is: {count} </p>
          <button onClick = {() => {history.go(0)}}> Try again </button>
        </dialog>
      </header>
      </div>
  );
}

export default App;
