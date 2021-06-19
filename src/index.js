import React from 'react';
import ReactDOM from 'react-dom'
import CommentDetails from './CommentDetails';
import Segment from './Segment';

const App = () => {
    return (
        <Segment>
            <div className="ui container comments">
                <CommentDetails author="Anbu" time="Today" comment="Have a nice day!" />
            </div>
        </Segment>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));