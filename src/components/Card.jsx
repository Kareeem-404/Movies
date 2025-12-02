import { Link } from "react-router"

export default function Card({ title, image, movieId }) {
    return (
        <Link to={`/movie/${movieId}`}>
            <div>
                <img src={image} alt={title} className="w-full rounded-xl" />
                <h3 className="text-2xl font-medium text-center bg-blue-300 text-white mt-4">{title}</h3>
            </div>
        </Link>
    )
}