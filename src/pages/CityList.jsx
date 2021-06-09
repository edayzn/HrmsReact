import React from 'react'
import { Icon, Input, Dropdown } from 'semantic-ui-react'
import { Grid, Segment } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import CityService from "../services/cityService"
export default function CityList() {
    const [cities, setCity] = useState([])
 
    useEffect(() => {
       let cityService = new CityService();
       cityService.getCity().then(result=>setCity(result.data.data))
    })
   
    return (
        <div>
           
        </div>
    )
}
