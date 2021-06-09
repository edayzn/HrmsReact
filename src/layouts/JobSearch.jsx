import React from 'react'
import {Input, Dropdown } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
export default function JobSearch() {
    return (
        <div>
             <div>
            <Grid columns='equal'>
                <Grid.Column width={3}>
                    <Dropdown  selection />
                </Grid.Column>
                <Grid.Column width={3}>
                    <div class="ui icon input">
                        <input type="text" placeholder="Search..." /><i aria-hidden="true" class="search circular link icon"></i></div>
                </Grid.Column>
            </Grid>
        </div>
        </div>
    )
}
