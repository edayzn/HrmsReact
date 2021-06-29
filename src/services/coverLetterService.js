
import React from 'react'
import axios from './axios/axios';

export default class coverLetterService {
    getAll(){
        return axios.get("/coverletters/getAllCoverLetter")
    }
    add(values){
        return axios.post("/coverletters/addCoverLetter",values)
    }
    
}
