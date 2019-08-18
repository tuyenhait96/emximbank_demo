import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from "react-router-dom";

import HomeContainer from '../Home/HomeContainer';
import ChatContainer from '../Chat/ChatContainer';

const Bound = styled.div`
    footer{
        background: beige;
        width: 100%;  
        height: 90px;
        position: absolute;
        bottom: 0;
        right: 0;
    }
`

class Main extends Component {
    render() {
        return (
            <Bound>
                <Switch>
                    <Route exact path = '/home' render = {()=>
                        <div className='main-screen-container'>
                            <HomeContainer/>
                        </div>
                    }>
                    </Route>
                    <Route exact path = '/chat' render = {()=>
                        <div className='main-screen-container'>
                            <ChatContainer/>
                        </div>
                    }>
                    </Route>
                    <Redirect from='/' to='/home'/>
                </Switch>
                <footer>

                </footer>
            </Bound>
        );
    }
}

export default Main;