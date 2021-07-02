import axios from './axios/axios'

export default class JobPostingService {

  getJobPostings() {
    return axios.get("jobadvertisement/getall");
  }
  jobPostingAdd(values) {
    return axios.post("/jobadvertisement/add", values);
  }
  getCityId(cityId) {
    return axios.get(`/jobadvertisement/cityId?cityId=${cityId}`);
  }
  getWorkingId(workingId) {
    return axios.get(`/jobadvertisement/workingTimeId?workingId=${workingId}`)
  }
  getCityIdAndWorkingTimeId(cityId, workingId) {
    return axios.get(`/jobadvertisement/cityIdAndWorkingTimeId?cityId=${cityId}&workingId=${workingId}`);
  }
  getPage(pageNo, pageSize) {
    return axios.get(`/jobadvertisement/pageNoAndPageSize?pageNo=${pageNo}&pageSize=${pageSize}`);
  }
  getActiveJobPosting(){
    return axios.get("/jobadvertisement/findallActive");
  }
}