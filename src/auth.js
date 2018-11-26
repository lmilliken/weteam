import axios from 'axios'

class Auth {
    constructor() {
        this.authenticated = false
    }

    signin(cb) {

        axios
            .get(`/auth/google`)
            .then((res) => {
                console.log({ res });
                res.send("from the app")
            })
            .catch((err) => console.log(err));
    }

    signout(cb) {
        this.authenticated = false;
        setTimeout(cb, 100);
    }

    isAuthenticated() {
        console.log("auth statuis: ", this.isAuthenticated);
        return this.authenticated
    }
};

export default new Auth()