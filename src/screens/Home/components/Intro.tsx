import React, { FC, useState, useEffect } from 'react';
import { movie } from '../../../services';
import { MovieType } from '../../../types';
import { Carousel } from 'react-bootstrap';
import imageBaseUrl from "../../../utils/ImageBaseUrl";
import './index.css'

interface Props {
    data?: MovieType,
}

export const Intro: FC<Props> = () => {
    const [movies, setMovies] = useState<MovieType[]>();

    useEffect(() => {
        movie.getPopular().then((response) => {
            setMovies(response);
        })
    }, []);


    const lastMovies = movies && movies.slice(0, 10)
    const imgWith = "w1280"
    console.log(movies)

    return (
        <Carousel fade>
            {lastMovies && lastMovies.map((movie: MovieType) => (
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block w-100"
                        src={imageBaseUrl + imgWith + movie.backdrop_path}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{movie.original_title}</h3>
                        <p>{movie.overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))
            }
        </Carousel>
    );
};

