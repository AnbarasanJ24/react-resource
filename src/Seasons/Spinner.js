import React from 'react';
import './Spinner.css';

const Spinner = (props) => {
    return (
        <div class="ui segment">
            <div class="ui active dimmer">
                <div class="ui big text loader">{props.message}</div>
            </div>
            <p></p>
        </div>
    );
};

Spinner.defaultProps = {
    message: "Please select location request"
}

export default Spinner;