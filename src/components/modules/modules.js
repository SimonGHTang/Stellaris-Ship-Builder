import React, { Component } from 'react';

import { Sidebar, Menu, Divider, Image } from 'semantic-ui-react';

export default class Modules extends Component {
    render() {
        return (
            <div>
                
                    <Menu vertical>
                        <Menu.Item>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='mini' />
                        </Menu.Item>
                        <Menu.Item>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='mini' />
                        </Menu.Item>
                        <Menu.Item>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='mini' />
                        </Menu.Item>
                        <Divider/>
                    </Menu>
            </div>
        )
    }
}

