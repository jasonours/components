import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail image={faker.image.image()} author="Sam" date="Today at 4PM" text="Wow!"/>
            <CommentDetail image={faker.image.image()} author="Alex" date="Today at AM" text="Neato!"/>
            <CommentDetail image={faker.image.image()} author="Jane" date="Yesterday at 9PM" text="Great!"/>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))