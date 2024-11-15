import React, { useEffect, useRef } from "react";
import $ from './jquery'

export default function Effect(){
    $(document).ready(function(){
        $('body').toggleClass('laser');
    })
    setTimeout(function () {
    $('body').toggleClass('laser');
    },1000)
}


