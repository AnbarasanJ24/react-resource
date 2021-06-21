import React from 'react';
import ReactDOM from 'react-dom'
import SeasonsDisplay from './Seasons/SeasonsDisplay';
// import CommentDetails from './CommentDetails/CommentDetails';
// import Segment from './CommentDetails/Segment';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: null
        }
    }

    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ latitude: position.coords.latitude })
            },
            err => console.log(err)
        )
        return (
            <div>
                <h1>Lat : {this.state.latitude}</h1>
                <SeasonsDisplay></SeasonsDisplay >
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));




// Task 1 -> Comment Details

// <Segment>
//     <div className="ui container comments">
//         <CommentDetails author="Anbu" time="Today" comment="Have a nice day!" />
//     </div>
// </Segment>