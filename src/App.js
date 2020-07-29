import React from 'react';
import './app.scss';

class App extends React.Component {

constructor(props) {
        super(props);
        this.state = { username: '' };
    }

    handleChange = (e) => {
        this.setState({username: e.target.value});
      }

 render() {
  return(
   <div>
    <h1>React Example</h1>
    <form>
    <span className="name">Name:</span>  
    <input
        type='text'
        onChange={this.handleChange}
      />
      <h4>Hiii Welcome {this.state.username}</h4>
      </form>
   </div>
  )
  }
}
export default App