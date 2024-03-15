import { Component } from "react";

class WatchItAgain extends Component {
  state = {
    films: [],
  };

  fetchMoviesHarryPotter = () => {
    fetch("http://www.omdbapi.com/?apikey=67927a3d&s=star%20trek")
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
              <img className="img-fluid h-100 object-fit-cover" src={film.Poster} alt={film.Title} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default WatchItAgain;
