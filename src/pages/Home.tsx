import { useState } from "react";

import Section1 from "../components/Section1";
import Section2 from "../components/Section2";

const Home = () => {
  const [selected, setSelected] = useState("");
  return (
    <section className="quiz-con">
      <div className="sec1">
        <Section1 selected={selected} />
      </div>
      <div className="sec2">
        <Section2 selected={selected} setSelected={setSelected} />
      </div>
    </section>
  );
};

export default Home;
