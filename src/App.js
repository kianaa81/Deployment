import './App.css';
import React, {useState} from 'react';

function App() {

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length){
    setCurrentQuestion(currentQuestion +1);
  } else {
    setFinalResults (true);
  }
  }

  const playAgain = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }

  const questions = [
    {
      text: "How many Harry Potter books are there?",
      options: [
        { id: 0, text: "3 Book", isCorrect: false },
        { id: 1, text: "4 Books", isCorrect: false },
        { id: 2, text: "8 Books", isCorrect: false },
        { id: 3, text: "7 Books", isCorrect: true },
      ],
    },
    {
      text: "What is the name of Harry's owl?",
      options: [
        { id: 0, text: "Hedwig", isCorrect: true },
        { id: 1, text: "Errol", isCorrect: false },
        { id: 2, text: "Fawkes", isCorrect: false },
        { id: 3, text: "Pigwidgeon", isCorrect: false },
      ],
    },
    {
      text: "Which Hogwarts house is known for its ambition and cunning?",
      options: [
        { id: 0, text: "Gryffindor", isCorrect: false },
        { id: 1, text: "Ravenclaw", isCorrect: false },
        { id: 2, text: "Slytherin", isCorrect: true },
        { id: 3, text: "Hufflepuff", isCorrect: false },
      ],
    },
    {
      text: "Who is the Potions professor in Harry's first year at Hogwarts?",
      options: [
        { id: 0, text: "Minerva McGonagall", isCorrect: false },
        { id: 1, text: "Serverus Snape", isCorrect: true },
        { id: 2, text: "Albus Dumbledore", isCorrect: false },
        { id: 3, text: "Rubeus Hagrid", isCorrect: false },
      ],
    },
    {
      text: "What charm is used to unlock doors?",
      options: [
        { id: 0, text: "Lumos", isCorrect: false },
        { id: 1, text: "Alohomora", isCorrect: true },
        { id: 2, text: "Incendio", isCorrect: true },
        { id: 3, text: "Accio", isCorrect: false },
      ],
    },
  ];


  return (
    <div className="App">
      <h1 className='titleName'>Harry Potter Quiz</h1>
      <h2 className='titleName'>Current score: {score}</h2>

      {showFinalResults ? (
              <div className='results'>
              <h1>Final Results</h1>
    
              <button onClick={() => playAgain()}>Play Again</button>
          </div>
        ) : (
        <div className='questions'>
        <h2>Questions {currentQuestion + 1} out of {questions.length}</h2>

        <h3 className='questionTxt'>{questions[currentQuestion].text}</h3>
        <ul>
          {questions[currentQuestion].options.map((option) => {
          return(
            <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
          );
        })}
        </ul>
      </div>
        ) }
    </div>
  );
}

export default App;
