
import axios from "axios"

export default class JobPositionSercice{
    getPosition(){
        return axios.get("http://localhost:8080/api/jobpositions/getall")
    }
}

