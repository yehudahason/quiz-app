import "../assets/css/answer.css";

type Props = {
  val: string;
};

const Answer = ({ val }: Props) => {
  return (
    <>
      <div className="card">
        <h1>{val}</h1>
        <input id="optA" type="radio" name="ratio" />
        <label className="option" htmlFor="optA">
          <div className="badge">A</div>
          <div className="value">4.5 : 1</div>
        </label>

        <input id="optB" type="radio" name="ratio" />
        <label className="option" htmlFor="optB">
          <div className="badge">B</div>
          <div className="value">3 : 1</div>
        </label>

        <input id="optC" type="radio" name="ratio" />
        <label className="option" htmlFor="optC">
          <div className="badge">C</div>
          <div className="value">2.5 : 1</div>
        </label>

        <input id="optD" type="radio" name="ratio" />
        <label className="option" htmlFor="optD">
          <div className="badge">D</div>
          <div className="value">5 : 1</div>
        </label>

        <button className="submit">Submit Answer</button>
      </div>
    </>
  );
};

export default Answer;
