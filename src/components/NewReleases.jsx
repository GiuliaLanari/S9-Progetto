import { Component } from "react";

class NewReleases extends Component {
  state = {
    films: [],
  };

  fetchMoviesHarryPotter = () => {
    fetch("http://www.omdbapi.com/?apikey=67927a3d&s=dragon%20ball")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problemi nel caricamento");
        }
      })
      .then((moviesObj) => {
        console.log(moviesObj.Search);
        this.setState({
          films: moviesObj.Search,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  componentDidMount() {
    this.fetchMoviesHarryPotter();
  }

  render() {
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {this.state.films.map((film) => {
          return (
            <div className="col mb-2 text-center px-1" key={film.imdbID}>
              <img className="img-fluid" src={film.Poster} alt={film.Title} />
            </div>
          );
        })}
      </div>

      // <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
      //   <div className="col mb-2 text-center px-1">
      //     <img className="img-fluid" src={"13.png"} alt="movie picture" />
      //   </div>
      //   <div className="col mb-2 text-center px-1">
      //     <img className="img-fluid" src={"14.png"} alt="movie picture" />
      //   </div>
      //   <div className="col mb-2 text-center px-1">
      //     <img className="img-fluid" src={"15.png"} alt="movie picture" />
      //   </div>
      //   <div className="col mb-2 text-center px-1">
      //     <img className="img-fluid" src={"16.png"} alt="movie picture" />
      //   </div>
      //   <div className="col mb-2 text-center px-1">
      //     <img className="img-fluid" src={"17.png"} alt="movie picture" />
      //   </div>
      //   <div className="col mb-2 text-center px-1">
      //     <img className="img-fluid" src={"18.png"} alt="movie picture" />
      //   </div>
      // </div>
    );
  }
}

export default NewReleases;
