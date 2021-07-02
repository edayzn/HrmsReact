import axios from "./axios/axios";

export default class PersonelService{
    getAll(){
        return axios.get("/systemPersonel/getAll");
    }
    add(values){
        console.log(values);
        return axios.post("/systemPersonel/add",values);
    }
    update(values){
        return axios.post("systemPersonel/update",values);
    }
    getById(id){
         return axios.get(`systemPersonel/findByIdPersonel?userId=${id}`)
    }
}