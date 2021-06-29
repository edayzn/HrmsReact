import axios from "./axios/axios";

export default class UniversityService{
    getAll(){
        return axios.get("universities/getAll")
    }
}