import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Inconsolata', monospace;
  min-width: 30%;
  max-width: 350px;
  flex-grow: 1;
  margin: 0 5px 20px 5px;
  border: 2px solid lightblue;
  border-radius: 4px;
  text-align: center;
  font-style: italic;
`;
const Image = styled.img`
  border: 2px solid lightblue;
  float: left;
  margin-right: 20px;
`;

const Genre = styled.div`
  &:before {
    content: 'Genre: ';
    font-weight: bold;
    color: darkblue;
  }
  margin: 30px auto;
`;

const H2 = styled.h2`
  color: darkblue;
  &:visited {
    color: blue;
  }
  text-decoration: none;
`;
const MovieCard = props => {
  const { id, title } = props.movie;
  const imgSrc = `https://image.tmdb.org/t/p/w154/${props.movie.poster_path}`;
  return (
    <Wrapper className="movie-card">
      <Image src={imgSrc} alt={title} />
      <Link to={`/movie/${id}`} style={{ textDecoration: 'none' }}>
        <H2>{title}</H2>
      </Link>

    </Wrapper>
  );
};

export default MovieCard;