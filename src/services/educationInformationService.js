import axios from "./axios/axios";

export default class EducationInformation {
    getAll() {
        return axios.get("/educationInformation/getAll")
    }
    add(values){
        return axios.post("/educationInformation/add",values)
    }
}
