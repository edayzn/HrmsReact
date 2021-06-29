import axios from "./axios/axios";

export default class FacultyService{
    getAll(){
        return axios.get("/faculties/getAll")
    }
}