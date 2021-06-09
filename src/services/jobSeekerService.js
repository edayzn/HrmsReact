import axios from "axios"

export default class JobSeekerSercice{
    getJobSeeker(){
        return axios.get("http://localhost:8080/api/jobseekers/getall")
    }
}