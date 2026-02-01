type Props = {
  selected: string;
};

const Section1 = ({ selected }: Props) => {
  return (
    <>
      {selected ? (
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
        <>
          <div className="start-con1">
            <h1>
              <span className="a">Welcome to the</span> <br />
              <span className="b"> Frontend Quiz!</span>
            </h1>
            <p>Pick a subject to get started.</p>
          </div>
        </>
      )}
      {/* <div className="end-quiz">
        <h1>
          <span className="a">Quiz completed</span>
          <span className="b">You scrored...</span>
        </h1>
      </div> */}
    </>
  );
};

export default Section1;
