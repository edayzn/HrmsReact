import React,{useState} from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
export default function Nive() {
const [isAuthenticated, setIsAuthenticated] = useState(true)

function handleSignOut(params) {
  setIsAuthenticated(false)
}
function handleSignIn(params) {
  setIsAuthenticated(true)
}
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name='HRMS'/>
          <Menu.Item name='İş Ara'/>
          <Menu.Item
            name='İş İlanı Ekle' />
          <Menu.Menu position='right'>
            {isAuthenticated? <SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn}/>}
            
           
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}
