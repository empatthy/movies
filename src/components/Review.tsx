import { Rating } from "./Rating";
import { Heart, Trash2 } from "lucide-react";

interface ReviewProps {
    id: number;
    avatar: string;
    username: string;
    rating: number | null;
    liked: boolean;
    text: string;
    date: number;
    onDelete: () => void;
  }

export const Review = ({avatar, username, rating, liked, text, date, onDelete} : ReviewProps) => {
  const formattedDate = new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <div className="flex gap-3">
      <img 
        src={avatar} 
        alt="Avatar" 
        className="w-[40px] h-[40px] rounded-full" 
      />       
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[14px] font-medium text-gray-300">{username}</span>
            {rating != null && <Rating value={rating} />}
            {liked && <Heart size={16} fill="currentColor" className="text-[#f93] cursor-pointer transition-colors" />}
          </div>
          <button title="Delete review" onClick={onDelete}>
              <Trash2 size={18} className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors" />
          </button> 
        </div>
                
        <p className="my-2 text-[15px] text-gray-400 font-primary">{text}</p>
        <p className="text-[14px] text-gray-300">{formattedDate}</p>
      </div>
    </div>
  )
}