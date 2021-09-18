import axios from 'axios';

// Notifications
import { store } from 'react-notifications-component';
import 'animate.css/animate.min.css';

// Cookies
import Cookies from 'js-cookie'

const post = (username, password) => {
    //Headers
    const config = {
        headers: {
            "Content-type": "application/json",
        }
    }

    const body = {
        username: username,
        password: password
    }

    const loggedIn = () => {
        store.addNotification({
            title: "Success!",
            message: "You've successfully logged into your account!",
            type: "success",
            container: "top-left",
            insert: "top",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 10000,
              onScreen: true
            }
          });
    }

    const failed = () => {
        store.addNotification({
            title: "Oops!",
            message: "Looks like you've supplied a wrong username or password, if you do not have an account you can create one!",
            type: "danger",
            container: "top-left",
            insert: "top",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 10000,
              onScreen: true
            }
          });
    }


    axios.post('http://localhost:8000/auth/login/', body, config, {withCredentials: true})
    .then(res => {
        console.log(res)
        loggedIn()
        Cookies.set('jwt', res.data['jwt'], { sameSite: 'lax' });
        axios.get('http://localhost:8000/auth/signedin/', {withCredentials: true})
        .then(res =>{
            console.log(res);
        }).catch(function (error) {
            console.log(error);
            failed();
            })
    }).catch(function (error) {
        console.log(error);
        failed();
    })
}

export default post 