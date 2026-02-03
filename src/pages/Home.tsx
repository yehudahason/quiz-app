import { useEffect, useState } from "react";
const baseurl = import.meta.env.BASE_URL;

import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import { type Question, type Quiz, type QuizData } from "../types/quiz";

const Home = () => {
  const [game, setGame] = useState("");
  const [endGame, setEndGame] = useState(false);
  const [data, setdata] = useState<QuizData>({ quizzes: [] });
  const [row, setRow] = useState<Quiz>({});
  const [questions, setQuestions] = useState<Question[]>([]);
  const [count, SetCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {}, [row]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(baseurl + "data.json");
      if (res.ok) {
        const json = await res.json();
        setdata(json);
        // console.log(json);
      } else {
        console.log("error fetching data");
        return;
      }
    }
    getData();

    if (!row?.questions) return;
    setQuestions(row.questions);
    // console.log(row.questions);
  }, [row]);

  return (
    <section className="quiz-con">
      <div className="sec1">
        <Section1
          game={game}
          endGame={endGame}
          data={data}
          row={row}
          questions={questions}
          count={count}
        />
      </div>
      <div className="sec2">
        <Section2
          game={game}
          setGame={setGame}
          endGame={endGame}
          setEndGame={setEndGame}
          data={data}
          row={row}
          setRow={setRow}
          questions={questions}
          count={count}
          setCount={SetCount}
          total={total}
          setTotal={setTotal}
        />
      </div>
    </section>
  );
};

export default Home;
