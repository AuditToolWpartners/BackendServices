import React, {useState} from 'react';

// CSS
import './SignUp.css';

// Local Components
import post from './post';

// MaterialUI Components
import {Link, makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import CheckBox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
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
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    confirmPassword: yup
        .string('Confirm your password')
        .oneOf([yup.ref('password'), null], 'Passwords must match!'),

    policy: yup.boolean()
        .oneOf([true], "You must accept our Privacy policy."),
});

const SignUp = () => {
    // Style Variables
    const classes = useStyles();
    const paperStyle = {padding: '30px 20px', width: 300, margin: "50px auto"}
    // Policy Variables
    // eslint-disable-next-line no-unused-vars
    const [state, setState] = useState({policy: false})
    const {policy} = state;
    const error = [policy].filter((v) => v).length !== 2;

    const formik = useFormik({ // Initializing Formik
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            policy: false,
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            post(formik.values.email, formik.values.password)
        },
    });

    return (
        <div className="loginPage">
            <Grow in={true}>
                <form onSubmit={formik.handleSubmit} className="form">
                    <Grid>
                        <Grid alignContent='center' alignItems='center' justifyContent='center'>
                            <Paper elevation={24} style={paperStyle}>
                                <Grid align='center'>
                                    <div className="header">
                                        <h1>Sign Up</h1>
                                        <h4>Already a member? <Link href="http://localhost:3000/login">Log In</Link>
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

                                <TextField
                                    fullWidth
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                    className={classes.field}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <FormControl error={error}>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<CheckBox checked={state.checked} onChange={formik.handleChange}
                                                               name="policy"/>}
                                            label={<div>Do you accept our <Link href="http://localhost:3000/Privacy">Privacy
                                                Policy</Link>?</div>}
                                            labelPlacement="top"
                                        />
                                    </FormGroup>
                                    <FormHelperText>{formik.touched.policy && formik.errors.policy}</FormHelperText>
                                </FormControl>
                                <br/>
                                <Button color="primary" variant="contained" type="submit" fullWidth>
                                    Sign Up
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </form>
            </Grow>
            <ParticlesBg color="#ff4747" num={200} type="cobweb" bg={true}/> {/* Handles the background */}
        </div>

    );

}

export default SignUp;