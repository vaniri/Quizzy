import React, {useState} from 'react';
import GameScreen from "../pages/GameScreen";
import GameOverScreen from '../pages/GameOverScreen';

const Home = () => {

  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div>
      {!isRunning ? 
        <GameScreen 
          setIsRunning={setIsRunning} 
          score={score} 
          setScore={setScore}
          questionIndex={questionIndex} 
          setQuestionIndex={setQuestionIndex}
        /> :
        <GameOverScreen 
            setIsRunning={setIsRunning}
            score={score} 
            setScore={setScore}
            questionIndex={questionIndex} 
            setQuestionIndex={setQuestionIndex}
        />
      }
    </div>
  )
}
export default Home;
