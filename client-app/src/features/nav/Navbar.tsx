import { observer } from 'mobx-react-lite';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Container, Menu, Button } from 'semantic-ui-react'

const Navbar: React.FC = () => {

    return (
            <Menu fixed = 'top' inverted >
                <Container>
                    <Menu.Item header as={NavLink} exact to='/'>
                        <img src="/assets/logo.png" alt ="logo" style = {{marginRight: '25px'}}/>
                        Reactivities
                    </Menu.Item>
                    <Menu.Item name='Activities' as={NavLink} exact to='/activities' />
                    <Menu.Item>
                        <Button as={NavLink} exact to='/createActivity'
                         content='Create Activity' color = 'teal'/>
                    </Menu.Item>
                </Container>
            </Menu>
    )
}

export default observer(Navbar);
