import type { Question, Quiz, QuizData } from "../types/quiz";

type Props = {
  game: string;
  endGame: boolean;
  data: QuizData;
  row: Quiz;
  questions: Question[];
  count: number;
};
const subject = ["HTML", "CSS", "JavaScript", "Accessibility"];

const Section1 = ({ game, endGame, data, row, questions, count }: Props) => {
  return (
    <>
      {!endGame &&
        (subject.includes(game) ? (
          <div className="quiz">
            <div className="upper">
              <span className="game">Question {count + 1} of 10</span>
              <h2>{questions[count]?.question}</h2>
            </div>
            <div className="bar">
              <div className="progress"></div>
            </div>
          </div>
        ) : (
          <div className="start-con1">
            <h1>
              <span className="a">Welcome to the</span> <br />
              <span className="b"> Frontend Quiz!</span>
            </h1>
            <p>Pick a subject to get started.</p>
          </div>
        ))}

      {endGame && (
        <div className="end-quiz">
          <h1>
            <span className="a">Quiz completed</span>
            <span className="b">You scrored...</span>
          </h1>
        </div>
      )}
    </>
  );
};

export default Section1;
