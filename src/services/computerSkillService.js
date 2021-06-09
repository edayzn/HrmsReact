import axios from "axios"

export default class ComputerSkillSercice{
    getComputerSkill(){
        return axios.get("http://localhost:8080/api/jobseekers/getAllComputerSkill")
    }
}