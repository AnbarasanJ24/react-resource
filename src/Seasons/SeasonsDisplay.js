import React from 'react';
import './SeasonsDisplay.css'

const seasonConfig = {
    Winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake'
    },
    Summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    }
}

const getSeason = (lat, month) => {
    if (month > 3 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const SeasonsDisplay = ({ lat }) => {
    const month = new Date().getMonth() + 1;
    const season = getSeason(lat, month);
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>

        </div>
    );
};

export default SeasonsDisplay;