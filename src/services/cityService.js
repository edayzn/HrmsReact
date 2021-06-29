import axios from "./axios/axios"
export default class CityService{
    getCity(){
        return axios.get("/cities/getAll")
    }
}