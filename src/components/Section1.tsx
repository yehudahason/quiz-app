type Props = {
  selected: string;
};

const Section1 = ({ selected }: Props) => {
  return (
    <>
      {selected ? (
        <div className="start-con1 quiz">
          <h1>
            <span className="a">Welcome to the</span> <br />
            <span className="b"> Frontend Quiz!</span>
          </h1>
          <p>Pick a subject to get started.</p>
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
