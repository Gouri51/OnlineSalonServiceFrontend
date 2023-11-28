import axios from "axios";
export default axios.create(
    {
        baseURL:"http://localhost:8095/v1/",
        header:{
            "Content-type":"application/json"
        }
    }
);