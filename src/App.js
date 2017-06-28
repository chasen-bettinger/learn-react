import React from 'react';


// Class can have states, functionless component cannot
class App extends React.Component {

    constructor() {
      super(); // Going to give the keyword this the context within our component rather than its part class React.Component
      this.state = {
        text: "this is the state text"
      }
    }

    update(e) {
      console.log(e);
      this.setState({text: e.target.value})
    }

    render() {

      let text = this.props.text;

      return (

        <div>

          <h1>{this.state.text}</h1>
          <Widget update={this.update.bind(this)} />
          <b>Nice</b>
        </div>
      )
    }
}

const Widget = (props) =>  <input type="text" onChange={props.update}/>

App.propTypes = {
  text: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  text: "this is the default text"
}

// Example of a functionless component
// const App = () => <h1>Hello World</h1>

export default App
