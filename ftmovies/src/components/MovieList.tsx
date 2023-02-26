import * as React from "react";
import { useState, FormEvent } from "react";

import { Result } from "../models/MovieLookup";
import { MovieCard } from "./MovieCard";
import { SearchForm } from "./SearchForm";

export function MovieList() {
  const [movieLists, setMovieLists] = useState<Result[]>([]);
  //TO DO write a callback function to end to the child search form

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setMovieLists(movieLists);
  };
  //callback function
  function UpdateMovies(movielist: Result[]) {
    console.log(movielist);
    setMovieLists([...movielist]);
  }
  //callback function also added line 24

  return (
    <div className="MovieList" onSubmit={(e) => onSubmit(e)}>
      <SearchForm UpdateMovies={UpdateMovies} />

      <ul className="">
        {movieLists.map((movie) => (
          <MovieCard key={movie.id} MovieResult={movie} />
        ))}
      </ul>
    </div>
  );
}
{/* <Row xs={1} md={2} className="g-4">
{Array.from({ length: 1 }).map((_, idx) => (
  <Col>
    <Card>
      <Card.Img variant="top"src={`https://image.tmdb.org/t/p/w500/${props.MovieResult.poster_path}`}
                alt={props.MovieResult.title} />
      <Card.Body>
      
        <Card.Title><h2 className="">{props.MovieResult.title}</h2></Card.Title>
        <Card.Text>
        <div className="Vote-Average"> {props.MovieResult.vote_average.toFixed(1)}</div>
        </Card.Text>
        <Card.Text>
        <p className="Movie-Overview">{props.MovieResult.overview}</p>
        <button onClick={() => addResult(MovieResult)}>Add</button>
       <button onClick={() => removeResult(MovieResult.id)}>Remove</button>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
))}
</Row> */}