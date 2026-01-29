import html from "../assets/images/icon-html.svg";
import css from "../assets/images/icon-css.svg";
import javascript from "../assets/images/icon-js.svg";
import accessibility from "../assets/images/icon-accessibility.svg";

const Section2 = () => {
  return (
    <ul className="startquiz">
      <li>
        <img src={html} alt="" /> HTML
      </li>
      <li>
        <img src={css} alt="" /> CSS
      </li>
      <li>
        <img src={javascript} alt="" />
        JavaScript
      </li>
      <li>
        <img src={accessibility} alt="" />
        Accessibility
      </li>
    </ul>
  );
};

export default Section2;
