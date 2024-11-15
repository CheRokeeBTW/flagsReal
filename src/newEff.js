import React, { useEffect, useRef } from "react";
import $ from './jquery'

export default function EffectWrong(){
    $(document).ready(function(){
        $('body').toggleClass('laserWrong');
    })
    setTimeout(function () {
    $('body').toggleClass('laserWrong');
    },1000)
}