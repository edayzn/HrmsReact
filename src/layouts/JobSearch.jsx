import React, { useEffect, useState } from 'react'
import { Select } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import CityService from "../services/cityService.js"
export default function JobSearch() {

    const [city, setCity] = useState([])
  
    useEffect(() => {
        let cityService = new CityService()
        cityService.getCity().then(result => setCity(result.data.data))
    }, [])

  
    const cityItems = city.map((city) =>
        <option key={city.cityId}>
            {city.ctyName}
        </option>
    )
    return (
        <div>
            <div>

                <Grid columns='equal'>
                    <Grid.Column width={3}>
                        <Select placeholder='Select your country' options={cityItems} />


                    </Grid.Column>

                    <Grid.Column width={3}>
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." /><i aria-hidden="true" className="search circular link icon"></i>
                        </div>
                    </Grid.Column>
                </Grid>

            </div>
        </div>
    )
}

