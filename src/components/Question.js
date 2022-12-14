export default function Question(trivia, setQuestion, displayQuestion){
    const askQuestion =() =>{
        setQuestion(trivia.answer)
    }

    return(
        <div>
            <button onClick={askQuestion} className="que">Click to Reaveal Question</button>
            <h1 className="Play">Question: <span>{displayQuestion}</span> </h1>
        </div>
    )
}