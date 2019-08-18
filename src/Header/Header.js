import React, { Component } from 'react';
import styled from 'styled-components';

const Bound = styled.div`
    height: 60px;
    background: pink;
`

class Header extends Component {
    render() {
        return (
            <Bound>
               {this.props.content}
            </Bound>
        );
    }
}

export default Header;