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

import { useOutletContext } from "react-router-dom";

type OutletCtx = {
  setImg: React.Dispatch<React.SetStateAction<object | undefined>>;
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
  const { setImg } = useOutletContext<OutletCtx>();
  function handleSelected(value: string | undefined) {
    if (value) {
      setGame(value);
    }
  }
  function reload() {
    location.reload();
  }
  useEffect(() => {
    if (game) {
      const { quizzes } = data;
      const quiz = quizzes.find((q) => q.title === game) as Quiz;
      setRow(quiz);
      setImg({ icon: quiz?.icon, title: quiz?.title });
    }
    // if (row) console.log(row.questions);
  }, [game, row]);
  return (
    <>
      {!game && (
        <ul className="startquiz">
          {data.quizzes.map((opt) => (
            <li
              key={opt.title}
              onClick={() => handleSelected(opt.title)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSelected(opt.title);
                }
              }}
            >
              <img src={baseurl + opt.icon} alt={opt.title} />
              {opt.title}
            </li>
          ))}
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
          <button className="restart-btn" onClick={reload}>
            Play Again
          </button>
        </div>
      ) : (
        subject.includes(game) && (
          <Answer
            questions={questions}
            count={count}
            setCount={setCount}
            setEndGame={setEndGame}
            setTotal={setTotal}
          />
        )
      )}
    </>
  );
};

export default Section2;
