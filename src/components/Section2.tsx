type Props = {
  game: string;
  setGame: React.Dispatch<React.SetStateAction<string>>;
  endGame: boolean;
  setEndGame: React.Dispatch<React.SetStateAction<boolean>>;
  data: QuizData;
  row: Quiz;
  setRow: React.Dispatch<React.SetStateAction<Quiz>>;
  questions: Question[];
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

const subject = ["HTML", "CSS", "JavaScript", "Accessibility"];
import { useEffect } from "react";
import type { Question, Quiz, QuizData } from "../types/quiz";
import Answer from "./Answer";

const baseurl = import.meta.env.BASE_URL;
const Section2 = ({
  game,
  setGame,
  endGame,
  setEndGame,
  data,
  row,
  setRow,
  questions,
  count,
  setCount,
  total,
  setTotal,
}: Props) => {
  function handleSelected(value: string) {
    setGame(value);
    // setEndGame(true);
  }

  useEffect(() => {
    if (game) {
      const { quizzes } = data;
      const quiz = quizzes.find((q) => q.title === game) as Quiz;
      setRow(quiz);
    }
    // if (row) console.log(row.questions);
  }, [game, row]);
  return (
    <>
      {!game && (
        <ul className="startquiz">
          <li onClick={() => handleSelected("HTML")}>
            <img src={baseurl + "/assets/images/icon-html.svg"} alt="" /> HTML
          </li>
          <li onClick={() => handleSelected("CSS")}>
            <img src={baseurl + "/assets/images/icon-css.svg"} alt="" /> CSS
          </li>
          <li onClick={() => handleSelected("JavaScript")}>
            <img src={baseurl + "/assets/images/icon-js.svg"} alt="" />
            JavaScript
          </li>
          <li onClick={() => handleSelected("Accessibility")}>
            <img
              src={baseurl + "/assets/images/icon-accessibility.svg"}
              alt=""
            />
            Accessibility
          </li>
        </ul>
      )}

      {endGame ? (
        <div className="score-stage">
          <div className="score">
            <h2>
              <img src={baseurl + row.icon} alt="" />
              <span>{row.title}</span>
            </h2>
            <span className="total">{total}</span>
            <span className="out">Out of 10</span>
          </div>
          <button className="restart-btn">Play Again</button>
        </div>
      ) : (
        subject.includes(game) && (
          <Answer
            val={game}
            questions={questions}
            count={count}
            setCount={setCount}
            setEndGame={setEndGame}
            total={total}
            setTotal={setTotal}
          />
        )
      )}
    </>
  );
};

export default Section2;
