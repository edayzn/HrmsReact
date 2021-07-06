import axios from "./axios/axios";

export default class TypeOfTeachingService{
    getAll(){
        return axios.get("typeOfTeaching/getAll")
    }
    add(values){
        return axios.post("typeOfTeaching/add",values)
    }
}