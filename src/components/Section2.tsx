type Props = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

import Answer from "./Answer";

const baseurl = import.meta.env.BASE_URL;
const Section2 = ({ selected, setSelected }: Props) => {
  function handleSelected(value: string) {
    setSelected(value);
  }
  return (
    <>
      <ul className="startquiz">
        <li onClick={() => handleSelected("html")}>
          <img src={baseurl + "/assets/images/icon-html.svg"} alt="" /> HTML
        </li>
        <li onClick={() => handleSelected("css")}>
          <img src={baseurl + "/assets/images/icon-css.svg"} alt="" /> CSS
        </li>
        <li onClick={() => handleSelected("javascript")}>
          <img src={baseurl + "/assets/images/icon-js.svg"} alt="" />
          JavaScript
        </li>
        <li onClick={() => handleSelected("accessibility")}>
          <img src={baseurl + "/assets/images/icon-accessibility.svg"} alt="" />
          Accessibility
        </li>
      </ul>

      {selected ? <Answer val={selected} /> : ""}
      {/* <div className="score-stage">
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
      </div> */}
    </>
  );
};

export default Section2;
