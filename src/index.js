import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>WARNING!!!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail image={faker.image.image()} author="Sam" date="Today at 4PM" text="Wow!"/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail image={faker.image.image()} author="Alex" date="Today at AM" text="Neato!"/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail image={faker.image.image()} author="Jane" date="Yesterday at 9PM" text="Great!"/>
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))
