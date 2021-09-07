import axios from 'axios';

// Notifications
import { store } from 'react-notifications-component';
import 'animate.css/animate.min.css';

const post = (username, password) => {
    console.log('fired')

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


    axios.post('http://192.168.1.218:8000/auth/login/', body, config, {withCredentials: true})
    .then(res => {
        console.log(res)
        created()

    }).catch(err => {
        console.log(err)
        failed()
    })
}

export default post 