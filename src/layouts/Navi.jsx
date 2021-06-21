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
          <Menu.Item
            name='İş İlanı Ekle'
          />
          <Menu.Menu position='right'>
            <Button.Group>
              <Button>Sign Up</Button>
              <Menu.Item>
                <Button.Or text='Or' />
              </Menu.Item>
              <Button positive>Sign In</Button>
            </Button.Group>

          </Menu.Menu>
        </Container>

      </Menu>
    </div>
  )
}
