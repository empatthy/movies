import { Heart, Star } from "lucide-react";
import { useState } from "react"

interface RatingInputProps {
  movieRating: number | null;
  liked: boolean;
  setMovieRating: React.Dispatch<React.SetStateAction<number | null>>;
  setLiked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RatingInput = ({movieRating, setMovieRating, liked, setLiked} : RatingInputProps) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="
      bg-[#1b2027]
      px-6 
      py-6 
      mt-6 
      rounded-md
      border 
      border-[#3b4149]"
    >
      <h3 className="mb-3 text-gray-300 text-sm mx-auto text-center">Rate the movie</h3>
      <div 
        className="flex justify-center items-center gap-1"
        onMouseLeave={() => setHoverRating(0)}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onMouseEnter={() => setHoverRating(star)}
            onClick={() => setMovieRating(star)}
            className="text-[#00c030] cursor-pointer"
          >
            {(hoverRating || movieRating || 0) >= star ? <Star fill="currentColor" size={24} /> : <Star fill="#000" className="text-black" size={24} />}
          </button>
        ))}
      </div>
      
      <div className="flex flex-col items-center mt-4">
        <button type="button" onClick={() => setLiked(!liked)} className="cursor-pointer">
          <Heart
            aria-label="like"
            size={26} 
            className={liked ? "text-[#f93] transition-colors" : "text-gray-400 hover:text-[#f93] transition-colors"}
            fill={liked ? "currentColor" : "none"}
          />
        </button>   
        <h3 className="text-gray-300 text-sm mt-1">Like</h3>
      </div>
    </div>
  )
}