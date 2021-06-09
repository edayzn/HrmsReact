
import React, { useState ,useEffect} from 'react'
import CvService from '../../services/cvService'

export default function CvList() {
    const [cv, setCv] = useState(initialState)

    useEffect(()=>{
        let cvService= new CvService()
        cvService.getCv().then(result=>setCv(result.data.data))
    })
    return (
        <div>
            
        </div>
    )
}
