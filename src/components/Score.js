import { useState } from "react";
export default function Score(props) {

    const [score, setScore] = useState(0);

    const decrease = () =>{
        if( score >= 100){
            setScore(score - 100)
        }else{
         setScore(score)
        }
    }
    const increase = () => {
        setScore(score + 100)
    }
    const reset = () => {
        setScore(0)
    }



  return (
    <div className="Score">
      <h1>Score: {score}</h1>


      <div className="button">
        <button onClick={decrease} className="Decrease"> Decrease { decrease }</button>
        &nbsp; &nbsp;
        <button onClick={increase} className="Increase"> Increase</button>
         &nbsp; &nbsp;
        <button onClick={reset} className="Reset"> Reset</button>
      </div>
    </div>
  );
}
