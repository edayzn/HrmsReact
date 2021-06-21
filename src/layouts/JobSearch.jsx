import React, { useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import CityService from "../services/cityService.js"
export default function JobSearch() {

    const [cities, setCity] = useState([])
  
    useEffect(() => {
        let cityService = new CityService()
        cityService.getCity().then(result => setCity(result.data.data))
    }, [])

  
    const getCities = cities.map((city, index) => ({
        key: index,
        text: city.ctyName,
        value: city.cityId,
    }));
    return (
        <div>
            <div>

                <Grid columns='equal'>
                    <Grid.Column width={3}>
                    <div className="divStyle">
                                <Dropdown
                                    style={{
                                        marginRight: "1em",
                                        marginTop: "1em",
                                        fontWeight: "lighter",
                                    }}
                                    button
                                    placeholder="Şehir Seçiniz..."
                                    fluid
                                    search
                                    selection
                                    id="id"
                                    options={getCities}                          
                                />
                            </div>


                    </Grid.Column>

                    <Grid.Column width={3}>
                    <div className="divStyle"
                    style={{
                        marginRight: "1em",
                        marginTop: "1em",
                        fontWeight: "lighter",
                    }}
                    >
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." /><i aria-hidden="true" className="search circular link icon"></i>
                        </div>
                        </div>  
                    </Grid.Column>
                </Grid>

            </div>
        </div>
    )
}

