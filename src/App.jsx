import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        { text: "Phone", correct: false },
        { text: "Watches", correct: true },
        { text: "Food", correct: false },
        { text: "Cosmetic", correct: false },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        { text: "2004", correct: true },
        { text: "2005", correct: false },
        { text: "2006", correct: false },
        { text: "2007", correct: false },
      ],
    },
    {
      id: 3,
      question: "Who played the character of Harry Potter in the movie?",
      answers: [
        { text: "Johnny Depp", correct: false },
        { text: "Leonardo Di Caprio", correct: false },
        { text: "Denzel Washington", correct: false },
        { text: "Daniel Radcliffe", correct: true },
      ],
    },
    {
      id: 4,
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Mars", correct: true },
        { text: "Earth", correct: false },
        { text: "Jupiter", correct: false },
        { text: "Venus", correct: false },
      ],
    },
    {
      id: 5,
      question: "What is the capital city of Japan?",
      answers: [
        { text: "Beijing", correct: false },
        { text: "Seoul", correct: false },
        { text: "Tokyo", correct: true },
        { text: "Kyoto", correct: false },
      ],
    },
    {
      id: 6,
      question: "Which of the following is the largest mammal?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Whale Shark", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Giraffe", correct: false },
      ],
    },
    {
      id: 7,
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "Vincent van Gogh", correct: false },
        { text: "Pablo Picasso", correct: false },
        { text: "Leonardo da Vinci", correct: true },
        { text: "Claude Monet", correct: false },
      ],
    },
    {
      id: 8,
      question: "In which year did World War II end?",
      answers: [
        { text: "1941", correct: false },
        { text: "1945", correct: true },
        { text: "1939", correct: false },
        { text: "1950", correct: false },
      ],
    },
    {
      id: 9,
      question: "Which country is the largest by land area?",
      answers: [
        { text: "Canada", correct: false },
        { text: "Russia", correct: true },
        { text: "United States", correct: false },
        { text: "China", correct: false },
      ],
    },
    {
      id: 10,
      question: "Which animal is known for its ability to change colors?",
      answers: [
        { text: "Chameleon", correct: true },
        { text: "Lion", correct: false },
        { text: "Eagle", correct: false },
        { text: "Kangaroo", correct: false },
      ],
    },
    {
      id: 11,
      question: "What is the longest river in the world?",
      answers: [
        { text: "Amazon River", correct: true },
        { text: "Nile River", correct: false },
        { text: "Yangtze River", correct: false },
        { text: "Mississippi River", correct: false },
      ],
    },
    {
      id: 12,
      question: "What is the main ingredient in guacamole?",
      answers: [
        { text: "Tomato", correct: false },
        { text: "Avocado", correct: true },
        { text: "Lemon", correct: false },
        { text: "Onion", correct: false },
      ],
    },
    {
      id: 13,
      question: "Which country is famous for the Eiffel Tower?",
      answers: [
        { text: "Italy", correct: false },
        { text: "France", correct: true },
        { text: "Germany", correct: false },
        { text: "Spain", correct: false },
      ],
    },
    {
      id: 14,
      question: "What is the hardest natural substance on Earth?",
      answers: [
        { text: "Gold", correct: false },
        { text: "Diamond", correct: true },
        { text: "Iron", correct: false },
        { text: "Platinum", correct: false },
      ],
    },
    {
      id: 15,
      question: "Which of these movies was directed by Steven Spielberg?",
      answers: [
        { text: "Inception", correct: false },
        { text: "Jaws", correct: true },
        { text: "Titanic", correct: false },
        { text: "The Dark Knight", correct: false },
      ],
    },
  ];
  

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1,000" },
        { id: 6, amount: "$ 2,000" },
        { id: 7, amount: "$ 4,000" },
        { id: 8, amount: "$ 8,000" },
        { id: 9, amount: "$ 16,000" },
        { id: 10, amount: "$ 32,000" },
        { id: 11, amount: "$ 64,000" },
        { id: 12, amount: "$ 125,000" },
        { id: 13, amount: "$ 250,000" },
        { id: 14, amount: "$ 500,000" },
        { id: 15, amount: "$ 1,000,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You Earned 💀 : {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
