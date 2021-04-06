import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    limit: 4,
    offset: 1,
  };

  _infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );

    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );

    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      setTimeout(() => {
        this.setState({ offset: this.state.offset + 1 });
      }, 500);
      this.getMovies();
    }
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false }); //movies 생략가능
  }; //await async 우린 시간이 필요해 , 항상 짝이 맞아야함

  componentDidMount() {
    //렌더 되자마자 호출
    this.getMovies();
    window.addEventListener("scroll", this._infiniteScroll, true);
  }

  render() {
    const { isLoading, movies, limit, offset } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.slice(0, limit + offset * 2).map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
