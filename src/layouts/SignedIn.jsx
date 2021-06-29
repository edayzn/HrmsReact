import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Dropdown pointing="top left">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out"/>
                    
                </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
