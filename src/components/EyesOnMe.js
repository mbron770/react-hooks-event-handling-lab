// Code EyesOnMe Component Here
import React, { useState } from "react"

function EyesOnMe(){

    function focusAction(){
        console.log('Good!')
    }

    function blurAction(){
        console.log('Hey! Eyes on me!')

    }

    return(
        <button onFocus={focusAction} onBlur={blurAction}>Eyes on me</button>


    )
}

export default EyesOnMe 
