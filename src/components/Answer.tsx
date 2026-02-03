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

    // ✅ Correct: go to next question immediately
    if (q.answer === q.options[selected]) {
      setTotal((t) => t + 1);
      setCount((c) => c + 1);
      return;
    }

    // ❌ Wrong: show correct answer & lock clicks for 2 seconds
    setLocked(true);
    handleCorrect(q.answer, q.options);

    setTimeout(() => {
      setCount((c) => {
        if (c + 1 === questions.length) {
          setEndGame(true);
          return c; // stop incrementing
        }
        return c + 1;
      });
      setLocked(false);
    }, 2000);
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
              className={`option ${correct === index ? "correct" : ""}`}
              style={{ pointerEvents: locked ? "none" : "auto" }}
            >
              <div className="badge">{String.fromCharCode(65 + index)}</div>
              <div className="value">{opt}</div>
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
