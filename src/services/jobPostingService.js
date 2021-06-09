import axios from "axios"

export default class JobPostingSercice{
    getJobPostings(){
        return axios.get("http://localhost:8080/api/jobadvertisement/getall")
    }
}