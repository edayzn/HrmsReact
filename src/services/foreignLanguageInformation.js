import axios from "./axios/axios";

export default class ForeignLanguageInformation{
    getAll(){
        return axios.get("languageInformation/getAll")
    }
    add(values){
        return axios.post("languageInformation/add",values)
    }
    update(){
        return axios.post("languageInformation/update")
    }
}