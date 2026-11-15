import { useParams } from "react-router";
import { movies } from "../data/movies";
import { RatingInput } from "../components/RatingInput";
import { Review } from "../components/Review";
import { reviews } from "../data/reviews";
import { useEffect, useState, type FormEvent } from "react";
import type { ReviewData } from "../types/ReviewData";

export const MoviePage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { movieId } = useParams();
    const [reviewText, setReviewText] = useState("");
    const [myRating, setMyRating] = useState<number | null>(null);
    const [liked, setLiked] = useState(false);
    
    const [savedReviews, setSavedReviews] = useState<ReviewData[]>([]);
    useEffect(() => {
        const storageReviews = localStorage.getItem("reviews");
        if (storageReviews != null) {
            setSavedReviews(JSON.parse(storageReviews));
        }
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('reviews', JSON.stringify(savedReviews));
        }
    }, [savedReviews, isLoaded])

    const movie = movies.find(
        (movie) => movie.id === Number(movieId)
    );

    if (!movie) {
        return <div>Movie not found</div>;
    }

    const movieReviews = reviews.filter(
        (review) => review.movieId === movie.id
    )

    const allReviews = [
        ...movieReviews,
        ...savedReviews.filter((review) => review.movieId === movie.id),
    ];

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!reviewText.trim()) return;

        const newReview = {
            id: savedReviews.length + 1,
            username: "user",
            avatar: "/kanye.webp",
            movieId: Number(movieId),
            rating: myRating,
            liked: false,
            text: reviewText,
            date: Date.now()
        };

        setSavedReviews((previousReviews) => [
            ...previousReviews,
            newReview,
        ]);
        setReviewText("");
    }

    const handleDeleteReview = (id: number) => {
        setSavedReviews(prewiousReviews => prewiousReviews.filter(review => review.id !== id));
    }

  return (
    <div className="min-h-main bg-[#14181d] text-[#f2f4f7]">
        <div className="max-w-[950px] mx-auto py-16">
            <div className="grid grid-cols-[200px_minmax(0,1fr)] gap-8">
                <div>
                    <img 
                        src={movie.poster} 
                        alt={movie.title} 
                        className="w-full object-cover" 
                    />
                </div>
                <div className="min-w-0">
                    <div className="flex gap-6">
                        <div className="flex-1 min-w-0">

                            <div className="flex items-baseline gap-3">
                                <h1 className="text-3xl font-bold font-film">
                                    {movie.title}
                                </h1>
                                <p className="text-gray-400">
                                    {movie.year}
                                </p>
                                <p className="text-gray-200">
                                    {movie.director}
                                </p>
                            </div>
                            
                            <p className="my-6 text-[16px] text-gray-400 font-primary">
                                {movie.description}
                            </p>
                        </div>
                        <div className="shrink-0">
                            <RatingInput movieRating={myRating} setMovieRating={setMyRating} liked={liked} setLiked={setLiked}/>
                        </div>
                    </div> 
                    <div className="mb-6">
                        <label
                            htmlFor="review"
                            className="mb-2 block text-sm text-gray-300"
                        >
                            Write a review
                        </label>
                        <form onSubmit={handleSubmit}>
                            <textarea 
                                value={reviewText}
                                onChange={(event) => setReviewText(event.target.value)}
                                id="review"
                                placeholder="What do you think?"
                                rows={5}
                                className="
                                    w-full 
                                    resize-y 
                                    rounded-md 
                                    border 
                                    border-[#3b4149] 
                                    bg-[#1b2027] 
                                    p-4 
                                    text-sm 
                                    text-[#f2f4f7] 
                                    placeholder:text-gray-500 
                                    focus:border-gray-500 
                                    focus:outline-none
                                "
                            />
                            <button type="submit" className="px-2 py-2 text-gray-300">
                                Post review
                            </button>
                        </form>
                        
                    </div>
                    <h2 className="text-gray-400 font-normal text-[14px] pb-1 border-b border-gray-500 mb-5">
                        REVIEWS
                    </h2>
                    <div className="flex flex-col gap-8">
                        {allReviews.length > 0 ? (
                            allReviews.map((review) => 
                                <Review
                                    key={review.id}
                                    id={review.id}
                                    avatar={review.avatar}
                                    username={review.username}
                                    rating={review.rating}
                                    liked={review.liked}
                                    text={review.text}
                                    date={review.date}
                                    onDelete={() => handleDeleteReview(review.id)}
                                />
                            )
                        ) : (
                            <div className="text-gray-400 mx-auto mt-10">
                                This film has no reviews yet
                            </div>
                        )}
                    </div>                  
                </div> 
            </div>
        </div>
    </div>
  )
}
