import React from 'react';
import * as yup from 'yup';
// CSS
import './SignUp.css';
import post from './post'

// MaterialUI Components
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import ParticlesBg from 'particles-bg'

// Formik Components
import { useFormik } from 'formik';


// Styles
const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
      },
})



// const signup = (username, password) => dispatch => {

//     //Headers
//     const config = {
//         headers: {
//             "Content-type": "application/json"
//         }
//     }

//     const body = JSON.stringify({ username, password })

//     axios.post('http://192.168.1.218:8000/auth/login/', body, config, {withCredentials: true})
//     .then(res => {
//         dispatch({
//             type: LOGIN_SUCCESS,
//             payload: res.data
//         })
//     }).catch(err => {
//         console.log(err)
//         dispatch({
//             type: LOGIN_FAIL
//         })
//     })
// }

const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .max(32, 'Password cannot be more than 32 characters')
      .required('Password is required')
    //   .matches(
    //     /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    //   ),
  });

const SignUp = () => {
    const classes = useStyles();
    const paperStyle = { padding: '30px 20px', width: 300, margin: "150px auto" }

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
          confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            post(formik.values.email, formik.values.password)
        },
      });

    return(
        <div className="loginPage">
            <form onSubmit={formik.handleSubmit} className="form">
                <Grid>
                    <Grid alignContent='center' alignItems='center' justifyContent='center'>
                        <Paper elevation={24} style={paperStyle}>
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
                            <Button color="primary" variant="contained" type="submit" fullWidth>
                                Sign Up
                            </Button>
                        </Paper>
                    </Grid>
            </Grid>
            </form>
                <ParticlesBg color="#ff4747" num={200} type="cobweb" bg={true} />
            </div>

    );

}

export default SignUp;