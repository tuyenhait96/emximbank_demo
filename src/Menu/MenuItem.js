import React, { Component } from 'react';
import styled from 'styled-components';
import { Link} from 'react-router-dom';

const Bound = styled.li`
    list-style: none;
    a{
        text-decoration: none;
    }
`

class MenuItem extends Component {
    state = {
        pathActive: this.props.pathActive
    }

    onShowMenuActive = () => {
        this.props.onShowMenuActive(this.props.data.key)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            pathActive: nextProps.pathActive
        });
    }
    render() {
        const { data } = this.props
        const { pathActive } = this.state
        return (
            <Bound onClick  = {()=>this.onShowMenuActive(data.key)} 
            style ={{borderRight: pathActive=== data.key ? '6px solid #f9890c' : 'unset'}}>
            
                <Link to = {data.key}>
                    <img src = {data.icon} alt = {data.label}/>
                    <span>{data.label}</span>
                </Link>
            </Bound>
        );
    }
}

export default MenuItem;