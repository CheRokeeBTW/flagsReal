import React, { useEffect, useRef } from "react";
import $ from './jquery';

export default function EndH(){
    if(score < 1){
    document.getElementById("endH").innerHTML = "You lost"
    }
}