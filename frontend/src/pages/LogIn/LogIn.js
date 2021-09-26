import React from 'react';

// CSS
import './LogIn.css';

// Local Components
import post from './post';
import {StoreContext} from "../Audit/constantStore";

// MaterialUI Components
import {Link, makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';


// Background Components
import ParticlesBg from 'particles-bg';

// Formik Components
import {useFormik} from 'formik';
import * as yup from 'yup';

// Styles
const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
    },
});

const validationSchema = yup.object({ // Sign Up Validation
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .max(32, 'Password cannot be more than 32 characters')
        .required('Password is required')
});

const LogIn = () => {
    const storeConstants = React.useContext(StoreContext);
    // Style Variables
    const classes = useStyles();
    const paperStyle = {padding: '30px 20px', width: 300, margin: "50px auto"}

    // eslint-disable-next-line no-unused-vars
    const {auth, setAuth} = storeConstants

    const formik = useFormik({ // Initializing Formik
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            post(formik.values.email, formik.values.password, setAuth);
        },
    });

    return (
        <div className="loginPage">
            <Grow in="true" out="true">
                <form onSubmit={formik.handleSubmit} className="form">
                    <Grid>
                        <Grid alignContent='center' alignItems='center' justifyContent='center'>
                            <Paper elevation={24} style={paperStyle}>
                                <Grid align='center'>
                                    <div className="header">
                                        <h1>Log In</h1>
                                        <h4>Don't have an account? <Link href="http://localhost:3000/SignUp">Sign
                                            Up</Link>
                                        </h4>
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
                                <br/>
                                <Button color="primary" variant="contained" type="submit" fullWidth>
                                    Log In
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </form>
            </Grow>
            <ParticlesBg color="#ff4747" num={150} type="cobweb" bg={true}/> {/* Handles the background */}
        </div>
    );

}

export default LogIn