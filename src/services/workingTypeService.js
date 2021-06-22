import axios from "./axios/axios";

export default class WorkingTpyeService{
    getworkingType(){
        return axios.get("/workingtype/getall");
    }
    workingTypeAdd(values){
        return axios.post("/workingtype/add", values);
    }
}