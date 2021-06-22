import axios from "./axios/axios";

export default class WorkingTimeService{
    getWorkingTime(){
        return axios.get("/workingtimes/getall");
    }
    addWorkingTime(values){
        return axios.post("/workingtimes/add",values);
    }
}