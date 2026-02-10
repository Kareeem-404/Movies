import { Link } from "react-router-dom";

// -------------------------- Styles --------------------------
const cardStyle = "relative";
const cardImageStyle = "w-full rounded-xl";
const cardTitleStyle = "text-2xl font-medium text-center bg-blue-300 text-white mt-4 rounded-md";
const cardRatingStyle = "absolute z-10 bg-blue-300 text-white w-10 h-10 flex justify-center items-center right-0 font-medium";
const cardOverlayStyle = "opacity-0 hover:opacity-100 transition-all text-center p-4 rounded-xl text-2xl font-bold duration-200 absolute bottom-0 flex justify-center items-center text-white bg-black/50 left-0 right-0 top-0";
// -------------------------- Styles --------------------------

export default function Card({ title, image, movieId, rating, type }) {
  return (
    <Link to={`/${type}/${movieId}`} className={cardStyle}>
      <div className={cardStyle}>
        <div className={cardRatingStyle}>
            {rating.toFixed(1)}
        </div>
        <div className={cardStyle}>
          <img src={image} alt={title} className={cardImageStyle} />
          <div className={cardOverlayStyle}>{title}</div>
        </div>
        <h3 className={cardTitleStyle}>{title}</h3>
      </div>
    </Link>
  );
}