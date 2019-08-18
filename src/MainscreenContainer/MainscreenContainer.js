import React, { Component } from 'react';
import styled from 'styled-components';

//Compoent
import MenuContainer from '../Menu/MenuContainer';
import Main from '../Main/Main';

// FLEX BOX -|| CSS GRID
const Bound = styled.div`
    display: flex;
    height: 100vh;
    .menu{
        background: red;
        width: 260px;
        min-width: 260px;
        height: 100%;
    }
    .main{
        background: yellow;
        width: 100%;
        min-width: 1180px;
        height: 100%;
        position: relative;
    }
`

class MainscreenContainer extends Component {
    render() {
        return (
            <Bound>
                <div className = 'menu'>
                    <MenuContainer/>
                </div>
                <div className = 'main'>
                    <Main/>
                </div>
            </Bound>
        );
    }
}

export default MainscreenContainer;