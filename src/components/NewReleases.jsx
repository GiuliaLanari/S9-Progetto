import { Component } from "react";

class NewReleases extends Component {
  render() {
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        <div className="col mb-2 text-center px-1">
          <img className="img-fluid" src={"13.png"} alt="movie picture" />
        </div>
        <div className="col mb-2 text-center px-1">
          <img className="img-fluid" src={"14.png"} alt="movie picture" />
        </div>
        <div className="col mb-2 text-center px-1">
          <img className="img-fluid" src={"15.png"} alt="movie picture" />
        </div>
        <div className="col mb-2 text-center px-1">
          <img className="img-fluid" src={"16.png"} alt="movie picture" />
        </div>
        <div className="col mb-2 text-center px-1">
          <img className="img-fluid" src={"17.png"} alt="movie picture" />
        </div>
        <div className="col mb-2 text-center px-1">
          <img className="img-fluid" src={"18.png"} alt="movie picture" />
        </div>
      </div>
    );
  }
}

export default NewReleases;