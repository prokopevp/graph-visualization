import axios from "axios";
import { store } from "../store/Store";

const apiAxios = axios.create()

if (window.location.protocol + "//" + window.location.host === "http://localhost:3000") {
  apiAxios.defaults.baseURL = "http://localhost:8000/api";
} else {
  apiAxios.defaults.baseURL = `${window.location.protocol}//${window.location.host}/api`
}

apiAxios.interceptors.response.use(
    res => res,
    err => {
        console.log(err)
        if (err.response.status == 404) {
            window.location.href = window.location.protocol + "//" + window.location.host + '/*'
        }

        return err
    }


)

export { apiAxios };