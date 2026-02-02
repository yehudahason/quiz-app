type Props = {
  stage: string;
  setStage: React.Dispatch<React.SetStateAction<string>>;
  endGame: boolean;
  setEndGame: React.Dispatch<React.SetStateAction<boolean>>;
  data: QuizData;
};

const subject = ["HTML", "CSS", "JavaScript", "Accessibility"];
import type { QuizData } from "../types/quiz";
import Answer from "./Answer";

const baseurl = import.meta.env.BASE_URL;
const Section2 = ({ stage, setStage, endGame, setEndGame, data }: Props) => {
  function handleSelected(value: string) {
    setStage(value);
    // setEndGame(true);
  }
  return (
    <>
      {!stage && (
        <ul className="startquiz">
          <li onClick={() => handleSelected("HTML")}>
            <img src={baseurl + "/assets/images/icon-html.svg"} alt="" /> HTML
          </li>
          <li onClick={() => handleSelected("CSS")}>
            <img src={baseurl + "/assets/images/icon-css.svg"} alt="" /> CSS
          </li>
          <li onClick={() => handleSelected("JavaScript")}>
            <img src={baseurl + "/assets/images/icon-js.svg"} alt="" />
            JavaScript
          </li>
          <li onClick={() => handleSelected("Accessibility")}>
            <img
              src={baseurl + "/assets/images/icon-accessibility.svg"}
              alt=""
            />
            Accessibility
          </li>
        </ul>
      )}

      {endGame ? (
        <div className="score-stage">
          <div className="score">
            <h2>
              <img
                src={baseurl + "/assets/images/icon-accessibility.svg"}
                alt=""
              />
              <span>Accessibility</span>
            </h2>
            <span className="total">8</span>
            <span className="out">Out of 10</span>
          </div>
          <button className="restart-btn">Play Again</button>
        </div>
      ) : (
        subject.includes(stage) && <Answer val={stage} />
      )}
    </>
  );
};

export default Section2;
