import axios from 'axios'

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

    axios.post('http://192.168.1.218:8000/auth/login/', body, config, {withCredentials: true})
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}

export default post