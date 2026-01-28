import Section1 from "../components/Section1";
import Section2 from "../components/Section2";

const Home = () => {
  return (
    <section className="quiz-con">
      <div className="sec1">
        <Section1 />
      </div>
      <div className="sec2">
        <Section2 />
      </div>
    </section>
  );
};

export default Home;
