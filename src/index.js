import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>Test</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// Task 1 -> Comment Details

// <Segment>
//     <div className="ui container comments">
//         <CommentDetails author="Anbu" time="Today" comment="Have a nice day!" />
//     </div>
// </Segment>

// Task 2 -> Seasons Display
// state = {
//     latitude: null,
//     errorMessage: ''
// }

// componentDidMount() {
//     console.log("Component Did Mount");
//     window.navigator.geolocation.getCurrentPosition(
//         position => this.setState({ latitude: position.coords.latitude }),
//         err => this.setState({ errorMessage: err.message })
//     )
// }

// componentDidUpdate() {
//     console.log("Component Update Mount")
// }

// renderBody() {

//     if (this.state.errorMessage && !this.state.latitude) {
//         return <h1>{this.state.errorMessage}</h1>;
//     }
//     if (!this.state.errorMessage && this.state.latitude) {
//         return <SeasonsDisplay lat={this.state.latitude} />
//     }
//     return <Spinner />
// }


// render() {
//     return (
//         <div className="border red">{this.renderBody()}</div>
//     );
// }