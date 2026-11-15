import { Rating } from './Rating';

interface ReviewCardProps {
  poster: string;
  avatar: string;
  username: string;
  rating: number;
  hasComment: boolean;
  rewatched: boolean;
  date: string;
}

export const ReviewCard = ({
  poster,
  avatar,
  username,
  rating,
  hasComment,
  rewatched,
  date,
}: ReviewCardProps) => {
  return (
    <li className="text-[#d3d6da] w-[150px] h-[280px] shadow">
      <div className="h-[259px] border border-[#676a6e] rounded-sm overflow-hidden">
        <img src={poster} alt="Постер" className="w-[150px] h-[225px] object-cover" />
        <div className="h-[33px] flex items-center px-1 bg-[#35383c]">
          <img src={avatar} alt="Avatar" className="w-[20px] h-[20px] rounded-full mr-1" />
          <span className="text-xs">{username}</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-[#9b9ea4] mt-[3px]">
        <div className="flex items-center space-x-1">
          <Rating value={rating} />
          {hasComment && (
            <svg viewBox="0 0 10 12" className="w-3 h-3 mt-[1px]">
              <path d="M0 1H10M0 10H6M0 7H10M0 4H10" stroke="#C9C9C9" strokeWidth="1" />
            </svg>
          )}
          {rewatched && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-3 h-3 mt-[1px]">
              <path d="M2 12a10 10 0 0 1 18-6" />
              <polyline points="20 2 20 6 16 6" />
              <path d="M22 12a10 10 0 0 1-18 6" />
              <polyline points="4 22 4 18 8 18" />
            </svg>
          )}
        </div>
        <span className="text-xs leading-none">{date}</span>
      </div>
    </li>
  );
};
