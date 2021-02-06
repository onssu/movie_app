import React from 'react';
import Proptypes from 'prop-types';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false});
    },6000);
  }

  render(){
    return (
      <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
    );

    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>
  
  }
}

export default App;
