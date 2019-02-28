import React, { Component } from 'react';

import { Menu, Divider, Image, Button, Segment } from 'semantic-ui-react';

function modSelection(type) {
 switch (type) {
    case 'auxilary_components':
        return null;
    case 'defense_components':
        return null;
    case 'pointDefense_components':
        return null;
    case 'strikecraft_components':
        return null;
    case 'titanic_components':
        return null;
    case 'weapon_components':
        return null;
    default:
        return null;
 }
}

function Modules (props) {
    return (
        <div class='segment-components'>
            <Menu className='menu-components' vertical>
                <Menu.Item>
                    <Button>Ship Class</Button>
                </Menu.Item>
                <Divider/>
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
                </Menu>
            </Menu>
        </div>
    )
}

export default Modules;

