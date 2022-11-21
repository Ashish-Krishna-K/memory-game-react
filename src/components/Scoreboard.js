import React, { useState } from "react";
import '../Styles/Scoreboard.css'

export default function Scoreboard (props) {
    const { currentScore, bestScore } = props
    return(
        <div id='scoreboard'>
            <p>Current Score: {currentScore}</p>
            <p>Best Score: {bestScore}</p>
        </div>
    )
}