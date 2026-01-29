import { useState } from "react";
import Answer from "./Answer";

const baseurl = import.meta.env.BASE_URL;
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
            <img
              src={baseurl + "/assets/images/icon-accessibility.svg"}
              alt=""
            />
            Accessibility
          </li>
        </ul>
      )}

      {selected ? <Answer val={selected} /> : ""}
    </>
  );
};

export default Section2;
