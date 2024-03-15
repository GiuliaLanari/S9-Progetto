import { Component } from "react";

class TrendingNow extends Component {
  state = {
    Search:[]
  };

  fetchMoviesHarryPotter = () => {
    fetch("www.omdbapi.com/?apikey=67927a3d&s=harry%20potter")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problemi nel caricamento");
        }
      })
      .then((moviesArr) => {
        this.setState({
            Search: moviesArr
        })
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

        {
            this.props.state.map((film)=>{
                return (
                <div className="col mb-2 text-center px-1">
                    <img className="img-fluid" src={this.props.film.Poster} alt={this.props.film.Title} />
                </div>
                )
            })
        }



        {/* <div className="col mb-2 text-center px-1">
          <img className="img-fluid" src={"1.png"} alt="movie picture" />
        </div>
        <div className="col mb-2 text-center px-1">
          <img className="img-fluid" src={"2.png"} alt="movie picture" />
        </div>
        <div className="col mb-2 text-center px-1">
          <img className="img-fluid" src={"3.png"} alt="movie picture" />
        </div>
        <div className="col mb-2 text-center px-1">
          <img className="img-fluid" src={"4.png"} alt="movie picture" />
        </div>
        <div className="col mb-2 text-center px-1">
          <img className="img-fluid" src={"5.png"} alt="movie picture" />
        </div>
        <div className="col mb-2 text-center px-1">
          <img className="img-fluid" src={"6.png"} alt="movie picture" /> */}
        </div>
      </div>
    );
  }
}

export default TrendingNow;
