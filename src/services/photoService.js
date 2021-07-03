import axios from "./axios/axios";

export default class PhotoService{
    getById(userId){
        return axios.get(`/photo/findByIdPhoto?userId=${userId}`)
    }
}