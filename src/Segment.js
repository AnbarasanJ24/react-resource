import React from 'react';

const Segment = ({ children }) => {
    return (
        <div className="ui placeholder segment">
            {children}
            <button class="ui primary button" >Accept</button>
        </div>
    );
};

export default Segment;