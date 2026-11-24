export type ReviewData = {
    id: number;
    username: string;
    avatar: string;
    movieId: number;
    rating?: number;
    liked: boolean;
    text: string;
    date: number;
    likes: number;
};