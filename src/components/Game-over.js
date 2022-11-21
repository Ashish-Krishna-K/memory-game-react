import '../Styles/Game-over.css'

export default function GameOver (props) {
    const { playAgain } = props
    return (
        <div id="game-over">
            <div id='display' >Game Over!</div>
            <button onClick={playAgain}>Play Again!</button>
        </div>
    )
}