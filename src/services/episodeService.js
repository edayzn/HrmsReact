import axios from "./axios/axios";

export default class EpisodeService{
    getAll(){
        return axios.get("/episodes/getAll")
    }
}