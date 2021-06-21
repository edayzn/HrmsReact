import axios from './axios/axios'

export default class JobPostingSercice {
  
  getJobPostings() {
    return axios.get("jobadvertisement/getall");
  }
  jobPostingAdd(values) {
    return axios.post("/jobadvertisement/add",values);
  }
}