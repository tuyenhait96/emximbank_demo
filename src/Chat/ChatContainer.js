import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const Bound = styled.div`
`

class ChatContainer extends Component {
    render() {
        return (
            <Bound>
                <Header content = 'Chat'/>
                CHAT    
            </Bound>
        );
    }
}

export default ChatContainer;