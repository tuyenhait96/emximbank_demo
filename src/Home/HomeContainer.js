import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const Bound = styled.div`
`

class HomeContainer extends Component {
    render() {
        return (
            <Bound>
                <Header content = 'Home'/>
                HOME
            </Bound>
        );
    }
}

export default HomeContainer;