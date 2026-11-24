import { useState } from 'react';
import { FeaturedMovie } from '../components/FeaturedMovie';
import { FilmPoster } from '../components/FilmPoster';
import { Rating } from '../components/Rating';
import { ReviewCard } from '../components/ReviewCard';
import { movies } from '../data/movies';
import { reviews } from '../data/reviews';
import { Heart } from 'lucide-react';

export const HomePage = () => {
  const [featuredMovie] = useState(() => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  });

  const popularReviews = [...reviews]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 6);

  return (
    <div className="relative min-h-main bg-[#12151a]">
      <div className="gradient" />
      <div className="relative z-10 max-w-[950px] mx-auto pt-16">
        <h1 className="text-[#EEF0F2] text-center text-2xl font-light mb-9">
          Welcome back, empathy. Here's what we've been watching...
        </h1>

        <FeaturedMovie 
          movieId={featuredMovie.id} 
          title={featuredMovie.title}
          year={featuredMovie.year}
          shots={featuredMovie.titleShots}
          genres={featuredMovie.genres}
        />

        <section className="mb-9">
          <h2 className="text-gray-400 font-normal text-[14px] pb-1 border-b border-gray-500 mb-3">
            NEW
          </h2>
          <ul className="flex justify-between">
            <ReviewCard
              poster="/posters/solaris-1972-poster.jpg"
              avatar="/chris.jpg"
              rating={5}
              liked
            />

            <ReviewCard
              poster="/posters/donnie-darko-2001-poster.jpg"
              avatar="/dante.jpg"
              rating={2.5}
            />

            <ReviewCard
              poster="/posters/fight-club-1999-poster.jpg"
              avatar="/iamfuckhead.webp"
              rating={3.5}
            />

            <ReviewCard
              poster="/posters/mirror-1975-poster.jpg"
              avatar="/fignushka1.jpg"
              rating={1}
            />

            <ReviewCard
              poster="/posters/stalker-1979-poster.jpg"
              avatar="/kanye.webp"
              rating={4.5}
              liked
            />

            <ReviewCard
              poster="/posters/the-dark-knight-2008-poster.jpg"
              avatar="/goku-scary.jpg"
              rating={2.5}
            />
          </ul>
        </section>
        <section className="mb-9">
          <h2 className="text-gray-400 font-normal text-[14px] pb-1 border-b border-gray-500 mb-3">
            POPULAR WITH FRIENDS
          </h2>
          <ul className="flex justify-between">
            {movies.map((movie) => (
              <li key={movie.id}>
                <FilmPoster 
                  poster={movie.poster} 
                  movieId={movie.id.toString()} 
                />
              </li>
            ))}
          </ul>
        </section>
        <section className="pb-[100px]">
          <h2 className="text-gray-400 font-normal text-[14px] pb-1 border-b border-gray-500 mb-6">
            POPULAR REVIEWS THIS WEEK
          </h2>
          <ul className="columns-1 md:columns-2 gap-8">
            {popularReviews.map(review => (
              <li key={review.id} className="break-inside-avoid mb-6 pb-4 border-b border-[#4e5053] text-[#b8bcc3]">
                <div className="flex gap-4">
                  <img
                    src={movies.filter(movie => movie.id === review.movieId)[0].poster}
                    alt="Постер"
                    className="w-20 h-fit aspect-[2/3] object-cover rounded-sm border border-[#2d3030]"
                  />

                  <div className='flex-1 min-w-0'>
                    <h3 className="text-lg font-bold text-gray-200 mb-1">
                      {movies.filter(movie => movie.id === review.movieId)[0].title}

                      <span className='ml-2 text-sm font-normal text-gray-400'>
                        {movies.filter(movie => movie.id === review.movieId)[0].year}
                      </span>
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-4 text-[#00a83a]">
                      {review.rating && <Rating value={review.rating}/>}
                      {review.liked && <Heart size={14} fill="#db8441" className='text-[#db8441]'/>}
                    </div>

                    <p className='text-sm leading-relaxed text-gray-200 line-clamp-6'>
                      {review.text}
                    </p>
                  </div>
                </div>
              
                <div className="flex items-center gap-2 mt-4">
                  <div className='flex items-center gap-1 hover:text-gray-200 transition-colors'>
                    <Heart
                      aria-label="like"
                      size={16} 
                      className=""
                      fill="none"
                    />
                    <span className='text-sm font-bold'>
                      Like review
                    </span>
                  </div>
                    
                  <span className="text-xs text-gray-400">
                    {review.likes} likes
                  </span>
                  <img
                    src={review.avatar}
                    alt="Avatar"
                    className="ml-auto w-6 h-6 rounded-full"
                  />
                  <span className='text-sm'>
                    {review.username}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
