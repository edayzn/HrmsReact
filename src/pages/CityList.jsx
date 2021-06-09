import React from 'react'
import { Icon, Input, Dropdown } from 'semantic-ui-react'
import { Grid, Segment } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import CityService from "../services/cityService"
export default function CityList() {
    const [cities, setCity] = useState([])

    useEffect(() => {
        let cityService = new CityService();
        cityService.getCity().then(result => setCity(result.data.data))
    })

    return (
        <div>
            <Grid columns='equal'>
                <Grid.Column width={3}>
                    <Dropdown clearable options={cities.ctyName} selection />
                </Grid.Column>
                <Grid.Column width={3}>
                    <div class="ui icon input">
                        <input type="text" placeholder="Search..." /><i aria-hidden="true" class="search circular link icon"></i></div>

                </Grid.Column>
            </Grid>
        </div>
    )
}
