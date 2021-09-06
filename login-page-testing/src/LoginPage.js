import React, { useState } from 'react';
import './LoginPage.css';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button'

const axios = require('axios').default;

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
      },
})


const submit = (username, password) => {

    const data = {
        username: username,
        password: password
    }

    axios.post('http://192.168.1.218:8000/auth/createuser/', data)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
         console.log(error)
    });
}

const LoginPage = () => {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="loginPage">
            <div className="header">
                <h1>Sign Up</h1>
                <h3>Already a member?</h3>
            </div>
            <TextField
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                color="primary"
                type="email"
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <TextField 
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                color="primary"
                type="password"
                className={classes.field}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button
                onClick={() => submit(email, password)}
                color="primary"
                variant="contained"
            >
                Sign Up
            </Button>
        </div>

    );

}

export default LoginPage;