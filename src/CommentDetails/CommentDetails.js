import React from 'react';
import faker from 'faker';

const CommentDetails = ({ author, time, comment }) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="Avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">{author}</a>
                <div className="metadata">
                    <span className="date">{time}</span>
                </div>
                <div className="text">{comment}</div>
            </div>
        </div>
    );
};

export default CommentDetails;