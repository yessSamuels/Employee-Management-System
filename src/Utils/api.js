import axios from "axios";

export default {
    getUsers: function() {
        return axios.get("https://git.heroku.com/floating-earth-82469.git")
    }
}