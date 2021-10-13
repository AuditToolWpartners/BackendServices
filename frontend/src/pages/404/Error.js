import React from 'react';
import './Error.css';
import Grow from '@material-ui/core/Grow';

const Error = () => {
    return (
        <Grow in="true" out="true">
            <body>
            <div id={"title"}>
                <h1>404</h1>
            </div>
            <div id={"subtext"}>
                <p>Oh no!<br/>
                    We can't find the page you're looking for!<br/>
                </p>
            </div>
            </body>
        </Grow>
    )
}

export default Error;