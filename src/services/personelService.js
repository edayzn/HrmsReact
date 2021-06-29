import axios from "./axios/axios";

export default class PersonelService{
    getAll(){
        return axios.get("/systemPersonel/getAll");
    }
    add(values){
        return axios.post("/systemPersonel/add",values);
    }
}