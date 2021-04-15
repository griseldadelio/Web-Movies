import React, { FC, useState, useEffect } from 'react';
import { movie } from '../../../services';
import { MovieType } from '../../../types';
import { Carousel, Card, CardGroup } from 'react-bootstrap';
import imageBaseUrl from "../../../utils/ImageBaseUrl";

interface Props {
    data?: MovieType,
}

export const CardCarousel: FC<Props> = () => {
    const [movies, setMovies] = useState<MovieType[]>();

    useEffect(() => {
        movie.getPopular().then((response) => {
            setMovies(response);
        })
    }, []);
    const lastMovies = movies && movies.slice(0, 5)
    const imgWith = "w1280"
    console.log(movies)

    return (
        <>
            <div>

            </div>
            <Carousel fade>
                <Carousel.Item>
                    <CardGroup>
                        {lastMovies && lastMovies.map((movie: MovieType) => (
                            <Card className='mt-5 m-2 bg-dark text-white'>
                                <img
                                    className="d-block w-100"
                                    src={imageBaseUrl + imgWith + movie.backdrop_path}
                                    alt="First slide"
                                />
                                <Card.Body>
                                    <Card.Title>{movie.original_title}</Card.Title>
                                    <Card.Text>
                                        {movie.vote_average}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                        }
                    </CardGroup>
                </Carousel.Item>
            </Carousel>
        </>
    );
};