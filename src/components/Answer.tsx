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
  function handleSubmit() {
    if (selected === null) {
      setError({ display: "flex" });
      return;
    }
    if (questions[count]?.answer === questions[count]?.options[selected])
      setTotal((t) => t + 1);
    setCount((c) => c + 1);
    setError({ display: "none" });
  }

  useEffect(() => {
    if (count === 10) {
      setEndGame(true);
    }
    setSelected(null);
  }, [count, total]);
  return (
    <>
      <div className="card">
        <input
          id="optA"
          type="radio"
          name="ratio"
          value={0}
          checked={selected === 0}
          onChange={(e) => setSelected(Number(e.target.value))}
        />
        <label className="option" htmlFor="optA">
          <div className="badge">A</div>
          <div className="value">{questions[count]?.options[0]}</div>
        </label>

        <input
          id="optB"
          type="radio"
          name="ratio"
          value={1}
          checked={selected === 1}
          onChange={(e) => setSelected(Number(e.target.value))}
        />
        <label className="option" htmlFor="optB">
          <div className="badge">B</div>
          <div className="value">{questions[count]?.options[1]}</div>
        </label>

        <input
          id="optC"
          type="radio"
          name="ratio"
          value={2}
          checked={selected === 2}
          onChange={(e) => setSelected(Number(e.target.value))}
        />
        <label className="option" htmlFor="optC">
          <div className="badge">C</div>
          <div className="value">{questions[count]?.options[2]}</div>
        </label>

        <input
          id="optD"
          type="radio"
          name="ratio"
          value={3}
          checked={selected === 3}
          onChange={(e) => setSelected(Number(e.target.value))}
        />
        <label className="option" htmlFor="optD">
          <div className="badge">D</div>
          <div className="value">{questions[count]?.options[3]}</div>
        </label>

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
