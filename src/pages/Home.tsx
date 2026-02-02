import { useEffect, useState } from "react";
const baseurl = import.meta.env.BASE_URL;

import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import type { QuizData } from "../types/quiz";

const Home = () => {
  const [stage, setStage] = useState("");
  const [endGame, setEndGame] = useState(false);
  const [data, setdata] = useState<QuizData>({ quizzes: [] });

  useEffect(() => {
    async function getData() {
      const res = await fetch(baseurl + "data.json");
      if (res.ok) {
        const json = await res.json();
        setdata(json);
        console.log(json);
      } else {
        console.log("error fetching data");
        return;
      }
    }
    getData();
  }, []);

  return (
    <section className="quiz-con">
      <div className="sec1">
        <Section1 stage={stage} endGame={endGame} data={data} />
      </div>
      <div className="sec2">
        <Section2
          stage={stage}
          setStage={setStage}
          endGame={endGame}
          setEndGame={setEndGame}
          data={data}
        />
      </div>
    </section>
  );
};

export default Home;
