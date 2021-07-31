import React from 'react';
import RestartButton from '../components/RestartButton';

const GameOverScreen = ({ setIsRunning, score, setScore, questionIndex, setQuestionIndex }) => {

    const restartQuiz = () => {
        setIsRunning(false);
        setQuestionIndex(0);
        setScore(0);

    }

    return (
        <div>
            <h1>Game Over!</h1>
            <RestartButton restartQuiz={restartQuiz} />
            <h4 className="score">SCORE: {score}</h4>
        </div>
    )
}
export default GameOverScreen;