import axios from "./axios/axios"
export default class CvService{
    getCv(){
        return axios.get("/cv/getAll")
    }
    addCv(values){
        return axios.post("/cv/add",values)
    }
    getUserId(userId){
        return axios.get(`cv/findByJobSekerId?userId=${userId}`)
    }
    getUserIdCv(userId)
    {
        return axios.get(`cv/findByCvJobSeekerId?userId=${userId}`)
    }
}