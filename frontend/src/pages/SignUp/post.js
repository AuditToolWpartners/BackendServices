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

    const created = () => {
        store.addNotification({
            title: "Success!",
            message: "You've successfully created your account!",
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
            message: "Looks like you've already got an account, try logging in!",
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


    axios.get('http://192.168.227.18:8000/auth/singedin/', body, config, {withCredentials: true})
    .then(res => {
        console.log(res)
        created()
        Cookies.set('jwt', res.data['jwt'], { sameSite: 'lax' });
    }).catch(function (error) {
        console.log(error)
        failed()
    })
}

export default post 