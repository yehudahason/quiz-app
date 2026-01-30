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
            <h1>What does HTML stand for?</h1>
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
          </div>{" "}
        </>
      )}
    </>
  );
};

export default Section1;
