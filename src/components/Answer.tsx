import { useEffect, useState } from "react";
import "../css/answer.css";
import { type Question } from "../types/quiz";
const baseurl = import.meta.env.BASE_URL;

type Props = {
  questions: Question[];
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  setEndGame: React.Dispatch<React.SetStateAction<boolean>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  total: number;
};

const Answer = ({
  questions,
  setCount,
  count,
  setEndGame,
  total,
  setTotal,
}: Props) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [error, setError] = useState({
    display: "none",
  });
  const [correct, setCorrect] = useState<number | null>(null);
  function handleSubmit() {
    if (selected === null) {
      setError({ display: "flex" });
      return;
    }
    if (questions[count]?.answer === questions[count]?.options[selected]) {
      setTotal((t) => t + 1);
    } else {
      handleCorrect(questions[count]?.answer);
    }
    setTimeout(() => {
      setCount((c) => c + 1);
      setError({ display: "none" });
    }, 2000);
  }

  function handleCorrect(answer: string) {
    setCorrect(questions[count]?.options.indexOf(answer));
  }
  useEffect(() => {
    if (count === 10) {
      setEndGame(true);
    }
    setSelected(null);
    setCorrect(null);
  }, [count]);
  return (
    <>
      <div className="card">
        {questions[count]?.options.map((opt, index) => (
          <div key={index}>
            <input
              id={`opt${index}`}
              type="radio"
              name="ratio"
              value={index}
              checked={selected === index}
              onChange={(e) => setSelected(Number(e.target.value))}
            />

            <label
              htmlFor={`opt${index}`}
              className={`option ${correct === index ? "correct" : ""}`}
            >
              <div className="badge">{String.fromCharCode(65 + index)}</div>
              <div className="value">{opt}</div>
            </label>
          </div>
        ))}

        <button className="submit" onClick={handleSubmit}>
          Submit Answer
        </button>
        <span className="msg" style={error}>
          <img src={baseurl + "/assets/images/icon-error.svg"} alt="" />
          Pleae select an answer
        </span>
      </div>
    </>
  );
};

export default Answer;
