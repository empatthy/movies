import { Rating } from './Rating';
import { Heart } from 'lucide-react';

interface ReviewCardProps {
  poster: string;
  avatar: string;
  rating: number;
  liked?: boolean;
}

export const ReviewCard = ({
  poster,
  avatar,
  rating,
  liked
}: ReviewCardProps) => {
  return (
    <li className="text-[#d3d6da] w-36 shrink-0 shadow">
      <div className="relative mb-2">
        <img src={poster} alt="Постер" className="w-full aspect-[2/3] object-cover border border-[#2d3030] rounded-sm" />
        <img src={avatar} alt="Avatar" className="absolute bottom-0 left-0 translate-y-1/8 -translate-x-1/8 w-11 h-11 rounded-full border-2 border-[#14181e]"/>
      </div>
      <div className="flex items-center justify-between text-[#9b9ea4] mt-2">
        <div className="flex items-center space-x-1">
          <Rating value={rating} />
        </div>
        {liked && <Heart size={14} fill="currentColor" />}
      </div>
    </li>
  );
};
