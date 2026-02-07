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
};

const Answer = ({
  questions,
  setCount,
  count,
  setEndGame,
  setTotal,
}: Props) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [error, setError] = useState({ display: "none" });
  const [correct, setCorrect] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [locked, setLocked] = useState(false);

  function handleCorrect(answer: string, options: string[]) {
    const idx = options.indexOf(answer);
    setCorrect(idx >= 0 ? idx : null);
  }
  function handleSubmit() {
    if (locked) return;

    if (selected === null) {
      setError({ display: "flex" });
      return;
    }

    const q = questions[count];
    if (!q) return;

    setError({ display: "none" });
    setSubmitted(true);
    const isLast = count + 1 === questions.length;

    // ✅ Correct
    if (q.answer === q.options[selected]) {
      setTotal((t) => t + 1);
      handleCorrect(q.answer, q.options);
      setLocked(true);
      if (isLast) {
        setEndGame(true);
        return;
      }

      setTimeout(() => {
        setCount((c) => c + 1);
        setSubmitted(false);
        setLocked(false);
        return;
      }, 2000);
    } else {
      // ❌ Wrong
      setLocked(true);
      setSubmitted(true);
      handleCorrect(q.answer, q.options);

      setTimeout(() => {
        if (isLast) {
          setLocked(false);
          setEndGame(true);
          return;
        }

        setCount((c) => c + 1);
        setLocked(false);
        setSubmitted(false);
      }, 2000);
    }
  }
  useEffect(() => {
    setSelected(null);
    setCorrect(null);
    setLocked(false);
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
              disabled={locked}
              onChange={(e) => setSelected(Number(e.target.value))}
            />

            <label
              htmlFor={`opt${index}`}
              className={`option
    ${submitted && correct === index ? "correct" : ""}
    ${submitted && selected === index && correct !== index ? "wrong" : ""}
  `}
              style={{ pointerEvents: locked ? "none" : "auto" }}
              tabIndex={0}
            >
              <div className="badge">{String.fromCharCode(65 + index)}</div>
              <div className="value">
                <span>{opt}</span>
                <span>
                  <img />
                </span>
              </div>
            </label>
          </div>
        ))}

        <button className="submit" onClick={handleSubmit} disabled={locked}>
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
