import axios from "axios";

export default axios.create({
  baseURL: "http://91.222.239.151:8000/api/v1",
  headers: {
    "Content-type": "application/json"
  }
});