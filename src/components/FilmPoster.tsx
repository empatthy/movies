import { Link } from 'react-router';

interface FilmPosterProps {
  poster: string;
  movieId: string;
}

export const FilmPoster = ({ poster, movieId }: FilmPosterProps) => {
  return (
    <Link 
      to={`/movies/${movieId}`} 
      className="block h-[225px] border border-[#2d3030] rounded-sm overflow-hidden"
    >
        <img 
          src={poster} 
          alt="Постер" 
          className="w-[150px] h-[225px] object-cover" 
        />
    </Link>
  );
};
