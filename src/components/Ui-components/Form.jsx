import Title from "./Title";
import image from "../../assets/cute-cartoon-little-boy-sitting-on-the-moon-illustration-free-vector.jpg";

// -------------------------- Styles --------------------------
const formImageStyle = "w-full rounded-4xl";
const formStyle = "flex flex-col gap-6";
const formContainerStyle = "max-w-7xl mx-auto flex flex-col md:flex-row gap-7 mb-10";
const formContentStyle = "md:w-1/2";
// -------------------------- Styles --------------------------

export default function Form({ children, title }) {
  return (
    <>
      <div className={formContainerStyle}>
        <div className={formContentStyle}>
          <img src={image} className={formImageStyle} />
        </div>
        <div className={formContentStyle}>
          <Title title={title} />
          <div className={formStyle}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
