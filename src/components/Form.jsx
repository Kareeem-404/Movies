import Title from "./Title";
import image from "../assets/cute-cartoon-little-boy-sitting-on-the-moon-illustration-free-vector.jpg";

export default function Form({ children, title }) {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-7 mb-10">
        <div className="md:w-1/2">
          <img src={image} className="w-full rounded-4xl" />
        </div>
        <div className="md:w-1/2">
          <Title title={title} />
          <form className="flex flex-col gap-6">
            {children}
          </form>
        </div>
      </div>
    </>
  );
}
