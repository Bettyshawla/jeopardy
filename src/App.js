import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Play from "./components/Play";
import Score from "./components/Score";
import Question from "./components/Question";
import Reaveal from "./components/Reaveal";
import Trivia from "./components/Trivia";


function App() {

const [trivia, setTrivia] = useState(null);
const [question, setQuestion] = useState("");

const getTrivia = async() =>{
  try{
    const url = "https://jservice.io/api/random";
    const response = await fetch(url);
    const doc = await response.json()
    setTrivia(doc[0])
    console.log(doc, "aaaaaaaaaaaaa")
  }catch(error){
    console.log(error);
  }
}

console.log( " bbbbbbbbbbbb")
useEffect(() => {
  getTrivia()
}, [])



  return (
    <div className="App">
      <Header />
      <Score />
      <Play trivia={trivia} getTrivia={getTrivia} setQuestion={setQuestion}/>
      <Question />
      <Reaveal/>
      <Trivia />

    </div>
  );
}

export default App;
