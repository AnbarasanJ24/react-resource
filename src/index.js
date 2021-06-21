import React from 'react';
import ReactDOM from 'react-dom'
import SeasonsDisplay from './Seasons/SeasonsDisplay';
// import CommentDetails from './CommentDetails/CommentDetails';
// import Segment from './CommentDetails/Segment';

class App extends React.Component {
    constructor() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        )

    }

    render() {
        return (
            <SeasonsDisplay></SeasonsDisplay >
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