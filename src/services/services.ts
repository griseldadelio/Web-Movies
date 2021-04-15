import { MovieType, VideoType } from '../types'
import { api } from '../utils';

type MoviesResponse = {
    page: number;
    results: MovieType[];
    total_pages: number;
    total_results: number;
}

const getNowPlaying = async (): Promise<MovieType[]> => {
    const { data } = await api.get<MoviesResponse>('/movie/now_playing')
    console.log(data.results)
    return data.results
}

const getPopular = async (): Promise<MovieType[]> => {
    const { data } = await api.get<MoviesResponse>('/movie/popular')
    console.log(data.results)
    return data.results;
};

const getTopRated = async (): Promise<MovieType[]> => {
    const { data } = await api.get<MoviesResponse>('/movie/top_rated')
    console.log(data.results)
    return data.results;
};


const getId = async (id: string) => {
    const data = await api.get<MovieType>('/movie/' + id)
    return data.data;
};

const getSearch = async (query: string): Promise<MovieType[]> => {
    const { data } = await api.get<MoviesResponse>('search/movie?query=' + query)
    return data.results;
};

const getVideo = async (id: string) => {
    const data = await api.get<VideoType>('/movie/' + id + '/videos')
    return data.data;

};

export const movie = { getNowPlaying, getPopular, getTopRated, getId, getSearch, getVideo }