export type ReviewData = {
    id: number;
    username: string;
    avatar: string;
    movieId: number;
    rating: number | null;
    liked: boolean;
    text: string;
    date: number;
};