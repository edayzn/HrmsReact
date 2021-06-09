import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
export default function Nive() {
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                <Menu.Item
          name='HRMS'
        />
        <Menu.Item
          name='İş Ara'
        />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
          <Menu.Item>
          <Button primary>Sign In</Button>
          </Menu.Item>
        </Menu.Menu>
                </Container>
        
      </Menu>
        </div>
    )
}
