import React from 'react';
import * as yup from 'yup';
// CSS
import './LoginPage.css';

// MaterialUI Components
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ParticlesBg from 'particles-bg'

// Formik Components
import { useFormik } from 'formik';

// Axios Declaration
const axios = require('axios').default;

// Styles
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

const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .max(32, 'Password cannot be more than 32 characters')
      .required('Password is required')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });

const LoginPage = () => {
    const classes = useStyles();
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            console.log(formik.values.email)
            submit(formik.values.email, formik.values.password)
        },
      });

    return(
        <div className="loginPage">
            <form onSubmit={formik.handleSubmit} classaName="form">
                <Grid>
                    <Paper elevation={20} style={paperStyle}>
                        <Grid align='center'>
                            <div className="header">
                                <h1>Sign Up</h1>
                                <h3>Already a member?</h3>
                            </div>
                        </Grid>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}      
                            className={classes.field}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField 
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            className={classes.field}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Button color="primary" variant="contained" type="submit">
                            Sign Up
                        </Button>
                    </Paper>
            </Grid>
            </form>
                <ParticlesBg color="#ff4747" num={200} type="cobweb" bg={true} />
            </div>

    );

}

export default LoginPage;