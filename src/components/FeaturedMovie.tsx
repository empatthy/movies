import { Link } from 'react-router';
import { useState } from 'react';

interface FeaturedMovieProps {
    movieId: number;
    title: string;
    year: number;
    shots: string[];
    genres: string[];
  }

export const FeaturedMovie = ({movieId, title, year, shots, genres}: FeaturedMovieProps) => {
    const [shot] = useState(() => {
        const randomIndex = Math.floor(Math.random() * shots.length);
        return shots[randomIndex];
    });

    return (
        <div className="group relative w-full aspect-[2/1] overflow-hidden mb-[32px] rounded-md">
            <Link to={`/movies/${movieId}`} >
                <img 
                    src={shot}
                    alt={`${title} movie still`}
                    className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-102"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"/>

                <div className="absolute bottom-8 left-8 z-20 text-white">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <span className="mt-2 text-gray-300">{year} · {genres.join(" · ")}</span>
                </div>
            </Link>
        </div>
    );
};