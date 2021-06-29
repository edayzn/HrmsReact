import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
            <Button.Group>
                <Button onClick={signIn} >Giriş yap</Button>
                <Button.Or />
                <Button positive>Kayıt ol</Button>
            </Button.Group>
            </Menu.Item>
        </div>
    )
}
