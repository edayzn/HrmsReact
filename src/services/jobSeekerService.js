import axios from "./axios/axios"

export default class JobSeekerSercice{
    getJobSeeker(){
        return axios.get("/jobseekers/getall")
    }
    getComputerSkill(){
        return axios.get("/jobseekers/getAllComputerSkill")
    }
    addComputerSkill(values){
        return axios.post("/jobseekers/addComputerSkill")
    }
}