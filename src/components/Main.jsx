import TrendingNow from "./TrendingNow";
import WatchItAgain from "./WatchItAgain";
import NewReleases from "./NewReleases";

const Main = function () {
  return (
    <div style={{ backgroundColor: "#221f1f" }}>
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="btn-group" role="group">
              <div className="dropdown ms-4 mt-1">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "#221f1f" }}
                >
                  Genres
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#dropdown">
                      Comedy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#dropdown">
                      Drama
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#dropdown">
                      Thriller
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <i className="bi bi-grid icons"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>
        <h4>Trending Now</h4>
        <TrendingNow />
        <h4>Watch it Again</h4>
        <WatchItAgain />
        <h4>New Releases</h4>
        <NewReleases />
      </div>
    </div>
  );
};

export default Main;
