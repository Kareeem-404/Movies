import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

const Movie = () => {
    const [data, setData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bd7de1002d5d536889f2190d815dc7ec`);
            const data = await res.json();
            setData(data);
        }
        fetchMovie();
    }, []);

    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/2">
                <img src={'https://image.tmdb.org/t/p/w500/'+data.poster_path} alt="" />
            </div>
            <div className="md:w-3/4 space-y-5">
                <h2 className="text-2xl font-medium">Title: <span className='text-blue-300'>{data.title}</span></h2>
                <p className='text-xl font-medium'>Tagline: <span className='text-blue-300'>{data.tagline}</span></p>
                <div className='flex gap-5'>
                    {data.genres?.map((genre) => (
                        <p className='text-white bg-blue-300 px-4 py-3 rounded' key={genre.id}>{genre.name}</p>
                    ))}
                </div>
                <p className='text-xl font-medium'>Vote Average: <span className='text-blue-300'>{data.vote_average}</span></p>
                <p className='text-xl font-medium'>Vote count: <span className='text-blue-300'>{data.vote_count}</span></p>
                <p className='text-xl font-medium'>Date: <span className='text-blue-300'>{data.release_date}</span></p>
                <p className='text-xl font-medium'>Overview: <span className='text-blue-300'>{data.overview}</span></p>
            </div>
        </div>
    )
}

export default Movie