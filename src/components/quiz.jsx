import { useState } from "react";
import Questions from "./questions";

function Quiz(){

    const [question, setQuestion] = useState(1)
    const [finish, setFinish] = useState(false)
    const [score, setScore] = useState(0)
    const [sum, setSum] = useState(0)

    const back = () => {
        if(question > 1){
            setQuestion(question - 1)
        }
    }

    const next = () => {
        if(question < 5){
            setSum(sum + score)
            setScore(0)
            setQuestion(question + 1)
        }else if (question === 5){
            setSum(sum + score)
            setFinish(true)
        }
    }

    const result = (answer) => {
        if(answer === Questions[question - 1].answer){
            setScore(1)
        }else{
            setScore(0)}
        console.log(score)
    }

    return(
        <div>
            <div>
                <button onClick={back}>Retour</button>
                <h1>Question {question}</h1>
                <p>{Questions[question - 1].question}</p>
                <button onClick={() => result(Questions[question - 1].answers[0])}>{Questions[question - 1].answers[0]}</button>
                <button onClick={() => result(Questions[question - 1].answers[1])}>{Questions[question - 1].answers[1]}</button>
                <button onClick={() => result(Questions[question - 1].answers[2])}>{Questions[question - 1].answers[2]}</button>
                <button onClick={() => result(Questions[question - 1].answers[3])}>{Questions[question - 1].answers[3]}</button>
                <button onClick={next}>Suivant</button>
            </div>
            {finish && <div>
                <h1>Résultat</h1>
                <p>{sum}</p>
            </div>}
        </div>
    )
}

export default Quiz;