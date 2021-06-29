import axios from "./axios/axios"

export default class ComputerSkillSercice{
    getComputerSkill(){
        return axios.get("/computerSkill/getAllComputerSkill")
    }
    addComputerSkill(values){
        return axios.post("/computerSkill/addComputerSkill",values)
    }
   
}