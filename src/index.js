import React from 'react';
import ReactDOM from 'react-dom'
import SeasonsDisplay from './Seasons/SeasonsDisplay';
import Spinner from './Seasons/Spinner';
// import CommentDetails from './CommentDetails/CommentDetails';
// import Segment from './CommentDetails/Segment';

class App extends React.Component {

    state = {
        latitude: null,
        errorMessage: ''
    }

    componentDidMount() {
        console.log("Component Did Mount");
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ latitude: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        )
    }

    componentDidUpdate() {
        console.log("Component Update Mount")
    }


    render() {

        if (this.state.errorMessage && !this.state.latitude) {
            return <h1>{this.state.errorMessage}</h1>;
        }
        if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonsDisplay lat={this.state.latitude} />
        }
        return <Spinner />

    }
}

ReactDOM.render(<App />, document.getElementById('root'));




// Task 1 -> Comment Details

// <Segment>
//     <div className="ui container comments">
//         <CommentDetails author="Anbu" time="Today" comment="Have a nice day!" />
//     </div>
// </Segment>