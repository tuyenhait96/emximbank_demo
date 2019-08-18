import React, { Component } from 'react';
import styled from 'styled-components';

//Data
import { menu } from '../data/data';
import MenuItem from './MenuItem';

const Bound = styled.div`
    .menu{
        &__header-logo{
            height: 60px;
            background: green;
        }
        &__profile{
            height: 282px;
            background: black;
        }
    }
`   

class MenuContainer extends Component {
    state = {
        pathActive: window.location.pathname
    }

    onShowMenuActive = (pathActive) => {
        console.log(pathActive)
        this.setState({
            pathActive
        })
    }

    renderMenu = () => {
        return menu.map((item, i) => {
            return(
                <MenuItem key= {i} data = {item}
                    onShowMenuActive = {this.onShowMenuActive}
                    pathActive = {this.state.pathActive}
                />
            )
        })
    }
    render() {
        return (
            <Bound>
                <div className = 'menu__header-logo'></div>
                <div className = "menu__profile"></div>
                {/* -------- MENU --------- */}
                <ul className  = 'menu'>
                    {this.renderMenu()}
                </ul>
            </Bound>
        );
    }
}

export default MenuContainer;