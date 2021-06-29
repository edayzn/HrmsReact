import axios from "./axios/axios"

export default class JobSeekerSercice{
    getJobSeeker(){
        return axios.get("/jobseekers/getall")
    }
    
}