import { Result } from "../models/MovieLookup";
import "../css/MovieCard.css";
import { useContext, useState } from "react";
import ResultContext from "../context/OrderContext";
import OrderContext from "../context/OrderContext";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";


//Functionality for add delete button! Add to cards when ready

// import { Favorites } from "./Favorites";
// // import OrderContext from "../context/ResultContext";



// export interface IMovieSearchProps{
//   result:Result;
  
// }
// props:IMovieSearchProps
// let {result} = props;
// const { addResult, removeResult } = useContext(ResultContext);



interface IMovieCardProps {
  MovieResult: Result;
}

export function MovieCard(props: IMovieCardProps) {
  const{MovieResult} = props;
  const { addResult, removeResult } = useContext(OrderContext);

  return (
    <div className="MovieCards">



    <Container>



    
    <Row md={4} className="g-4">
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
    </Row>
    </Container>
    </div>
    // <div className ="row">
    // <div className="MovieCards">
    //   <div className="MovieCard">
    //     <img
    //       src={`https://image.tmdb.org/t/p/w500/${props.MovieResult.poster_path}`}
    //       alt={props.MovieResult.title}
    //     />
    //     <div className="Card-Info">
    //       <h2>{props.MovieResult.title}</h2>
          // <div className="Vote-Average"> {props.MovieResult.vote_average.toFixed(1)}</div>
          // <p>{props.MovieResult.overview}</p>
          
    //       <div>Language: {props.MovieResult.original_language}</div>
          
    //       <div>Release Date: {props.MovieResult.release_date}</div>
          

    //       {/* <div>{props.MovieResult}</div> */}
    //       {/* <div><button>Details</button></div> */}
          // <div><button onClick={() => addResult(MovieResult)}>Add</button></div>
          // <div><button onClick={() => removeResult(MovieResult.id)}>Remove</button></div>

    //       {/* <button onClick={() => removeResult(MovieResult)}>Remove</button> */}
          
    //     </div>
        
    //   </div>
      
    // </div>
    // </div>
    
  );
}
