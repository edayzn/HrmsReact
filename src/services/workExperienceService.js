import axios from "./axios/axios";

export default class WorkExperienceService{
    getAll(){
        return axios.get("workExperiences/getAll")
    }
    add(values){
        return axios.post("workExperiences/add",values)
    }
}