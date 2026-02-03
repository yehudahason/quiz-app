import { useEffect, useState } from "react";
import "../css/answer.css";
import { type Question, type Quiz } from "../types/quiz";
const baseurl = import.meta.env.BASE_URL;

type Props = {
  val: string;
  questions: Question[];
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  setEndGame: React.Dispatch<React.SetStateAction<boolean>>;
};

const Answer = ({ val, questions, setCount, count, setEndGame }: Props) => {
  useEffect(() => {
    if (count === 10) {
      setEndGame(true);
    }
  }, [count]);
  return (
    <>
      <div className="card">
        <input id="optA" type="radio" name="ratio" />
        <label className="option" htmlFor="optA">
          <div className="badge">A</div>
          <div className="value">{questions[count]?.options[0]}</div>
        </label>

        <input id="optB" type="radio" name="ratio" />
        <label className="option" htmlFor="optB">
          <div className="badge">B</div>
          <div className="value">{questions[count]?.options[1]}</div>
        </label>

        <input id="optC" type="radio" name="ratio" />
        <label className="option" htmlFor="optC">
          <div className="badge">C</div>
          <div className="value">{questions[count]?.options[2]}</div>
        </label>

        <input id="optD" type="radio" name="ratio" />
        <label className="option" htmlFor="optD">
          <div className="badge">D</div>
          <div className="value">{questions[count]?.options[3]}</div>
        </label>

        <button className="submit" onClick={() => setCount((prev) => prev + 1)}>
          Submit Answer
        </button>
        <span className="msg">
          <img src={baseurl + "/assets/images/icon-error.svg"} alt="" />
          Pleae select an answer
        </span>
      </div>
    </>
  );
};

export default Answer;
