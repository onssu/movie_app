import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const movies =  await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    console.log(movies);
  }//await async 우린 시간이 필요해 , 항상 짝이 맞아야함

  componentDidMount(){//렌더 되자마자 호출
    this.getMovies();
  }

  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>
  }
}

export default App;
