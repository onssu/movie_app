import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } =  await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});//movies 생략가능
  };//await async 우린 시간이 필요해 , 항상 짝이 맞아야함

  componentDidMount(){//렌더 되자마자 호출
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." 
        : movies.map(movie =>(
          <Movie 
            key={movie.id}
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
          />
          ))}
      </div>
    );
  }
}

export default App;
