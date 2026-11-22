import { useState } from 'react';
import { FeaturedMovie } from '../components/FeaturedMovie';
import { FilmPoster } from '../components/FilmPoster';
import { Rating } from '../components/Rating';
import { ReviewCard } from '../components/ReviewCard';
import { movies } from '../data/movies';

export const HomePage = () => {
  const [featuredMovie] = useState(() => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  });

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
          <h2 className="text-gray-400 font-normal text-[14px] pb-1 border-b border-gray-500 mb-3">
            POPULAR REVIEWS THIS WEEK
          </h2>
          <li className="w-[450px] mx-[15px] mb-[32px] pb-[20px] border-b border-[#7E8185] text-[#b8bcc3]">
            <div className="mb-[20px] flex">
              <img
                src="/posters/the-dark-knight-2008-poster.jpg"
                alt="Постер"
                className="w-[75px] h-[112px] mr-[20px]"
              />
              <div>
                <div className="flex gap-2">
                  <img
                    src="/chris.jpg"
                    alt="Avatar"
                    className="w-[24px] h-[24px] rounded-full "
                  />
                  <span className="">empathy</span>
                </div>
                <div>
                  <div className="flex flex-column items-center gap-2">
                    <h1 className="text-2xl font-bold my-[10px]">The Dark Knight</h1>
                    <span>1979</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="text-[#00E054]">
                    <Rating value={4} />
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-[#FF9010]">
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
           2 5.42 4.42 3 7.5 3
           c1.74 0 3.41.81 4.5 2.09
           C13.09 3.81 14.76 3 16.5 3
           19.58 3 22 5.42 22 8.5
           c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <div>Бетмен придурок он не может защитить готем а вот жокир крутой он загадочный он гребаный циник</div>
              <div className="flex gap-2 items-center mt-[16px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#8c8f93]">
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
           2 5.42 4.42 3 7.5 3
           c1.74 0 3.41.81 4.5 2.09
           C13.09 3.81 14.76 3 16.5 3
           19.58 3 22 5.42 22 8.5
           c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
                <span>like review</span>
                <span className="text-sm font-light">10 likes</span>
              </div>
            </div>
          </li>
        </section>
      </div>
    </div>
  );
};
