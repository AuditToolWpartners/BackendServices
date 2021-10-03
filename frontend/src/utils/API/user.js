import axios from 'axios';
import Cookies from "js-cookie";

const global = {}

axios.get('http://192.168.227.21:8000/auth/signedin/')
    .then(res => {
        global.res = res
        console.log(res);
    }).catch(function (error) {
        console.log(error);
    })

export const user = {
    getUserCookie: Cookies.get("jwt"),
    getUserID: global.res.data['id']
}

export default user;