import React, { Component } from 'react'
import { FaCogs } from 'react-icons/fa'

import StyledDiv from './styles'

class Configs extends Component {
    
    render() {
        return (
            <StyledDiv onClick={() => {this.props.change('configs')}}>
                <FaCogs />
            </StyledDiv>
        )
    }
}

export default Configs