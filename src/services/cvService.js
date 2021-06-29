import axios from "./axios/axios"
export default class CvService{
    getCv(){
        return axios.get("/cv/getAll")
    }
    addCv(values){
        return axios.post("/cv/add",values)
    }
}