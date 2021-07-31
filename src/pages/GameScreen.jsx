import React, { useState } from 'react';
import StartButton from '../components/StartButton';
import QuestionComponent from '../components/QuestionsComponent';

const GameScreen = ({ setIsRunning, score, setScore, questionIndex, setQuestionIndex }) => {

    const questions = [
        { question: "Which is the largest country in the world by population?", opts: ["India", "USA", "China", "Russia"], correctAnwser: "China" },
        { question: "When did the second world war end?", opts: ["1945", "1939", "1944", "1942"], correctAnwser: "1945" },
        { question: "Which was the first country to issue paper currency?", opts: ["USA", "France", "Italy", "China"], correctAnwser: "China" },
        { question: "Which city hosted the 1996 Summer Olympics?", opts: ["Atlanta", "Sydney", "Athens", "Beijing"], correctAnwser: "Atlanta" },
        { question: "Who invented the telephone?", opts: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"], correctAnwser: "Alexander Graham Bell" }
    ];
    const [isGameOver, setIsGameOver] = useState(false)
    const startQuiz = () => {
        setIsGameOver(true);
    }

    const showNextQusetion = (answer) => {
        if (answer === questions[questionIndex].correctAnwser) {
            setScore(score + 1);
        }

        if (questionIndex === questions.length - 1) {
            setIsRunning(true);
        } else {
            setQuestionIndex(questionIndex + 1);
        }

    }

    return (
        <div>
            <h1>Welcome to the Quiz Game!</h1>
            {!isGameOver?
            <StartButton startQuiz={startQuiz} /> :
                <QuestionComponent 
                    score={score}
                    question={questions[questionIndex]} 
                    showNextQusetion={showNextQusetion}
                />}
        </div>
    )
}
export default GameScreen;