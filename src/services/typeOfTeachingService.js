import axios from "./axios/axios";

export default class TypeOfTeachingService{
    getAll(){
        return axios.get("socialAccount/getAll")
    }
    add(values){
        return axios.post("socialAccount/add",values)
    }
}