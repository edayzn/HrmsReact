
import axios from "axios"

export default class EmployerSercice {


    getEmployer() {
        return axios.get("http://localhost:8080/api/employers/getall")
    }

    

} 

