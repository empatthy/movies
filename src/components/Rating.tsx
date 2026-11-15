import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
}

export const Rating = ({ value }: RatingProps) => {
  const fullStars = Math.floor(value);
  const hasHalf = value % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className='flex items-center text-[#9b9ea4]'>
      {Array.from({length: fullStars}).map((_, index) => (
        <Star key={index} fill="currentColor" size={14}/>
      ))}

      {hasHalf && (
        <div className='relative inline-block'>
          <Star fill="none" size={14}/>

          <div className='absolute top-0 left-0 w-1/2 h-full overflow-hidden'>
            <Star fill="currentColor" size={14}/>
          </div>
        </div>
      )}

      {Array.from({length: emptyStars}).map((_, index) => (
        <Star key={index} fill="none" size={14}/>
      ))}
    </div>
  );
};
