import React from 'react';
import './Spinner.css';

const Spinner = () => {
    return (
        <div class="ui segment">
            <div class="ui active dimmer">
                <div class="ui big text loader">Loading</div>
            </div>
            <p></p>
        </div>
    );
};

export default Spinner;