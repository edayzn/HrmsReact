import axios from "./axios/axios";

export default class EpisodeLevelService{
    getAll(){
        return axios.get("/educationLevel/getAll")
    }
}