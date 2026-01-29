import html from "../assets/images/icon-html.svg";
import css from "../assets/images/icon-css.svg";
import javascript from "../assets/images/icon-js.svg";
import accessibility from "../assets/images/icon-accessibility.svg";
import { useState } from "react";
import Answer from "./Answer";
const Section2 = () => {
  const [selected, setSelected] = useState("");

  function handleSelected(value: string) {
    setSelected(value);
  }
  return (
    <>
      {selected ? (
        ""
      ) : (
        <ul className="startquiz">
          <li onClick={() => handleSelected("html")}>
            <img src={html} alt="" /> HTML
          </li>
          <li onClick={() => handleSelected("css")}>
            <img src={css} alt="" /> CSS
          </li>
          <li onClick={() => handleSelected("javascript")}>
            <img src={javascript} alt="" />
            JavaScript
          </li>
          <li onClick={() => handleSelected("accessibility")}>
            <img src={accessibility} alt="" />
            Accessibility
          </li>
        </ul>
      )}

      {selected ? <Answer val={selected} /> : ""}
    </>
  );
};

export default Section2;
