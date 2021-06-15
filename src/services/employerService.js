
import axios from "axios"

export default class EmployerSercice{
    
    getEmployer(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }

    EmployerJobPostingAdd(values)
    {
        return axios.post("http://localhost:8080/api/employers/addadvertisement",values).then(response=>{
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        });
    }
}