import type { QuizData } from "../types/quiz";

type Props = {
  stage: string;
  endGame: boolean;
  data: QuizData;
};
const subject = ["HTML", "CSS", "JavaScript", "Accessibility"];

const Section1 = ({ stage, endGame, data }: Props) => {
  function startQuiz() {
    const { quizzes } = data;

    const Quiz = quizzes.find((quiz) => quiz.title === stage);
  }
  return (
    <>
      {!endGame &&
        (subject.includes(stage) ? (
          <div className="quiz">
            <div className="upper">
              <span className="stage">Question 6 of 10</span>
              <h2>What does HTML stand for?</h2>
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
