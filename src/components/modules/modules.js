import React, { Component } from 'react';

import { Menu, Divider, Image, Dropdown } from 'semantic-ui-react';

function Modules () {
    return (
        <div>
            
                <Menu vertical>
                    <Menu.Item>
                        <Dropdown fluid selection/>
                    </Menu.Item>
                    <Divider/>
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

export default Modules;

